export class AudioTrackPlayer {
    constructor(trackConfig, models, instruments, globalState) {
        this.track = trackConfig;
        this.models = models;
        this.instruments = instruments;
        this.globalState = globalState;

        this.isInitialized = false;
        this.waveSurfers = {};
        this.audioObjects = {};
        this.currentlyPlayingAudioId = null;
        this.dom = {};
        this.isUpdatingWaveform = false; // Prevents event feedback loops
    }

    render(containerElement) {
        this.dom.section = document.createElement('div');
        this.dom.section.className = 'track-section is-collapsed';
        this.dom.section.id = `track-${this.track.id}`;

        this.dom.title = document.createElement('h3');
        this.dom.title.className = 'track-title';
        this.dom.title.textContent = this.track.title;
        this.dom.title.addEventListener('click', () => this.toggleCollapse());

        this.dom.collapsibleContent = document.createElement('div');
        this.dom.collapsibleContent.className = 'collapsible-content';
        
        this.dom.section.appendChild(this.dom.title);
        this.dom.section.appendChild(this.dom.collapsibleContent);
        containerElement.appendChild(this.dom.section);
    }
    
    toggleCollapse() {
        if (!this.isInitialized) {
            this.initializePlayerDOM();
        }
        this.dom.section.classList.toggle('is-collapsed');
    }

    initializePlayerDOM() {
        if (this.isInitialized) return;

        const waveformContainer = document.createElement('div');
        waveformContainer.className = 'waveform-container';
        waveformContainer.innerHTML = `
            <div class="waveform-label">Original Mix</div>
            <div id="waveform-${this.track.id}" class="waveform"></div>
            <div id="mix-player-button-wrapper" style="margin-top: 0.5rem;"></div>
            <div class="stem-waveform-wrapper" style="margin-top: 1rem;">
              <div class="waveform-label" id="stem-label-${this.track.id}" style="display: none;"></div>
              <div id="stem-waveform-${this.track.id}" class="stem-waveform"></div>
            </div>`;
        
        const table = this._createTable();
        this.dom.collapsibleContent.appendChild(waveformContainer);
        this.dom.collapsibleContent.appendChild(table);

        const originalModel = this.models.find(m => m.id === 'original');
        const fullInstrument = this.instruments.find(i => i.id === 'full');
        if (originalModel && fullInstrument) {
            const mixButton = this._createPlayerButton(originalModel, fullInstrument);
            mixButton.style.width = '120px';
            waveformContainer.querySelector('#mix-player-button-wrapper').appendChild(mixButton);
        }

        this.waveSurfers.main = WaveSurfer.create({
            container: `#waveform-${this.track.id}`,
            waveColor: '#ccd6f6', progressColor: '#4c51bf', height: 80,
            barWidth: 2, interact: true,
        });
        
        const mixAudioPath = this.globalState.buildAudioPath(this.track, originalModel, fullInstrument);
        this.waveSurfers.main.load(mixAudioPath);
        this.waveSurfers.main.on('ready', () => this.waveSurfers.main.setMute(true));
        this.waveSurfers.main.on('seek', (position) => this._seekAll(position));
        
        this.isInitialized = true;
        if (typeof MathJax !== "undefined") {
            MathJax.typeset();
        }
    }
    
