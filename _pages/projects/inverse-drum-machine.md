---
layout: single
permalink: /projects/inverse-drum-machine/
# title: "Inverse Drum Machine"
author_profile: false
# classes: wide
# title: "Inverse Drum Machine"
# masthead_title: " "
# header:
#   overlay: false
#   show_overlay_excerpt: false
---

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600&display=swap');
  
  /* Color scheme variables */
  :root {
    --primary: #2563eb;      /* Deeper blue */
    --primary-dark: #1d4ed8; /* Darker blue for hover states */
    --primary-light: #dbeafe; /* Light blue for backgrounds */
    --accent: #8b5cf6;       /* Purple accent */
    --success: #10b981;      /* Green for success states */
    --danger: #ef4444;       /* Red for danger/stop */
    --danger-dark: #dc2626;  /* Darker red for hover */
    --gray-50: #f9fafb;      /* Lightest gray with warm tone */
    --gray-100: #f3f4f6;     /* Very light gray */
    --gray-200: #e5e7eb;     /* Light gray for borders */
    --gray-700: #374151;     /* Dark gray for text */
    --gray-900: #1f2937;     /* Very dark gray for headings */
  }
  
  /* Typography */
  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: var(--gray-700);
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6,
  .track-title {
    font-family: 'Montserrat', sans-serif;
    color: var(--gray-900);
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.75em;
    line-height: 1.3;
  }
  
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-top: 0.5em;
    position: relative;
    padding-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }
  
  h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--primary);
    border-radius: 2px;
  }
  
  h2 {
    font-size: 1.75rem;
    color: var(--gray-900);
    margin-top: 2rem;
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 0.5rem;
  }
  
  h3 {
    font-size: 1.35rem;
    color: var(--gray-900);
  }
  
  /* Improved UI elements */
  .player-button {
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
    cursor: pointer;
    width: 100%;
    position: relative;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.02em;
  }
  
  .player-button:hover {
    background-color: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .player-button.playing {
    background-color: var(--danger);
  }
  
  .player-button.playing:hover {
    background-color: var(--danger-dark);
  }
  
  .stop-all-button {
    background-color: var(--danger);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  
  .stop-all-button:hover {
    background-color: var(--danger-dark);
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* Toggle button styling */
  .toggle-button {
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .toggle-button:hover {
    background-color: var(--primary-dark);
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  
  /* Improved table styling */
  .comparison-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-bottom: 1.5rem;
    overflow-x: auto;
    display: block;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);
  }
  .comparison-table td:last-child {
    font-size: 1.15rem;
    /* font-weight: 500; */
  }

  .comparison-table th {
  background-color: var(--gray-50);
  text-align: center !important;
  vertical-align: middle !important;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
}
  
  .comparison-table th, .comparison-table td {
    padding: 0.75rem;
    border: 1px solid var(--gray-200);
  }
  
  
  .comparison-table td {
    background-color: white;
  }
  
  .comparison-table tr:hover td {
    background-color: var(--gray-50);
  }
  
  /* Track section refinements */
  .track-section {
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 2rem;
  }
  
  .track-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary);
    padding-left: 0.5rem;
    border-left: 4px solid var(--primary);
  }
  
  /* Improved waveform containers */
  .waveform-container {
    margin-bottom: 1.5rem;
    padding: 1.25rem;
    background-color: var(--gray-50);
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  
  .waveform {
    height: 80px;
    margin-bottom: 0.5rem;
    background-color: white;
    border: 1px solid var(--gray-200);
    border-radius: 4px;
  }
  
  .stem-waveform {
    height: 60px;
    margin-bottom: 0.75rem;
    background-color: white;
    border: 1px solid var(--gray-200);
    border-radius: 4px;
    display: none; /* Hidden by default */
  }
  
  .waveform-label {
    font-size: 0.85rem;
    color: var(--gray-700);
    margin-bottom: 0.25rem;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
  }
  
  /* Global controls styling */
  .global-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1.25rem;
    background-color: var(--primary-light);
    border-radius: 0.5rem;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  
  /* Better checkbox styling */
  .control-group input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.2rem;
    height: 1.2rem;
    border: 2px solid var(--primary);
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
  }
  
  .control-group input[type="checkbox"]:checked {
    background-color: var(--primary);
  }
  
  .control-group input[type="checkbox"]:checked::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 0.8rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  /* Improve range slider */
  .volume-slider {
    width: 120px;
    appearance: none;
    height: 6px;
    background: var(--gray-200);
    border-radius: 3px;
    outline: none;
  }
  
  .volume-slider::-webkit-slider-thumb {
    appearance: none;
    width: 16px;
    height: 16px;
    background: var(--primary);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .volume-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: var(--primary);
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition: all 0.2s;
  }
  
  .volume-slider::-webkit-slider-thumb:hover,
  .volume-slider::-moz-range-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
  
  /* Improved iframe placeholder */
  .iframe-placeholder {
    border: 1px dashed var(--gray-200);
    border-radius: 0.5rem;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: white;
    transition: all 0.2s;
  }
  
  .iframe-placeholder:hover {
    background-color: var(--primary-light);
    border-color: var(--primary);
  }
  
  .placeholder-content {
    color: var(--gray-700);
    font-size: 0.95rem;
    padding: 1rem;
    text-align: center;
  }
  
  /* Better baseline model highlighting */
  .baseline-model {
    background-color: var(--gray-50) !important;
  }
  
  .our-model {
    background-color: var(--primary-light) !important;
    border-left: 3px solid var(--primary);
  }
  
  .our-model td {
    background-color: var(--primary-light) !important;
  }
  
  /* Code block styling */
  pre {
    background-color: var(--gray-900);
    color: #f8f8f2;
    border-radius: 0.5rem;
    padding: 1.5rem;
    overflow-x: auto;
    font-family: 'Courier New', monospace;
    margin: 1.5rem 0;
  }
  
  code {
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }
  
  /* Additional content controls */
  .additional-content-controls {
    background-color: var(--primary-light);
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(37, 99, 235, 0.2);
  }
  
  .content-notice {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
    color: var(--gray-700);
    line-height: 1.5;
  }
  
  /* Add some responsive refinements */
  @media (max-width: 768px) {
    h1 {
      font-size: 1.75rem;
    }
    
    h2 {
      font-size: 1.5rem;
    }
    
    .comparison-table td, .comparison-table th {
      padding: 0.5rem;
    }
    
    .player-button {
      padding: 0.4rem;
      font-size: 0.8rem;
    }
  }
# --------------------------
 .page {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    float: none !important;
    position: static !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    display: block !important;
    width: 100% !important;
  }
  
  /* Kill sidebar completely */
  .sidebar {
    display: none !important;
    width: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  /* Force grid layout to single column */
  .grid__item {
    position: static !important;
    width: 100% !important;
    float: none !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  /* Center main container */
  #main {
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
    max-width: 100% !important;
    float: none !important;
    padding: 0 !important;
  }
  
  /* Center content container with explicit margin auto */
  .page__inner-wrap {
    float: none !important;
    width: 94% !important;
    max-width: 1400px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    display: block !important;
    position: relative !important;
    left: 0 !important;
  }

  /* Make sure the masthead (if it exists) is also centered */
  .masthead__inner-wrap {
    margin: 0 auto !important;
  }
  /* Hide masthead for this page only */
  .masthead {
    display: none !important;
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
  max-width: 600px; /* or whatever looks good */
  margin: 0 auto 1.5rem auto;
  border-collapse: separate;
  border-spacing: 0;
  overflow-x: auto;
  display: table;
  width: 100%;
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

<p align="center">
  <a href="https://arxiv.org/pdf/2505.03337" style="margin-right: 20px;">
    📄 <strong>Paper (arXiv)</strong>
  </a>
  |
  <a href="https://github.com/bernardo-torres/inverse-drum-machine" style="margin-left: 20px;">
    <i class="fab fa-fw fa-github"></i> <strong>GitHub</strong>
  </a>
</p>

This is the accompanying page for the paper "The Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis", currently under review. The Inverse Drum Machine (IDM) uses joint transcription and analysis-by-synthesis to separate drum components from mixed audio without needing isolated sources for training.



<p align="center">
  <img src="/assets/images/inverse-drum-machine/overview.png" alt="Inverse Drum Machine Overview" style="max-width: 35%; height: auto; border-radius: 0.5rem;">
</p>

<h2>Drum Samples and Envelopes</h2>

One of the components of our model is a One-Shot Drum Synthesizer which is trained without ever being exposed to isolated drum samples. The One-Shot synth is conditioned on drum class and timbre (we use a one-hot vector of the drum kit to represent timbre).
Here we provide the drum samples and envelopes of the model reported in the paper. 

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
      <p style="color: #e53e3e; font-weight: bold; margin-bottom: 0.5rem;">
        <strong>Warning:</strong> Some drum samples can be loud! Please lower your volume before clicking.
      </p>
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


<div class="audio-demos-section">
  <h2>Audio Demos</h2>
<p>
  We present some uncurated audio demos from the StemGMD test set showcasing the performance of our model and our baselines. As the individual stems for drums are often very sparse, listening can be tricky (and very boring). We therefore present an interactive demo where the tracks are played on loop and you can choose the model and stem you want to "solo" out. You can click on the waveform to come back to parts of the audio of interest.
</p>


<div style="text-align: center; margin: 1.5rem 0;">
  <table class="comparison-table" style="margin: 0 auto; max-width: 650px;">
    <caption style="caption-side: top; margin-bottom: 0.5rem; font-weight: 600; color: #2d3748;">
      Method Comparison for the Audio Demos
    </caption>
    <thead>
      <tr>
        <th>Method</th>
        <th>Training</th>
        <th>Inference</th>
        <th>STFT masking</th>
      </tr>
    </thead>
    <tbody>
      <tr class="baseline-model">
        <td class="model-name">Oracle <sup>†</sup></td>
        <td>--</td>
        <td>Isolated stems</td>
        <td>✓</td>
      </tr>
      <tr class="baseline-model">
        <td class="model-name">NMFD <sup>†</sup></td>
        <td>--</td>
        <td>Transcription + one-shots</td>
        <td>✓</td>
      </tr>
      <tr class="baseline-model">
        <td class="model-name">LarsNet <sup>†</sup></td>
        <td>Isolated stems</td>
        <td>--</td>
        <td>✓</td>
      </tr>
      <tr class="our-model">
        <td class="model-name"><strong>IDM masked (ours)</strong></td>
        <td>Transcription</td>
        <td>--</td>
        <td>✓</td>
      </tr>
      <tr class="our-model">
        <td class="model-name"><strong>IDM synth (ours)</strong></td>
        <td>Transcription</td>
        <td>--</td>
        <td>-</td>
      </tr>
    </tbody>
  </table>
  <div style="font-size: 0.85rem; color: #4a5568; margin-top: 0.5rem; font-style: italic;">
    <sup>†</sup> Baseline methods. Please refer to the paper for the complete details of the methods.
  </div>
</div>

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


<style>
  .baseline-model {
    background-color: #f8fafc !important;
  }
  
  .our-model {
    background-color: #ebf8ff !important;
    border-left: 3px solid #3182ce;
  }
  
  .our-model td {
    background-color: #ebf8ff !important;
  }
</style>



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
        iframe.style.borderRadius = '0.25frem';
        
        // Replace placeholder with iframe
        placeholder.parentNode.replaceChild(iframe, placeholder);
      });
    });


  const tracks = [
  
  {
    id: "93",
    title: "93_hiphop_75_beat_4-4.wav, drum kit: heavy",
    baseFile: "93_hiphop_75_beat_4-4_heavy",
  },
  {
    id: "43",
    title: "43_rock_120_beat_4-4.wav, drum kit: portland",
    baseFile: "43_rock_120_beat_4-4_portland",
    crop: 5 // 5 seconds playback (remove this line to play the full track)
  },
  {
    id: "18",
    title: "18_rock_118_fill_4-4.wav, drum kit: east bay",
    baseFile: "18_rock_118_fill_4-4_east_bay",
    // No crop specified, will play the full track
  },
  {
    id: "73",
    title: "73_neworleans-funk_93_fill_4-4.wav, drum kit: heavy",
    baseFile: "73_neworleans-funk_93_fill_4-4_heavy",
  },
  {
    id: "114",
    title: "114_jazz-fusion_96_beat_4-4.wav, drum kit: heavy",
    baseFile: "114_jazz-fusion_96_beat_4-4_heavy"
    // No crop specified, will play the full track
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
    interact: true, // Make sure interaction is enabled
    normalize: true,
    backend: 'MediaElement',
    barGap: 1,
    barRadius: 1
  });
  
  // Apply extra amplitude boost for hi-hats and similar instruments
  if (instrumentId === 'HH' || instrumentId === 'CY') {
    stemWs.params.amplitude = 2;
  }
  
  // Configure events
  stemWs.on('ready', () => {
    stemWs.setMute(true);
  });

  // Add seek event handling to make stem waveform interactive
 // Improved seek handler in initializeStemWaveform
