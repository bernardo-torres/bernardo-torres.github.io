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

/* Waveform styles */
.waveform-container {
  margin-bottom: 1.5rem;
}

.waveform {
  height: 80px;
  margin-bottom: 0.5rem;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
}

.stem-waveform {
  height: 60px;
  margin-bottom: 0.75rem;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  display: none; /* Hidden by default */
}

.waveform-label {
  font-size: 0.8rem;
  color: #4a5568;
  margin-bottom: 0.25rem;
  font-weight: 600;
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

- [Paper (PDF)](/documents/inverse_drum_machine.pdf) <!-- Add your paper link when available -->
- [GitHub Repository](https://github.com/bernardo-torres/inverse-drum-machine) <!-- Add your GitHub repo link -->


<h2>Drum Samples and Envelopes</h2>

<div class="additional-content-controls">
  <p class="content-notice">
    <i>Note: The interactive drum samples and envelopes visualizations may take some time to load. For best performance, you can toggle them on only when needed, or <a href="/assets/html/inverse-drum-machine/IDM/test_drum_samples.html" target="_blank">open the drum samples</a> and <a href="/assets/html/inverse-drum-machine/IDM/test_envelopes.html" target="_blank">envelopes</a> in separate windows.</i>
  </p>
  
  <button id="toggleVisualizationsBtn" class="toggle-button">Show Visualizations</button>
</div>

<div id="visualizationsContainer" style="display: none; margin-top: 1rem;">
  <div class="iframe-container" style="display: flex; flex-wrap: wrap; gap: 1rem;">
    <div style="flex: 1 1 100%; min-width: 300px;">
      <h3>Drum Samples</h3>
      <div class="iframe-placeholder" data-src="/assets/html/inverse-drum-machine/IDM/test_drum_samples.html">
        <div class="placeholder-content">Click to load Drum Samples visualization</div>
      </div>
    </div>
    
    <div style="flex: 1 1 100%; min-width: 300px;">
      <h3>Envelopes</h3>
      <div class="iframe-placeholder" data-src="/assets/html/inverse-drum-machine/IDM/test_envelopes.html">
        <div class="placeholder-content">Click to load Envelopes visualization</div>
      </div>
    </div>
  </div>
</div>

<style>
  .additional-content-controls {
    background-color: #f0f9ff;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .content-notice {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    color: #4a5568;
  }
  
  .toggle-button {
    background-color: #4299e1;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .toggle-button:hover {
    background-color: #3182ce;
  }
  
  .iframe-placeholder {
    border: 1px dashed #cbd5e0;
    border-radius: 0.25rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #f7fafc;
    transition: background-color 0.2s;
  }
  
  .iframe-placeholder:hover {
    background-color: #edf2f7;
  }
  
  .placeholder-content {
    color: #4a5568;
    font-size: 0.9rem;
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleVisualizationsBtn');
    const container = document.getElementById('visualizationsContainer');
    const placeholders = document.querySelectorAll('.iframe-placeholder');
    
    // Toggle visualizations container
    toggleBtn.addEventListener('click', () => {
      if (container.style.display === 'none') {
        container.style.display = 'block';
        toggleBtn.textContent = 'Hide Visualizations';
      } else {
        container.style.display = 'none';
        toggleBtn.textContent = 'Show Visualizations';
      }
    });
    
    // Set up lazy loading for iframes
    placeholders.forEach(placeholder => {
      placeholder.addEventListener('click', () => {
        const src = placeholder.getAttribute('data-src');
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.width = '100%';
        iframe.height = '500px';
        iframe.frameBorder = '0';
        iframe.style.borderRadius = '0.25rem';
        
        // Replace placeholder with iframe
        placeholder.parentNode.replaceChild(iframe, placeholder);
      });
    });
  });
</script>

<div class="audio-demos-section">
  <h2>Audio Demos</h2>
<p>
  We present some audio demos showcasing the performance of our model and our baselines. The following examples were not curated. As the individual stems for drums are often very sparse, listening can be tricky. We therefore present an interactive demo where the tracks are played on loop and you can choose the model and stem you want to "solo" out. You can click on the waveform of the Original mix to come back to parts of the audio of interest.
</p>

<p>
  We recommend using headphones for the best experience. If you encounter any issues, please let us know!
</p>

<p>
  The following controls are available:
</p>
<ul>
  <li><strong>Stop All</strong>: Stop all currently playing audio.</li>
  <li><strong>Sync Playback</strong>: When enabled, switching between models or stems will sync the playback position across all audio elements. When disabled, each audio element will play from the beginning.</li>
  <li><strong>Loop</strong>: When enabled, the audio will loop continuously.</li>
</ul>


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
      id: "43",
      title: "43_rock_120_beat_4-4.wav, drum kit: portland",
      baseFile: "43_rock_120_beat_4-4_portland"
    },
    {
      id: "93",
      title: "93_hiphop_75_beat_4-4.wav, drum kit: heavy",
      baseFile: "93_hiphop_75_beat_4-4_heavy"
    },
    {
      id: "18",
      title: "18_rock_118_fill_4-4.wav, drum kit: east bay",
      baseFile: "18_rock_118_fill_4-4_east_bay"
    }
    ,
    {
      id: "73",
      title: "73_neworleans-funk_93_fill_4-4.wav, drum kit: heavy",
      baseFile: "73_neworleans-funk_93_fill_4-4_heavy"
    }
    ,
    {
      id: "114",
      title: "114_jazz-fusion_96_beat_4-4.wav, drum kit: heavy",
      baseFile: "114_jazz-fusion_96_beat_4-4_heavy"
    }
  ];
  
  // Models configuration
  const models = [
    { id: "original", name: "Original Mix", instruments: ["full"] },
    { id: "GT", name: "Ground Truth" },
    { id: "Oracle", name: "Oracle" },
    { id: "IDM_masked", name: "IDM masked (Ours)" },
    { id: "IDM_synth", name: "IDM synth (Ours)" },
    { id: "LarsNet", name: "LarsNet" },
    { id: "NMFD", name: "NMFD" }
  ];
  
  // Instrument configuration
  const instruments = [
    { id: "full", name: "Full Mix" },
    { id: "KD", name: "Kick" },
    { id: "SD", name: "Snare" },
    { id: "HH", name: "Hi-Hats" },
    { id: "CY", name: "Cymbals" },
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
  
  // Get color for instrument visualization
  function getInstrumentColor(instrumentId) {
    const colors = {
      'KD': '#e53e3e', // Kick - Red
      'SD': '#dd6b20', // Snare - Orange
      'HH': '#38a169', // Hi-hat - Green
      'CY': '#3182ce', // Cymbal - Blue
      'TT': '#805ad5'  // Tom - Purple
    };
    
    return colors[instrumentId] || '#a0aec0'; // Default gray
  }
  
  // Get lighter version of color for progress
  function getLighterColor(hexColor) {
    // Simple function to lighten a hex color
    let r = parseInt(hexColor.substr(1, 2), 16);
    let g = parseInt(hexColor.substr(3, 2), 16);
    let b = parseInt(hexColor.substr(5, 2), 16);
    
    // Lighten
    r = Math.min(255, r + 40);
    g = Math.min(255, g + 40);
    b = Math.min(255, b + 40);
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }
  
  // Improved checkFileExists function
  function checkFileExists(url) {
    return new Promise((resolve) => {
      console.log(`Checking if file exists: ${url}`);
      const audio = new Audio();
      
      // Set timeout to avoid hanging too long on missing files
      const timeout = setTimeout(() => {
        console.warn(`Timeout checking file: ${url}`);
        resolve(false);
      }, 3000);
      
      audio.oncanplaythrough = () => {
        clearTimeout(timeout);
        console.log(`File exists: ${url}`);
        resolve(true);
      };
      
      audio.onerror = (e) => {
        clearTimeout(timeout);
        console.warn(`File doesn't exist or error loading: ${url}`, e);
        resolve(false);
      };
      
      // Load with cache buster to prevent caching issues
      audio.src = `${url}?t=${new Date().getTime()}`;
    });
  }
  

// Modified parts to fix the eternal loading issue

// 1. First, add a debug function to check file paths more explicitly
function debugFilePath(url) {
  console.log(`Attempting to load file: ${url}`);
  
  // Create an explicit debugging element to show on the page
  const debugElement = document.createElement('div');
  debugElement.style.position = 'fixed';
  debugElement.style.top = '10px';
  debugElement.style.right = '10px';
  debugElement.style.background = 'rgba(0,0,0,0.8)';
  debugElement.style.color = 'white';
  debugElement.style.padding = '10px';
  debugElement.style.zIndex = '9999';
  debugElement.style.maxWidth = '300px';
  debugElement.style.fontSize = '12px';
  debugElement.textContent = `Testing: ${url}`;
  document.body.appendChild(debugElement);
  
  // Create an image object to test if the server responds at all
  const ping = new XMLHttpRequest();
  ping.open('HEAD', url.substring(0, url.lastIndexOf('/')), true);
  ping.onreadystatechange = function() {
    if (ping.readyState === 4) {
      debugElement.textContent += `\nServer response: ${ping.status}`;
      
      // Clean up after 5 seconds
      setTimeout(() => {
        document.body.removeChild(debugElement);
      }, 5000);
    }
  };
  ping.send();
  
  return url;
}

async function initializeStemWaveform(track, model, instrument) {
  const stemWaveformId = `stem-waveform-${track.id}`;
  const stemWavesurferId = `wavesurfer-stem-${track.id}`;
  
  // Get the container
  const stemWaveformContainer = document.getElementById(stemWaveformId);
  if (!stemWaveformContainer) {
    console.error(`Stem waveform container not found: ${stemWaveformId}`);
    return null;
  }
  
  // Get instrument ID correctly - whether it's passed as object or string
  const instrumentId = instrument.id || instrument;
  
  // Get instrument name for the label
  const instrumentObj = instruments.find(i => i.id === instrumentId);
  const instrumentName = instrumentObj ? instrumentObj.name : instrumentId;
  
  // Update the label
  const stemLabel = document.getElementById(`stem-label-${track.id}`);
  if (stemLabel) {
    stemLabel.textContent = `${model.name} - ${instrumentName}`;
    stemLabel.style.color = getInstrumentColor(instrumentId);
  }
  
  // Show the container
  stemWaveformContainer.style.display = 'block';
  
  // Determine audio path
  const audioPath = `/assets/audio/inverse-drum-machine/${model.id}/${track.baseFile}_${instrumentId}.wav`;
  
  // Cleanup existing waveform
  if (waveSurfers[stemWavesurferId]) {
    waveSurfers[stemWavesurferId].destroy();
    delete waveSurfers[stemWavesurferId];
  }
  
  // Create new waveform with normalization for better visualization
  const stemWs = WaveSurfer.create({
    container: stemWaveformContainer,
    waveColor: getInstrumentColor(instrumentId),
    progressColor: getLighterColor(getInstrumentColor(instrumentId)),
    height: 60,
    responsive: true,
    barWidth: 2,
    cursorWidth: 1,
    interact: true,
    normalize: true,  // Normalize waveform for better visualization
    backend: 'MediaElement',  // Use MediaElement backend for better compatibility
    // Additional visualization enhancements
    barGap: 1,  // Add slight gap between bars
    barRadius: 1  // Round the bars slightly
  });
  
  // Apply extra amplitude boost for hi-hats and similar instruments
  if (instrumentId === 'HH' || instrumentId === 'CY') {
    // These are typically lower amplitude
    stemWs.params.amplitude = 2;  // Boost amplitude for visualization
  }
  
  // Configure events
  stemWs.on('ready', () => {
    stemWs.setMute(true);
  });
  
  // Load the audio
  stemWs.load(audioPath);
  
  // Store the WaveSurfer instance
  waveSurfers[stemWavesurferId] = stemWs;
  
  return stemWs;
}
  


  // Improved function to hide the stem waveform
  function hideStemWaveform(trackId) {
    console.log(`Hiding stem waveform for track ${trackId}`);
    const stemWaveformContainer = document.getElementById(`stem-waveform-${trackId}`);
    if (stemWaveformContainer) {
      stemWaveformContainer.style.display = 'none';
    }
    
    // Reset the label
    const stemLabel = document.getElementById(`stem-label-${trackId}`);
    if (stemLabel) {
      stemLabel.textContent = 'Selected Stem';
      stemLabel.style.color = '';
    }
    
    // Clean up the wavesurfer instance
    const stemWavesurferId = `wavesurfer-stem-${trackId}`;
    if (waveSurfers[stemWavesurferId]) {
      try {
        waveSurfers[stemWavesurferId].destroy();
        delete waveSurfers[stemWavesurferId];
      } catch (e) {
        console.warn(`Error destroying stem waveform:`, e);
      }
    }
  }
  
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
    
    // Create waveform container
    const waveformContainer = document.createElement('div');
    waveformContainer.className = 'waveform-container';
    
    // Add mixture waveform label
    const mixLabel = document.createElement('div');
    mixLabel.className = 'waveform-label';
    mixLabel.textContent = 'Original Mix';
    waveformContainer.appendChild(mixLabel);
    
    // Add main waveform container
    const wfDiv = document.createElement('div');
    wfDiv.className = 'waveform';
    wfDiv.id = `waveform-${track.id}`;
    waveformContainer.appendChild(wfDiv);
    
    // Add stem waveform label
    const stemLabel = document.createElement('div');
    stemLabel.className = 'waveform-label';
    stemLabel.id = `stem-label-${track.id}`;
    stemLabel.textContent = 'Selected Stem';
    waveformContainer.appendChild(stemLabel);
    
    // Add stem waveform container
    const stemWfDiv = document.createElement('div');
    stemWfDiv.className = 'stem-waveform';
    stemWfDiv.id = `stem-waveform-${track.id}`;
    waveformContainer.appendChild(stemWfDiv);
    
    trackSection.appendChild(waveformContainer);
    
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
        th.style.color = getInstrumentColor(instrument.id);
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
        
        const button = createPlayerButton(audioId, audioPath, track.id, model.id, "full");
        fullMixCell.appendChild(button);
        row.appendChild(fullMixCell);
      } else {
        displayInstruments.forEach(instrument => {
          if (instrument.id === "full") return;
          
          const cell = document.createElement('td');
          const audioId = `${track.id}_${model.id}_${instrument.id}`;
          const audioPath = `/assets/audio/inverse-drum-machine/${model.id}/${track.baseFile}_${instrument.id}.wav`;
          const button = createPlayerButton(audioId, audioPath, track.id, model.id, instrument.id);
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
      cursorWidth: 1,
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
      
      // Also sync stem waveform if visible
      const stemWavesurferId = `wavesurfer-stem-${track.id}`;
      if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
        try {
          isUpdatingWaveform = true;
          waveSurfers[stemWavesurferId].seekTo(position);
          setTimeout(() => { isUpdatingWaveform = false; }, 5);
        } catch (e) {
          isUpdatingWaveform = false;
          console.warn(`Error updating stem waveform position:`, e);
        }
      }
    });
    
    // Handle waveform errors
    ws.on('error', err => {
      console.warn('WaveSurfer error:', err);
    });
    
    // Store WaveSurfer instance
    waveSurfers[track.id] = ws;
  });
  
  // Create player button helper
  function createPlayerButton(audioId, audioPath, trackId, modelId, instrumentId) {
    const button = document.createElement('button');
    button.className = 'player-button';
    button.textContent = 'Play';
    button.dataset.id = audioId;
    button.dataset.track = trackId;
    button.dataset.model = modelId;
    button.dataset.instrument = instrumentId;
    
    const progress = document.createElement('div');
    progress.className = 'progress-indicator';
    button.appendChild(progress);
    
    button.addEventListener('click', () => handlePlayClick(audioId, audioPath, trackId, modelId, instrumentId));
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
  
  // Handle play/stop with waveform sync
  async function handlePlayClick(audioId, audioPath, trackId, modelId, instrumentId) {
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
    
    // Initialize stem waveform if not original mix
    if (modelId !== "original" && instrumentId !== "full") {
      console.log(`Preparing stem waveform for ${modelId}/${instrumentId}`);
      
      // Make sure stem container is visible for debugging
      const stemWaveformContainer = document.getElementById(`stem-waveform-${trackId}`);
      if (stemWaveformContainer) {
        stemWaveformContainer.style.display = 'block';
      }
      
      const stemLabel = document.getElementById(`stem-label-${trackId}`);
      if (stemLabel) {
        stemLabel.textContent = `Loading ${modelId} - ${instrumentId}...`;
        stemLabel.style.color = getInstrumentColor(instrumentId);
      }
      
      try {
        const track = tracks.find(t => t.id === trackId);
        const model = models.find(m => m.id === modelId);
        
        if (!track || !model) {
          console.error(`Could not find track or model: ${trackId}/${modelId}`);
          hideStemWaveform(trackId);
        } else {
          await initializeStemWaveform(track, model, instrumentId);
        }
      } catch (error) {
        console.error(`Error initializing stem waveform:`, error);
        hideStemWaveform(trackId);
      }
    } else {
      // Hide stem waveform for original mix
      hideStemWaveform(trackId);
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
        
        // Hide stem waveform if audio fails
        hideStemWaveform(trackId);
      });
      
      // Update progress on timeupdate
      audio.addEventListener('timeupdate', () => {
  if (currentlyPlaying !== audioId) return;
  
  // Update button progress
  updateProgress(audioId);
  
  // Get current position
  const currentPos = audio.currentTime / (audio.duration || 1);
  if (isNaN(currentPos)) return;
  
  // Always update main waveform position
  if (ws && ws.isReady && currentTrackId === trackId) {
    if (!isUpdatingWaveform) {
      isUpdatingWaveform = true;
      try {
        // Update main waveform
        ws.seekTo(currentPos);
        
        // Immediately update stem waveform with the EXACT same position
        const stemWavesurferId = `wavesurfer-stem-${trackId}`;
        if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
          // Force exact position match
          waveSurfers[stemWavesurferId].seekTo(currentPos);
        }
        
        setTimeout(() => { isUpdatingWaveform = false; }, 5);
      } catch (e) {
        isUpdatingWaveform = false;
        console.warn('Error updating waveform position:', e);
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
        
        // Also set stem waveform position
        const stemWavesurferId = `wavesurfer-stem-${trackId}`;
        if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
          waveSurfers[stemWavesurferId].seekTo(startPos / (waveSurfers[stemWavesurferId].getDuration() || 1));
        }
        
        setTimeout(() => { isUpdatingWaveform = false; }, 5);
      } catch (e) {
        isUpdatingWaveform = false;
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
          
          // Also play stem waveform if visible
          const stemWavesurferId = `wavesurfer-stem-${trackId}`;
          if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
            try {
              waveSurfers[stemWavesurferId].play();
              waveSurfers[stemWavesurferId].setMute(true);
            } catch (e) {
              console.warn(`Error playing stem waveform:`, e);
            }
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
    
    // Stop main waveform
    const ws = waveSurfers[currentTrackId];
    if (ws && ws.isReady) {
      try {
        ws.pause();
      } catch (e) {
        console.warn('Error pausing wavesurfer:', e);
      }
    }
    
    // Pause stem waveform
    const stemWavesurferId = `wavesurfer-stem-${currentTrackId}`;
    if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
      try {
        waveSurfers[stemWavesurferId].pause();
      } catch (e) {
        console.warn(`Error pausing stem waveform:`, e);
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

## TODO

- Add volume control for samples, too loud now
- Add synth model and baselines
- Add waveform control from stems not only mix


## Citation

If you use our work in your research, please cite our paper:

```
@inproceedings{torres2024inverse,
  title={The Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis},
  author={Torres, Bernardo and Peeters, Geoffroy and Richard, Gaël},
  year={2024},
}
```
