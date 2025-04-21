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

<style>
  .audio-demos-section {
    margin-bottom: 2rem;
  }
  
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
  }

  .comparison-table th, .comparison-table td {
    padding: 0.5rem;
    border: 1px solid #e2e8f0;
    text-align: center;
  }

  .comparison-table th {
    background-color: #f7fafc;
    font-weight: 600;
  }

  .model-name {
    font-weight: 600;
    text-align: left !important;
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
    margin-bottom: 1.5rem;
    padding: 0.75rem;
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
    .comparison-table {
      display: block;
      overflow-x: auto;
    }
    
    .comparison-table td, 
    .comparison-table th {
      padding: 0.3rem;
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

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Track configuration data
    const tracks = [
      {
        id: "rock",
        title: "Rock 120 BPM, 4/4 Beat (Portland)",
        baseFile: "43_rock_120_beat_4-4_portland"
      },
      {
        id: "funk",
        title: "Funk 110 BPM (Minneapolis)",
        baseFile: "28_funk_110_minneapolis"
      }
    ];
    
    // Models configuration
    const models = [
      { id: "original", name: "Original Mix", instruments: ["full"] },
      { id: "GT", name: "Ground Truth" },
      { id: "IDM", name: "Our Method" },
      { id: "Larsnet", name: "Larsnet" },
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
    
    // Audio state
    let currentlyPlaying = null;
    let currentTrackId = null;
    let audioObjects = {};
    let currentPlaybackTime = 0;
    
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
        if (instrument.id !== "full") {  // Skip "Full Mix" column header
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
        
        // Model name cell
        const modelCell = document.createElement('td');
        modelCell.className = 'model-name';
        modelCell.textContent = model.name;
        row.appendChild(modelCell);
        
        // If Original Mix, add Full Mix button
        if (model.id === "original") {
          const fullMixCell = document.createElement('td');
          fullMixCell.colSpan = displayInstruments.length - 1; // Span all instrument columns except "full"
          
          const audioId = `${track.id}_${model.id}_full`;
          const audioPath = `/assets/audio/inverse-drum-machine/GT/${track.baseFile}_mix.wav`;
          
          const button = createPlayerButton(audioId, audioPath, track.id);
          
          fullMixCell.appendChild(button);
          row.appendChild(fullMixCell);
        } else {
          // Add cells for each instrument (excluding "full")
          displayInstruments.forEach(instrument => {
            if (instrument.id === "full") return; // Skip "full" instrument for non-original models
            
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
    });
    
    // Create player button helper function
    function createPlayerButton(audioId, audioPath, trackId) {
      const button = document.createElement('button');
      button.className = 'player-button';
      button.textContent = 'Play';
      button.dataset.id = audioId;
      button.dataset.track = trackId;
      
      // Progress indicator
      const progress = document.createElement('div');
      progress.className = 'progress-indicator';
      button.appendChild(progress);
      
      button.addEventListener('click', () => handlePlayClick(audioId, audioPath, trackId));
      
      return button;
    }
    
    // Handle play button click
    function handlePlayClick(audioId, audioPath, trackId) {
      // If this is the currently playing audio, stop it
      if (currentlyPlaying === audioId) {
        stopAudio();
        return;
      }
      
      // Check if we're switching instruments within the same track
      const isSameTrack = trackId === currentTrackId;
      
      // Capture current position before stopping if we're syncing playback
      let startPosition = 0;
      if (isSameTrack && syncCheckbox.checked && currentlyPlaying) {
        startPosition = audioObjects[currentlyPlaying]?.currentTime || 0;
      }
      
      // If something else is playing, stop it first
      if (currentlyPlaying) {
        stopAudio(false); // Don't reset track info
      }
      
      // Create or get the audio object
      if (!audioObjects[audioId]) {
        // Create new audio object
        const audio = new Audio();
        audio.src = audioPath;
        audio.preload = 'auto';
        
        // Set up event handlers
        audio.addEventListener('error', () => {
          const button = document.querySelector(`button[data-id="${audioId}"]`);
          if (button) {
            button.classList.add('unavailable');
            button.textContent = 'N/A';
            button.disabled = true;
          }
        });
        
        // Time update for progress bar
        audio.addEventListener('timeupdate', () => {
          updateProgress(audioId);
          currentPlaybackTime = audio.currentTime;
        });
        
        // Ended event
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
      
      // Apply settings
      audio.volume = parseFloat(volumeSlider.value);
      audio.loop = loopCheckbox.checked;
      
      // Set start position if syncing and same track
      if (isSameTrack && syncCheckbox.checked && startPosition > 0) {
        audio.currentTime = startPosition;
      }
      
      // Play the audio
      audio.play()
        .then(() => {
          // Update button state
          const button = document.querySelector(`button[data-id="${audioId}"]`);
          if (button) {
            button.textContent = 'Stop';
            button.classList.add('playing');
          }
          
          // Set as currently playing
          currentlyPlaying = audioId;
          currentTrackId = trackId;
        })
        .catch(error => {
          console.error('Error playing audio:', error);
          const button = document.querySelector(`button[data-id="${audioId}"]`);
          if (button) {
            button.classList.add('unavailable');
            button.textContent = 'Error';
          }
        });
    }
    
    // Stop currently playing audio
    function stopAudio(resetTrackInfo = true) {
      if (!currentlyPlaying || !audioObjects[currentlyPlaying]) {
        return;
      }
      
      // Get the audio
      const audio = audioObjects[currentlyPlaying];
      
      // Pause it
      audio.pause();
      
      // Reset button
      resetPlayButton(currentlyPlaying);
      
      // Clear current
      currentlyPlaying = null;
      if (resetTrackInfo) {
        currentTrackId = null;
      }
    }
    
    // Reset play button appearance
    function resetPlayButton(audioId) {
      const button = document.querySelector(`button[data-id="${audioId}"]`);
      if (button) {
        button.textContent = 'Play';
        button.classList.remove('playing');
      }
    }
    
    // Update progress indicator
    function updateProgress(audioId) {
      if (!audioObjects[audioId]) return;
      
      const audio = audioObjects[audioId];
      const button = document.querySelector(`button[data-id="${audioId}"]`);
      
      if (!button) return;
      
      const progress = button.querySelector('.progress-indicator');
      if (!progress) return;
      
      if (audio.duration > 0) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = `${percent}%`;
      }
    }
    
    // Stop all button
    stopAllButton.addEventListener('click', () => stopAudio(true));
    
    // Volume slider
    volumeSlider.addEventListener('input', () => {
      const volume = parseFloat(volumeSlider.value);
      
      // Update volume of currently playing audio
      if (currentlyPlaying && audioObjects[currentlyPlaying]) {
        audioObjects[currentlyPlaying].volume = volume;
      }
    });
    
    // Loop checkbox
    loopCheckbox.addEventListener('change', () => {
      const isLooping = loopCheckbox.checked;
      
      // Update loop setting of currently playing audio
      if (currentlyPlaying && audioObjects[currentlyPlaying]) {
        audioObjects[currentlyPlaying].loop = isLooping;
      }
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