stemWs.on('seek', position => {
  if (isUpdatingWaveform) return;
  if (currentTrackId !== track.id) return;
  
  // Prevent multiple rapid updates
  isUpdatingWaveform = true;
  
  try {
    // Get the exact time position
    const t = stemWs.getDuration() * position;
    
    // Update all related audio elements to this precise position
    Object.keys(audioObjects)
      .filter(id => id.startsWith(track.id))
      .forEach(id => {
        const audio = audioObjects[id];
        if (audio) {
          audio.currentTime = t;
        }
      });
    
    // Update main waveform position using requestAnimationFrame for smoother visual update
    const mainWs = waveSurfers[track.id];
    if (mainWs && mainWs.isReady) {
      requestAnimationFrame(() => {
        mainWs.seekTo(position);
      });
    }
  } catch (e) {
    console.warn('Error during stem seek synchronization:', e);
  } finally {
    // Release the lock after a small delay
    setTimeout(() => { isUpdatingWaveform = false; }, 20);
  }
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
  
  // No visual indicator, just implement the cropping functionality
  if (track.crop) {
    const fullDuration = ws.getDuration();
    console.log(`Crop set for track ${track.id}: ${track.crop}s out of ${fullDuration}s`);
  }
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

  // Improved audio sync system - replace the existing timeupdate event handler code
audio.addEventListener('timeupdate', () => {
  if (currentlyPlaying !== audioId) return;
  
  // Update button progress
  updateProgress(audioId);
  
  // Get current position
  const currentPos = audio.currentTime / (audio.duration || 1);
  if (isNaN(currentPos)) return;
  
  // Only update waveforms every 100ms to prevent excessive rendering
  if (!audio._lastUpdate || Date.now() - audio._lastUpdate >= 100) {
    audio._lastUpdate = Date.now();
    
    // Use a stricter synchronization approach
    if (!isUpdatingWaveform) {
      isUpdatingWaveform = true;
      
      try {
        // Update main waveform with precise position
        if (ws && ws.isReady && currentTrackId === trackId) {
          // Use requestAnimationFrame for smoother visual updates
          requestAnimationFrame(() => {
            ws.seekTo(currentPos);
          });
        }
        
        // Update stem waveform with the same precise position
        const stemWavesurferId = `wavesurfer-stem-${trackId}`;
        if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
          requestAnimationFrame(() => {
            waveSurfers[stemWavesurferId].seekTo(currentPos);
          });
        }
      } catch (e) {
        console.warn('Error updating waveform positions:', e);
      }
      
      // Release the synchronization lock after a minimal delay
      setTimeout(() => { isUpdatingWaveform = false; }, 5);
    }
  }
});
  
  // Handle play/stop with waveform sync
  // Improved handlePlayClick function to ensure better synchronization
// Update the handlePlayClick function to properly maintain position when changing stems
// Modify the handlePlayClick function to handle cropping
async function handlePlayClick(audioId, audioPath, trackId, modelId, instrumentId) {
  // If same clip, just toggle stop
  if (currentlyPlaying === audioId) {
    stopAudio();
    return;
  }
  
  const ws = waveSurfers[trackId];
  const isSameTrack = trackId === currentTrackId;
  let startPos = 0;
  
  // Get the playback position from the current audio if we're on the same track
  if (isSameTrack && syncCheckbox.checked && currentlyPlaying) {
    const currentAudio = audioObjects[currentlyPlaying];
    if (currentAudio) {
      startPos = currentAudio.currentTime || 0;
      console.log(`Continuing from position: ${startPos}`);
    }
  }
  
  // Stop current playback but keep track context if we're on the same track
  if (currentlyPlaying) {
    stopAudio(false); // The false prevents resetting currentTrackId
  }
  
  // Initialize stem waveform if needed
  if (modelId !== "original" && instrumentId !== "full") {
    console.log(`Preparing stem waveform for ${modelId}/${instrumentId}`);
    
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
    hideStemWaveform(trackId);
  }
  
  // Create or get audio element
  if (!audioObjects[audioId]) {
    const audio = new Audio();
    audio.src = audioPath;
    audio.preload = 'auto';
    audio.dataset.track = trackId;
    
    // Add precise timing tracking
    audio._lastUpdate = 0;
    
    // Handle audio errors
    audio.onerror = (e) => {
      console.error(`Error with audio ${audioId}:`, e);
      resetPlayButton(audioId);
      
      const btn = document.querySelector(`button[data-id="${audioId}"]`);
      if (btn) {
        btn.classList.add('unavailable');
        btn.textContent = 'Unavailable';
        btn.disabled = true;
      }
    };
    
    // Add timeupdate handler to keep waveforms in sync
    audio.addEventListener('timeupdate', function() {
      if (currentlyPlaying !== audioId) return;
      
      // Update button progress
      updateProgress(audioId);
      
      // Check if we need to loop due to crop value
      const track = tracks.find(t => t.id === trackId);
      if (track && track.crop && this.currentTime >= track.crop) {
        // If loop is enabled, jump back to start, otherwise stop
        if (loopCheckbox.checked) {
          this.currentTime = 0;
          
          // Update both waveforms to beginning
          requestAnimationFrame(() => {
            const mainWs = waveSurfers[trackId];
            const stemWs = waveSurfers[`wavesurfer-stem-${trackId}`];
            
            if (mainWs && mainWs.isReady) {
              mainWs.seekTo(0);
            }
            
            if (stemWs && stemWs.isReady) {
              stemWs.seekTo(0);
            }
          });
        } else {
          stopAudio();
          return;
        }
      }
      
      // Get current position ratio
      const currentPos = this.currentTime / (this.duration || 1);
      if (isNaN(currentPos)) return;
      
      // Throttle updates to prevent excessive rendering
      if (!this._lastUpdate || Date.now() - this._lastUpdate >= 50) {
        this._lastUpdate = Date.now();
        
        if (!isUpdatingWaveform) {
          isUpdatingWaveform = true;
          
          try {
            // Update both waveforms simultaneously
            const mainWs = waveSurfers[trackId];
            const stemWs = waveSurfers[`wavesurfer-stem-${trackId}`];
            
            requestAnimationFrame(() => {
              if (mainWs && mainWs.isReady) {
                mainWs.seekTo(currentPos);
              }
              
              if (stemWs && stemWs.isReady) {
                stemWs.seekTo(currentPos);
              }
            });
          } catch (e) {
            console.warn('Error updating waveforms:', e);
          }
          
          // Clear the lock after a short delay
          setTimeout(() => { isUpdatingWaveform = false; }, 10);
        }
      }
    });
    
    audioObjects[audioId] = audio;
  }
  
  const audio = audioObjects[audioId];
  audio.volume = parseFloat(volumeSlider.value);
  audio.loop = loopCheckbox.checked;
  
  // Set the exact starting position
  if (isSameTrack && syncCheckbox.checked && startPos > 0) {
    try {
      // Set audio position before playing
      audio.currentTime = startPos;
    } catch (e) {
      console.warn('Error setting starting position:', e);
    }
  } else {
    // For different tracks or sync disabled, start from beginning
    audio.currentTime = 0;
  }
  
  // Play audio and update UI
  try {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Update UI state
        const btn = document.querySelector(`button[data-id="${audioId}"]`);
        if (btn) {
          btn.textContent = 'Stop';
          btn.classList.add('playing');
        }
        
        // Set current state
        currentlyPlaying = audioId;
        currentTrackId = trackId;
        
        // After audio starts playing, sync both waveforms exactly
        const exactPos = audio.currentTime / (audio.duration || 1);
        
        requestAnimationFrame(() => {
          // Sync main waveform
          if (ws && ws.isReady) {
            ws.play();
            ws.setMute(true);
            ws.seekTo(exactPos);
          }
          
          // Sync stem waveform
          const stemWavesurferId = `wavesurfer-stem-${trackId}`;
          const stemWs = waveSurfers[stemWavesurferId];
          if (stemWs && stemWs.isReady) {
            stemWs.play();
            stemWs.setMute(true);
            stemWs.seekTo(exactPos);
          }
        });
      }).catch(err => {
        console.error('Error playing audio:', err);
        resetPlayButton(audioId);
        markButtonUnavailable(audioId);
      });
    } else {
      // Fallback for older browsers
      const btn = document.querySelector(`button[data-id="${audioId}"]`);
      if (btn) {
        btn.textContent = 'Stop';
        btn.classList.add('playing');
      }
      
      currentlyPlaying = audioId;
      currentTrackId = trackId;
      
      // Sync waveforms
      if (ws && ws.isReady) {
        ws.play();
        ws.setMute(true);
      }
    }
  } catch (err) {
    console.error('Error playing audio:', err);
    resetPlayButton(audioId);
    markButtonUnavailable(audioId);
  }
}

