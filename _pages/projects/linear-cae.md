---
layout: single
permalink: /projects/linear-cae/
author_profile: false
show_author: false
---

<style>
  .masthead {
    display: none !important;
  }
</style>




<script>
MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
  },
  loader: {
    load: ['[tex]/color']  // Add this
  }
};
</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>


<style>
  .masthead {
    display: none !important;
  }
</style>

<link rel="stylesheet" href="{{ '/assets/css/demo_page.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/audioplayerstyle.css' | relative_url }}">
<script src="https://unpkg.com/wavesurfer.js@6.6.3/dist/wavesurfer.min.js"></script>


<div class="page__hero">
<h1>Learning Linearity in Audio Autoencoders</h1>
<p align="center" style="margin-top: 1rem; font-size: 1.1rem;">
<a href="https://arxiv.org/abs/2405.10091" style="margin-right: 20px;">
📄 <strong>Paper (arXiv)</strong>
</a>
<!-- | -->
<a href="https://github.com/bernardo-torres/linear-consistency-autoencoders" style="margin-left: 20px;">
<i class="fab fa-fw fa-github"></i> <strong>GitHub</strong>
</a>
</p>
</div>

<!-- Introduction -->

<p>
Autoencoders are powerful tools for learning compressed representations of sound, but their internal "latent" spaces are typically complex and non-linear. While in some applications this might be by design to capture high-level representations, it is often desirable to have low-level control over audio manipulations directly in the latent space. For example, adding the representations of two sounds doesn't create the representation of their mixture.
</p>

<p>
We introduce <strong>Linear Consistency Autoencoders (Lin-CAE)</strong>, a simple training method that induces <strong>linearity</strong> in the latent space of a high-compression consistency autoencoder. This is done through data augmentation, without changing the model's architecture or loss function. While we apply this method to consistency models, a type of autoencoder where the decoder is a generative diffusion model, the approach is general and can be applied to <strong>any</strong> autoencoder architecture. 
</p>

<!-- Central Image -->

<p align="center">
<img src="/documents/images/linear-cae/overview.png" alt="A linear decoder respects latent space scaling (homogeneity) and addition (additivity)." style="max-width: 40%; height: auto; border-radius: 0.5rem; margin: 1rem 0;">
</p>


<h2>Properties of a linear autoencoder</h2>
<p>
A linear latent space allows for intuitive and efficient audio manipulation directly in the compressed representation. Let's denote the encoder as \(\operatorname{Enc}(\cdot)\) and the decoder as \(\operatorname{Dec}(\cdot)\), and a latent tensor as \(\mathbf{z}_x = \operatorname{Enc}(x)\) for an audio signal \(x\).
</p>
<ul>
<li>
<strong>Homogeneity (Scaling):</strong> You can control the volume of a sound by simply multiplying its latent tensor by a scalar.
<div style="text-align: center; margin: 1rem 0;">
\(\operatorname{Dec}(\textcolor{magenta}{a} \cdot \mathbf{z}_x) \approx \textcolor{magenta}{a} \cdot \operatorname{Dec}(\mathbf{z}_x)\)
</div>
</li>
<li>
<strong>Additivity (Mixing):</strong> You can mix multiple sounds by adding their latents together.
<div style="text-align: center; margin: 1rem 0;">
\(\operatorname{Dec}(\mathbf{z}_u + \mathbf{z}_v) \approx \operatorname{Dec}(\mathbf{z}_u) + \operatorname{Dec}(\mathbf{z}_v)\)
</div>
</li>
</ul>

<p>
Combining these properties unlocks some applications such as <strong>source separation via subtraction</strong>. By subtracting the latent of an accompaniment from the latent of a full mix, we can isolate any stem. For vocals, this can be expressed as:

\(\operatorname{Dec}(\mathbf{z}_{\text{mix}} - \mathbf{z}_{\text{accomp}}) \approx \operatorname{Dec}(\mathbf{z}_{\text{vocals}})\)
</p>

<!-- Audio Demos Section -->

<div class="audio-demos-section">
<h2>Audio Demos</h2>

<!-- Model Comparison Table -->

<p>
The interactive players below compare our model (Lin-CAE) against a few baseline autoencoders on test samples from the MUSDB18-HQ dataset.


<!-- Explanation of Operations -->

<p>
We recommend using headphones. Each row in the player performs a different operation in the latent space.
<ul>
<li>
<strong>Autoencoded Mix:</strong> The baseline reconstruction of the full mix. 
</li>
<li>
<strong>Latent Addition:</strong> We add the latent vectors of four stems (vocals, drums, bass, other) and decode the result.
</li>
<li>
<strong>Original Vocals:</strong> The ground truth vocal stem, for reference.
</li>
<li>
<strong>Separated Vocals:</strong> We subtract the latent vector of the accompaniment (drums, bass, other) from the latent vector of the full mix and decode the result.
</li>
<li>
<strong>Latent Scaling:</strong> We multiply the vocal latent vector by a scalar and decode the result.
</li>
</ul>




<p>
  The following controls are available:
</p>
<ul>
  <li><strong>Stop All</strong>: Stop all currently playing audio.</li>
  <li><strong>Sync Playback</strong>: When enabled, switching between models or stems will sync the playback position across all audio elements. When disabled, each audio element will play from the beginning.</li>
  <li><strong>Loop</strong>: When enabled, the audio will loop continuously.</li>
</ul>



<p style="color: #e53e3e; font-weight: bold; border: 1px solid #e53e3e; background-color: #fff5f5; padding: 1rem; border-radius: 0.5rem;">
<strong>Warning:</strong> Please turn your volume down before playing. The baseline models (M2L, Stable Audio VAE) can produce loud, unpleasant, and intense sounds when attempting linear operations they were not trained for.
</p>

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


  <div id="players-wrapper"></div>
</div>


<script src="{{ '/assets/js/linear-cae_main.js' | relative_url }}" type="module"></script>

## Citation

If you use our work in your research, please cite our paper:


<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof MathJax !== "undefined") {
      // This tells MathJax to find and render all
      // static LaTeX content on the entire page.
      MathJax.typeset();
    }
  });
</script>