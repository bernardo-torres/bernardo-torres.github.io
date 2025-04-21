---
layout: single
permalink: /projects/inverse-drum-machine/
# title: "Inverse Drum Machine"
author_profile: false
classes: wide
---

<style>
.track-section {
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1.5rem;
}

.track-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #2b6cb0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  overflow-x: auto;
  display: block;
}

.comparison-table th, .comparison-table td {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
}

.comparison-table th {
  background-color: #f7fafc;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  background-color: #f8f9fa;
}

.model-name {
  font-weight: 600;
  min-width: 100px;
}

.player-button {
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  position: relative;
  transition: all 0.2s;
}

.player-button:hover {
  background-color: #3182ce;
}

.player-button.playing {
  background-color: #e53e3e;
}

.player-button.playing:hover {
  background-color: #c53030;
}

.player-button.unavailable {
  background-color: #a0aec0;
  opacity: 0.5;
  cursor: not-allowed;
}

.player-button.unavailable:hover {
  background-color: #a0aec0;
}

.progress-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background-color: rgba(255, 255, 255, 0.7);
  transition: width 0.1s linear;
}

.global-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f0f9ff;
  border-radius: 0.5rem;
  align-items: center;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.volume-slider {
  width: 100px;
}

.stop-all-button {
  background-color: #e53e3e;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.stop-all-button:hover {
  background-color: #c53030;
}