// Improved function to mark buttons as unavailable
function markButtonUnavailable(audioId) {
  const btn = document.querySelector(`button[data-id="${audioId}"]`);
  if (btn) {
    console.log(`Marking button as unavailable: ${audioId}`);
    btn.classList.add('unavailable');
    btn.textContent = 'N/A';
    btn.disabled = true;
    btn.title = 'This stem is not available';
  }
}

// Add a function to proactively check stem availability
// Modified stem availability checker - more reliable
// More reliable stem availability checker
// A more reliable stem availability checker using Audio elements instead of fetch
// Replace your current checkStemAvailability function with this simpler one
async function checkStemAvailability() {
  console.log("Starting stem availability check...");
  
  // Make sure to run this after all buttons are definitely created
  setTimeout(() => {
    // For each track
    tracks.forEach(track => {
      // For each model (except original which always has full mix)
      models.forEach(model => {
        if (model.id === "original") return;
        
        // For each instrument
        instruments.forEach(instrument => {
          // Skip full mix for non-GT models
          if (instrument.id === "full" && model.id !== "GT") return;
          
          const audioId = `${track.id}_${model.id}_${instrument.id}`;
          const audioPath = `/assets/audio/inverse-drum-machine/${model.id}/${track.baseFile}_${instrument.id}.wav`;
          
          // Find the button
          const btn = document.querySelector(`button[data-id="${audioId}"]`);
          if (!btn) return;
          
          console.log(`Testing: ${audioId}`);
          
          // Set button to "checking" state
          btn.textContent = "Checking...";
          
          // Simple fetch test with error handling
          fetch(audioPath, { method: 'HEAD' })
            .then(response => {
              if (!response.ok) {
                console.log(`Marking unavailable: ${audioPath}`);
                markButtonUnavailable(audioId);
              } else {
                console.log(`Available: ${audioPath}`);
                btn.textContent = "Play";
              }
            })
            .catch(() => {
              console.log(`Error fetching ${audioPath}, marking unavailable`);
              markButtonUnavailable(audioId);
            });
        });
      });
    });
  }, 1000); // 1 second should be enough if this runs at end of document load
}
  // Improved stop audio function