    _createTable() {
        const table = document.createElement('table');
        table.className = 'comparison-table';
        const thead = table.createTHead();
        const headerRow = thead.insertRow(); // FIX: Properly define headerRow
        const headerText = this.globalState.tableHeader || 'Model / Instrument';
        headerRow.innerHTML = `<th>${headerText}</th>`;
        
        const displayInstruments = this.instruments.filter(inst => inst.id !== 'full');
        
        displayInstruments.forEach(inst => {
            const th = document.createElement('th');
            th.textContent = inst.name;
            if (inst.color) {
                th.style.color = inst.color;
            }
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        this.models.filter(model => model.id !== 'original').forEach(model => {
            const row = tbody.insertRow();
            row.className = model.isOurs ? 'our-model' : '';
            row.insertCell().innerHTML = model.name;
            displayInstruments.forEach(inst => {
                row.insertCell().appendChild(this._createPlayerButton(model, inst));
            });
        });
        return table;
    }
    

    _createPlayerButton(model, instrument) {
        const audioId = `${this.track.id}_${model.id}_${instrument.id}`;
        const button = document.createElement('button');
        button.className = 'player-button';
        button.textContent = 'Play';
        button.dataset.audioId = audioId;
        
        const progress = document.createElement('div');
        progress.className = 'progress-indicator';
        button.appendChild(progress);
        
        const audioPath = this.globalState.buildAudioPath(this.track, model, instrument);
        button.onclick = () => this._handlePlay(button, audioId, audioPath, model, instrument);
        return button;
    }

    _handlePlay(button, audioId, audioPath, model, instrument) {
        const audio = this.audioObjects[this.currentlyPlayingAudioId];

        if (audioId === this.currentlyPlayingAudioId && audio) {
            if (audio.paused) {
                audio.play();
                button.textContent = 'Stop';
                button.classList.add('playing');
                Object.values(this.waveSurfers).forEach(ws => ws && ws.play());
            } else {
                audio.pause();
                button.textContent = 'Play';
                button.classList.remove('playing');
                Object.values(this.waveSurfers).forEach(ws => ws && ws.pause());
            }
            return;
        }

        const syncTime = this.globalState.sync ? this._getSyncTime() : 0;
        
        if (this.globalState.activePlayer) {
            this.globalState.activePlayer._stopCurrent(false);
        }
        
        this._updateStemWaveform(model, instrument, audioPath);

        let newAudio = this.audioObjects[audioId];
        if (!newAudio) {
            newAudio = this._createAudio(audioId, audioPath);
        }
        
        newAudio.currentTime = syncTime;
        newAudio.volume = this.globalState.volume;
        newAudio.loop = this.globalState.loop;
        
        newAudio.play().then(() => {
            button.textContent = 'Stop';
            button.classList.add('playing');
            this.currentlyPlayingAudioId = audioId;
            this.globalState.activePlayer = this;
            Object.values(this.waveSurfers).forEach(ws => ws && ws.play());
        }).catch(err => {
            console.error(`Playback failed for ${audioPath}`, err);
            button.textContent = 'Error';
            button.disabled = true;
            this._stopCurrent(true);
        });
    }
    
    _createAudio(audioId, audioPath) {
        const audio = new Audio(audioPath);
        this.audioObjects[audioId] = audio;

        audio.addEventListener('timeupdate', () => {
            if (this.isUpdatingWaveform || this.currentlyPlayingAudioId !== audioId || !audio.duration) return;
            
            if (!audio._lastUpdate || Date.now() - audio._lastUpdate > 50) {
                audio._lastUpdate = Date.now();
                const progress = audio.currentTime / audio.duration;
                
                this.isUpdatingWaveform = true;
                if (this.waveSurfers.main) this.waveSurfers.main.seekTo(progress);
                if (this.waveSurfers.stem) this.waveSurfers.stem.seekTo(progress);
                this.isUpdatingWaveform = false;

                const allButtons = this.dom.section.querySelectorAll(`[data-audio-id="${audioId}"]`);
                allButtons.forEach(button => {
                     const progIndicator = button.querySelector('.progress-indicator');
                     if (progIndicator) progIndicator.style.width = `${progress * 100}%`;
                });
            }
            
            if (this.track.crop && audio.currentTime >= this.track.crop) {
                if (this.globalState.loop) audio.currentTime = 0;
                else this._stopCurrent(true);
            }
        });

        audio.addEventListener('ended', () => { if (!audio.loop) this._stopCurrent(true); });
        audio.addEventListener('error', (e) => {
            console.error('Audio Error:', e);
            const button = this.dom.section.querySelector(`[data-audio-id="${audioId}"]`);
            if (button) {
                button.textContent = 'N/A';
                button.disabled = true;
                button.classList.add('unavailable');
            }
        });
        return audio;
    }

    _updateStemWaveform(model, instrument, audioPath) {
        const stemLabel = document.getElementById(`stem-label-${this.track.id}`);
        const stemWaveformEl = document.getElementById(`stem-waveform-${this.track.id}`);
        
        if (this.waveSurfers.stem) this.waveSurfers.stem.destroy();
        delete this.waveSurfers.stem;

        if (model.id === 'original') {
            stemLabel.style.display = 'none';
            stemWaveformEl.style.display = 'none';
            return;
        }
        
        stemLabel.textContent = `Stem: ${model.name} - ${instrument.name}`;
        stemLabel.style.display = 'block';
        stemWaveformEl.style.display = 'block';
        
        const instrumentColor = this._getInstrumentColor(instrument.id);
        const progressColor = this._getLighterColor(instrumentColor);

        this.waveSurfers.stem = WaveSurfer.create({
            container: stemWaveformEl,
            waveColor: instrumentColor, progressColor: progressColor,
            height: 60, barWidth: 2, interact: true,
        });
        this.waveSurfers.stem.load(audioPath);
        this.waveSurfers.stem.on('ready', () => this.waveSurfers.stem.setMute(true));
        this.waveSurfers.stem.on('seek', (position) => this._seekAll(position));
    }

    _seekAll(position) {
        if (this.isUpdatingWaveform) return;
        
        const audio = this.audioObjects[this.currentlyPlayingAudioId];
        if (audio && audio.duration) {
            this.isUpdatingWaveform = true;
            audio.currentTime = audio.duration * position;
            setTimeout(() => { this.isUpdatingWaveform = false; }, 100);
        }
    }

    _getSyncTime() {
        const activePlayer = this.globalState.activePlayer;
        if (activePlayer && activePlayer.currentlyPlayingAudioId) {
            const currentAudio = activePlayer.audioObjects[activePlayer.currentlyPlayingAudioId];
            if (currentAudio) {
                return currentAudio.currentTime;
            }
        }
        return 0;
    }

    _stopCurrent(resetTime = false) {
        if (!this.currentlyPlayingAudioId) return;
        
        const audioIdToStop = this.currentlyPlayingAudioId;
        const audio = this.audioObjects[audioIdToStop];

        if (audio) {
            audio.pause();
            if (resetTime) audio.currentTime = 0;
        }

        Object.values(this.waveSurfers).forEach(ws => ws && ws.pause());
        
        const button = this.dom.section.querySelector(`[data-audio-id="${audioIdToStop}"]`) || document.querySelector(`[data-audio-id="${audioIdToStop}"]`);
        if (button) {
            button.classList.remove('playing');
            button.textContent = 'Play';
            if (resetTime) {
                button.querySelector('.progress-indicator').style.width = '0%';
            }
        }
        
        this.currentlyPlayingAudioId = null;
        if (this.globalState.activePlayer === this) {
            this.globalState.activePlayer = null;
        }
    }

    stopAudio() {
        this._stopCurrent(true);
    }

    _getInstrumentColor(instrumentId) {
        const instrument = this.instruments.find(inst => inst.id === instrumentId);
        return instrument ? instrument.color : '#a0aec0';
    }

    _getLighterColor(hexColor) {
        if (!hexColor || hexColor.length < 7) return '#d1d5db';
        let r = parseInt(hexColor.substr(1, 2), 16);
        let g = parseInt(hexColor.substr(3, 2), 16);
        let b = parseInt(hexColor.substr(5, 2), 16);
        
        r = Math.min(255, r + 40);
        g = Math.min(255, g + 40);
        b = Math.min(255, b + 40);
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
}