@media (max-width: 768px) {
  .comparison-table td, .comparison-table th {
    padding: 0.3rem;
  }
  
  .model-name {
    font-size: 0.8rem;
    min-width: 70px;
  }
  
  .player-button {
    padding: 0.3rem;
    font-size: 0.8rem;
  }
  
  .global-controls {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .control-group.volume {
    width: 100%;
  }
  
  .volume-slider {
    width: 100%;
  }
}
</style>

# Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis

This is the accompanying page for the paper "The Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis", currently under review. The Inverse Drum Machine system uses joint transcription and analysis-by-synthesis to separate drum components from mixed audio without needing isolated sources for training.


## Paper and Code

- [Paper (PDF)](#) <!-- Add your paper link when available -->
- [GitHub Repository](#) <!-- Add your GitHub repo link -->


<!-- 
  Fixed Inverse Drum Machine Audio Demo
  HTML implementation with WaveSurfer.js
-->

<div class="audio-demos-section">
  <h2>Audio Demos</h2>
  
  <p>Compare how different models separate drums from the same audio mixtures. Use the buttons to play the separated audio for each drum instrument across different models.</p>

  <div class="global-controls">
    <div class="control-group">
      <button id="stopAllButton" class="stop-all-button">Stop All</button>
    </div>
    <div class="control-group">
      <input type="checkbox" id="syncCheckbox" class="sync-checkbox" checked>
      <label for="syncCheckbox">Sync Playback</label>
    </div>
    <div class="control-group">
      <input type="checkbox" id="loopCheckbox" class="loop-checkbox" checked>
      <label for="loopCheckbox">Loop</label>
    </div>
    <div class="control-group volume">
      <label for="volumeSlider">Volume:</label>
      <input type="range" id="volumeSlider" class="volume-slider" min="0" max="1" step="0.01" value="0.8">
    </div>
  </div>

  <div id="audio-demos"></div>
</div>

<!-- Load WaveSurfer.js -->
<script src="https://unpkg.com/wavesurfer.js@6.6.3/dist/wavesurfer.min.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Track configuration data
    const tracks = [
      {
        id: "rock",
        title: "43_rock_120_beat_4-4, drum kit: portland",
        baseFile: "43_rock_120_beat_4-4_portland"
      },
      {
        id: "funk",
        title: "93_hiphop_75_beat_4-4, drum kit: heavy",
        baseFile: "93_hiphop_75_beat_4-4_heavy"
      }
    ];
    
    // Models configuration
    const models = [
      { id: "original", name: "Original Mix", instruments: ["full"] },
      { id: "GT", name: "Ground Truth" },
      { id: "Oracle", name: "Oracle" },
      { id: "IDM", name: "IDM (Our Method)" },
      { id: "LarsNet", name: "LarsNet" },
      { id: "NMFD", name: "NMFD" }
    ];
    
    // Instrument configuration
    const instruments = [
      { id: "full", name: "Full Mix" },
      { id: "KD", name: "Kick Drum" },
      { id: "SD", name: "Snare Drum" },
      { id: "HH", name: "Hi-Hat" },
      { id: "CY", name: "Crash Cymbal" },
      { id: "TT", name: "Tom-Tom" }
    ];
    
    // UI elements
    const stopAllButton = document.getElementById('stopAllButton');
    const loopCheckbox = document.getElementById('loopCheckbox');
    const syncCheckbox = document.getElementById('syncCheckbox');
    const volumeSlider = document.getElementById('volumeSlider');
    const audioDemosContainer = document.getElementById('audio-demos');
    
    // Audio & waveform state
    let currentlyPlaying = null;
    let currentTrackId = null;
    let audioObjects = {};
    const waveSurfers = {};
    let isUpdatingWaveform = false; // Flag to prevent event loops
    
    // Build the track sections
    tracks.forEach(track => {
      // Create track section
      const trackSection = document.createElement('div');
      trackSection.className = 'track-section';
      trackSection.id = `track-${track.id}`;
      
      // Add track title
      const trackTitle = document.createElement('h3');
      trackTitle.className = 'track-title';
      trackTitle.textContent = track.title;
      trackSection.appendChild(trackTitle);
      
      // Add waveform container
      const wfDiv = document.createElement('div');
      wfDiv.className = 'waveform';
      wfDiv.id = `waveform-${track.id}`;
      trackSection.appendChild(wfDiv);
      
      // Create table
      const table = document.createElement('table');
      table.className = 'comparison-table';
      
      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      
      // Empty cell for model names
      const emptyHeader = document.createElement('th');
      emptyHeader.textContent = 'Model / Instrument';
      headerRow.appendChild(emptyHeader);
      
      // Filter instruments based on model
      const displayInstruments = instruments.filter(instr => 
        instr.id !== "full" || (instr.id === "full" && models.some(m => m.instruments && m.instruments.includes("full")))
      );
      
      // Add instrument headers
      displayInstruments.forEach(instrument => {
        if (instrument.id !== "full") {
          const th = document.createElement('th');
          th.textContent = instrument.name;
          th.dataset.instrument = instrument.id;
          headerRow.appendChild(th);
        }
      });
      
      thead.appendChild(headerRow);
      table.appendChild(thead);
      
      // Create table body
      const tbody = document.createElement('tbody');
      
      // Add model rows
      models.forEach(model => {
        const row = document.createElement('tr');
        row.dataset.model = model.id;
        
        const modelCell = document.createElement('td');
        modelCell.className = 'model-name';
        modelCell.textContent = model.name;
        row.appendChild(modelCell);
        
        if (model.id === "original") {
          const fullMixCell = document.createElement('td');
          fullMixCell.colSpan = displayInstruments.length - 1;
          
          const audioId = `${track.id}_${model.id}_full`;
          const audioPath = `/assets/audio/inverse-drum-machine/GT/${track.baseFile}_mix.wav`;
          
          const button = createPlayerButton(audioId, audioPath, track.id);
          fullMixCell.appendChild(button);
          row.appendChild(fullMixCell);
        } else {
          displayInstruments.forEach(instrument => {
            if (instrument.id === "full") return;
            
            const cell = document.createElement('td');
            const audioId = `${track.id}_${model.id}_${instrument.id}`;
            const audioPath = `/assets/audio/inverse-drum-machine/${model.id}/${track.baseFile}_${instrument.id}.wav`;
            const button = createPlayerButton(audioId, audioPath, track.id);
            cell.appendChild(button);
            row.appendChild(cell);
          });
        }
        
        tbody.appendChild(row);
      });
      
      table.appendChild(tbody);
      trackSection.appendChild(table);
      audioDemosContainer.appendChild(trackSection);
      
      // Initialize WaveSurfer for this track
      const ws = WaveSurfer.create({
        container: `#waveform-${track.id}`,
        waveColor: '#ccd6f6',
        progressColor: '#4c51bf',
        height: 80,
        responsive: true,
        barWidth: 2,
        cursorWidth: 1, // Add cursor for better visual feedback
        interact: true
      });
      
      // Load the original track mix
      ws.load(`/assets/audio/inverse-drum-machine/GT/${track.baseFile}_mix.wav`);
      
      // Configure WaveSurfer events
      ws.on('ready', () => {
        console.log(`WaveSurfer ready for track ${track.id}`);
        ws.setMute(true); // Mute wavesurfer, we'll use our own audio elements
      });
      
      ws.on('seek', position => {
        if (isUpdatingWaveform) return;
        if (currentTrackId !== track.id) return;
        
        // When user seeks in waveform, sync all audio elements for this track
        const t = ws.getDuration() * position;
        Object.keys(audioObjects)
          .filter(id => id.startsWith(track.id))
          .forEach(id => {
            const audio = audioObjects[id];
            if (Math.abs(audio.currentTime - t) > 0.1) {
              audio.currentTime = t;
            }
          });
      });
      
      // Handle waveform errors
      ws.on('error', err => {
        console.warn('WaveSurfer error:', err);
      });
      
      // Store WaveSurfer instance
      waveSurfers[track.id] = ws;
    });
    
    // Create player button helper
    function createPlayerButton(audioId, audioPath, trackId) {
      const button = document.createElement('button');
      button.className = 'player-button';
      button.textContent = 'Play';
      button.dataset.id = audioId;
      button.dataset.track = trackId;
      
      const progress = document.createElement('div');
      progress.className = 'progress-indicator';
      button.appendChild(progress);
      
      button.addEventListener('click', () => handlePlayClick(audioId, audioPath, trackId));
      return button;
    }
    
    // Update progress indicator
    function updateProgress(audioId) {
      const audio = audioObjects[audioId];
      const btn = document.querySelector(`button[data-id="${audioId}"]`);
      const prog = btn && btn.querySelector('.progress-indicator');
      
      if (prog && audio && audio.duration) {
        prog.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
      }
    }
    
    // Handle play/stop, now also driving the waveform
    function handlePlayClick(audioId, audioPath, trackId) {
      // If same clip, just toggle stop
      if (currentlyPlaying === audioId) {
        stopAudio();
        return;
      }
      
      const ws = waveSurfers[trackId];
      const isSameTrack = trackId === currentTrackId;
      let startPos = 0;
      
      if (isSameTrack && syncCheckbox.checked && currentlyPlaying) {
        startPos = audioObjects[currentlyPlaying]?.currentTime || 0;
      }
      
      if (currentlyPlaying) {
        stopAudio(false);
      }
      
      // Create or reuse audio element
      if (!audioObjects[audioId]) {
        const audio = new Audio(audioPath);
        audio.preload = 'auto';
        audio.dataset.track = trackId;
        
        audio.addEventListener('error', (e) => {
          console.warn(`Audio error for ${audioId}:`, e);
          const btn = document.querySelector(`button[data-id="${audioId}"]`);
          if (btn) { 
            btn.classList.add('unavailable'); 
            btn.textContent = 'N/A'; 
          }
        });
        
        // Update progress on timeupdate
        audio.addEventListener('timeupdate', () => {
          if (currentlyPlaying !== audioId) return;
          
          // Update button progress
          updateProgress(audioId);
          
          // Always update waveform position to ensure progress is visible
          if (ws && ws.isReady && currentTrackId === trackId) {
            const currentPos = audio.currentTime / (audio.duration || 1);
            if (!isNaN(currentPos)) {
              // Direct update for waveform progress
              if (!isUpdatingWaveform) {
                isUpdatingWaveform = true;
                try {
                  ws.seekTo(currentPos);
                } catch (e) {
                  console.warn('Error updating waveform position:', e);
                }
                setTimeout(() => { isUpdatingWaveform = false; }, 10);
              }
            }
          }
        });
        
        audio.addEventListener('ended', () => {
          if (!audio.loop) {
            resetPlayButton(audioId);
            currentlyPlaying = null;
            currentTrackId = null;
          }
        });
        
        audioObjects[audioId] = audio;
      }
      
      const audio = audioObjects[audioId];
      audio.volume = parseFloat(volumeSlider.value);
      audio.loop = loopCheckbox.checked;
      
      // Set starting position if needed
      if (ws && ws.isReady && isSameTrack && syncCheckbox.checked && startPos > 0) {
        try {
          audio.currentTime = startPos;
          isUpdatingWaveform = true;
          ws.seekTo(startPos / (ws.getDuration() || 1));
          setTimeout(() => { isUpdatingWaveform = false; }, 50);
        } catch (e) {
          console.warn('Error setting start position:', e);
        }
      }
      
      // Play audio with error handling
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            const btn = document.querySelector(`button[data-id="${audioId}"]`);
            if (btn) { 
              btn.textContent = 'Stop'; 
              btn.classList.add('playing'); 
            }
            
            currentlyPlaying = audioId;
            currentTrackId = trackId;
            
            // Start waveform animation
            if (ws && ws.isReady) {
              ws.play();
              ws.setMute(true);
            }
          })
          .catch(err => {
            console.error('Error playing audio:', err);
            const btn = document.querySelector(`button[data-id="${audioId}"]`);
            if (btn) { 
              btn.classList.add('unavailable'); 
              btn.textContent = 'Error'; 
            }
          });
      } else {
        // Fallback for browsers without promise support
        const btn = document.querySelector(`button[data-id="${audioId}"]`);
        if (btn) { 
          btn.textContent = 'Stop'; 
          btn.classList.add('playing'); 
        }
        
        currentlyPlaying = audioId;
        currentTrackId = trackId;
        
        // Start waveform animation
        if (ws && ws.isReady) {
          ws.play();
          ws.setMute(true);
        }
      }
    }
    
    // Stop audio + waveform
    function stopAudio(resetTrackInfo = true) {
      if (!currentlyPlaying) return;
      
      // Stop audio
      const audio = audioObjects[currentlyPlaying];
      if (audio) {
        try {
          audio.pause();
        } catch (e) {
          console.warn('Error pausing audio:', e);
        }
      }
      
      // Stop waveform
      const ws = waveSurfers[currentTrackId];
      if (ws && ws.isReady) {
        try {
          ws.pause();
        } catch (e) {
          console.warn('Error pausing wavesurfer:', e);
        }
      }
      
      resetPlayButton(currentlyPlaying);
      currentlyPlaying = null;
      if (resetTrackInfo) currentTrackId = null;
    }
    
    function resetPlayButton(audioId) {
      const btn = document.querySelector(`button[data-id="${audioId}"]`);
      if (btn) { 
        btn.textContent = 'Play'; 
        btn.classList.remove('playing'); 
      }
    }
    
    // Wire up global controls
    stopAllButton.addEventListener('click', () => stopAudio(true));
    
    volumeSlider.addEventListener('input', () => {
      const volume = parseFloat(volumeSlider.value);
      if (currentlyPlaying && audioObjects[currentlyPlaying]) {
        try {
          audioObjects[currentlyPlaying].volume = volume;
        } catch (e) {
          console.warn('Error setting volume:', e);
        }
      }
    });
    
    loopCheckbox.addEventListener('change', () => {
      const isLooping = loopCheckbox.checked;
      if (currentlyPlaying && audioObjects[currentlyPlaying]) {
        try {
          audioObjects[currentlyPlaying].loop = isLooping;
        } catch (e) {
          console.warn('Error setting loop:', e);
        }
      }
    });
    
    // Cleanup function for page unload
    window.addEventListener('beforeunload', () => {
      // Stop any playing audio first
      stopAudio(true);
      
      // Destroy WaveSurfer instances to free resources
      Object.values(waveSurfers).forEach(ws => {
        if (ws && typeof ws.destroy === 'function') {
          try {
            ws.destroy();
          } catch (e) {
            console.warn('Error destroying WaveSurfer:', e);
          }
        }
      });
      
      // Clear audio objects
      Object.values(audioObjects).forEach(audio => {
        if (audio) {
          try {
            audio.src = '';
            audio.load();
          } catch (e) {
            console.warn('Error cleaning up audio:', e);
          }
        }
      });
    });
  });
</script>

## Method


## Citation

If you use our work in your research, please cite our paper:

```
@inproceedings{torres2024inverse,
  title={The Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis},
  author={Torres, Bernardo and Peeters, Geoffroy and Richard, Gaël},
  booktitle={Proceedings of...},
  year={2024},
  organization={...}
}
```