function stopAudio(resetTrackInfo = true) {
  if (!currentlyPlaying) return;
  
  // Get references before clearing state
  const audioId = currentlyPlaying;
  const trackId = currentTrackId;
  
  // Reset state first
  const btn = document.querySelector(`button[data-id="${audioId}"]`);
  if (btn) { 
    btn.textContent = 'Play'; 
    btn.classList.remove('playing'); 
  }
  
  currentlyPlaying = null;
  if (resetTrackInfo) currentTrackId = null;
  
  // Then stop everything with clean state
  requestAnimationFrame(() => {
    // Stop audio
    const audio = audioObjects[audioId];
    if (audio) {
      try {
        audio.pause();
      } catch (e) {}
    }
    
    // Stop main waveform
    const ws = waveSurfers[trackId];
    if (ws && ws.isReady) {
      try {
        ws.pause();
      } catch (e) {}
    }
    
    // Pause stem waveform
    const stemWavesurferId = `wavesurfer-stem-${trackId}`;
    if (waveSurfers[stemWavesurferId] && waveSurfers[stemWavesurferId].isReady) {
      try {
        waveSurfers[stemWavesurferId].pause();
      } catch (e) {}
    }
  });
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
    console.log("DOM loaded, checking stem availability soon...");
  checkStemAvailability();
});
</script>


## Citation

If you use our work in your research, please cite our paper:

```
@article{torres2025InverseDrumMachine,
  title={The Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis},
  author={Torres, Bernardo and Peeters, Geoffroy and Richard, Gaël},
  year={2025},
  journal={arXiv preprint arXiv:2505.03337}
}
```