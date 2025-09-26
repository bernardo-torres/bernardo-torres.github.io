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
  .comparison-table td {
  background-color: white;
}

.comparison-table td:last-child {
  font-size: 1.15rem;
}

.comparison-table tr:hover td {
  background-color: var(--gray-50);
}

.baseline-model {
  background-color: var(--gray-50) !important;
}

.our-model {
  background-color: var(--primary-light) !important;
  border-left: 3px solid var(--primary);
}

.model-name {
  font-weight: 600;
  min-width: 100px;
}

/* These controls are for the  */

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


<!--  This script controls the display of the samples -->
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



<link rel="stylesheet" href="{{ '/assets/css/demo_page.css' | relative_url }}">
<!-- Link to your CSS file in the /assets/css folder -->
<link rel="stylesheet" href="{{ '/assets/css/audioplayerstyle.css' | relative_url }}">

<script src="https://unpkg.com/wavesurfer.js@6.6.3/dist/wavesurfer.min.js"></script>


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
  We recommend using headphones for the best experience. If you encounter any issues, try refreshing the page and please let us know!
</p>

<p>
  The following controls are available:
</p>
<ul>
  <li><strong>Stop All</strong>: Stop all currently playing audio.</li>
  <li><strong>Sync Playback</strong>: When enabled, switching between models or stems will sync the playback position across all audio elements. When disabled, each audio element will play from the beginning.</li>
  <li><strong>Loop</strong>: When enabled, the audio will loop continuously.</li>
</ul>



<!-- Global Controls HTML structure -->

<div class="global-controls">
<div class="control-group">
<button id="stopAllButton" class="stop-all-button">Stop All</button>
</div>
<div class="control-group">
<input type="checkbox" id="syncCheckbox" checked>
<label for="syncCheckbox">Sync Playback</label>
</div>
<div class="control-group">
<input type="checkbox" id="loopCheckbox" checked>
<label for="loopCheckbox">Loop</label>
</div>
<div class="control-group">
<label for="volumeSlider">Volume:</label>
<input type="range" id="volumeSlider" class="volume-slider" min="0" max="1" step="0.01" value="0.8">
</div>
</div>

<!-- This is the container where the JavaScript will build the players. -->

<div id="players-wrapper"></div>
</div>

<!--
SCRIPT INCLUDES:

CORRECTED: Direct CDN link for WaveSurfer.js

CORRECTED: Path now points to the correct JS file in your root js/ folder
-->


<script src="{{ '/assets/js/inverse-drum-machine_main.js' | relative_url }}" type="module"></script>


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