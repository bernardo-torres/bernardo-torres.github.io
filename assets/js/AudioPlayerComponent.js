// This component has been refactored to implement a more intuitive
// pause/resume and single-click track switching functionality.
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
    }
    
    _createTable() {
        const table = document.createElement('table');
        table.className = 'comparison-table';
        const thead = table.createTHead().insertRow();
        const displayInstruments = this.instruments.filter(inst => inst.id !== 'full');
        
        thead.innerHTML = '<th>Model / Instrument</th>';
        displayInstruments.forEach(inst => thead.innerHTML += `<th>${inst.name}</th>`);

        const tbody = table.createTBody();
        this.models.filter(model => model.id !== 'original').forEach(model => {
            const row = tbody.insertRow();
            row.className = model.isOurs ? 'our-model' : '';
            row.insertCell().textContent = model.name;
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

        // Case 1: Toggle pause/play on the currently active track
        if (audioId === this.currentlyPlayingAudioId && audio) {
            if (audio.paused) {
                audio.play();
                button.textContent = 'Stop';
                button.classList.add('playing');
                Object.values(this.waveSurfers).forEach(ws => ws && ws.play());
            } else {
                audio.pause(); // This is now a PAUSE, not a full stop.
                button.textContent = 'Play';
                button.classList.remove('playing');
                Object.values(this.waveSurfers).forEach(ws => ws && ws.pause());
            }
            return;
        }

        // Case 2: Switch to a new track
        const syncTime = this.globalState.sync ? this._getSyncTime() : 0;
        
        if (this.globalState.activePlayer) {
            this.globalState.activePlayer._stopCurrent(false); // Stop but preserve time
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
            
            this.isUpdatingWaveform = true;
            const progress = audio.currentTime / audio.duration;
            
            if (this.waveSurfers.main) this.waveSurfers.main.seekTo(progress);
            if (this.waveSurfers.stem) this.waveSurfers.stem.seekTo(progress);

            const allButtons = this.dom.section.querySelectorAll(`[data-audio-id="${audioId}"]`);
            allButtons.forEach(button => {
                 const progIndicator = button.querySelector('.progress-indicator');
                 if (progIndicator) progIndicator.style.width = `${progress * 100}%`;
            });
            
            if (this.track.crop && audio.currentTime >= this.track.crop) {
                if (this.globalState.loop) {
                    audio.currentTime = 0;
                } else {
                    this._stopCurrent(true);
                }
            }
            this.isUpdatingWaveform = false;
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
        
        if (this.waveSurfers.stem) {
            this.waveSurfers.stem.destroy();
            delete this.waveSurfers.stem;
        }

        if (model.id === 'original') {
            stemLabel.style.display = 'none';
            stemWaveformEl.style.display = 'none';
            return;
        }
        
        stemLabel.textContent = `Stem: ${model.name} - ${instrument.name}`;
        stemLabel.style.display = 'block';
        stemWaveformEl.style.display = 'block';
        
        this.waveSurfers.stem = WaveSurfer.create({
            container: stemWaveformEl,
            waveColor: '#dd6b20', progressColor: '#c53030',
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
            if (resetTime) {
                audio.currentTime = 0;
            }
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

    // Public method for global "Stop All" button - this performs a hard reset.
    stopAudio() {
        this._stopCurrent(true);
    }
}

