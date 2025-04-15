---
layout: single
permalink: /projects/inverse-drum-machine/
title: "Inverse Drum Machine"
author_profile: false
classes: wide
---

<script>
function toggleAudio(audioId) {
    var audio = document.getElementById(audioId);
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }
}
</script>

# Inverse Drum Machine

This page is the companion website for our paper "UThe Inverse Drum Machine: Source Separation Through Joint
Transcription and Analysis-by-Synthesis". If you are reading this please come back in a few days as I will push this webpage very soon. 

<!-- ## Abstract

In neural audio signal processing, pitch conditioning has been used to enhance the performance of synthesizers. However, jointly training pitch estimators and synthesizers is a challenge when using standard audio-to-audio reconstruction loss, leading to reliance on external pitch trackers. To address this issue, we propose using a spectral loss function inspired by optimal transportation theory that minimizes the displacement of spectral energy. We validate this approach through an unsupervised autoencoding task that fits a harmonic template to harmonic signals. We jointly estimate the fundamental frequency and amplitudes of harmonics using a lightweight encoder and reconstruct the signals using a differentiable harmonic synthesizer. The proposed approach offers a promising direction for improving unsupervised parameter estimation in neural audio applications.

## Paper

You can find our paper here:
- [PDF (arXiv)](https://arxiv.org/pdf/2312.14507.pdf)
- [GitHub Repository](https://github.com/bernardo-torres/1d-spectral-optimal-transport)
- [Poster](/documents/Torres_ICASSP_2024_poster.pdf)

## Audio Examples

Below are some examples demonstrating the capabilities of our Inverse Drum Machine approach.

### Example 1: Original vs Reconstructed Audio

<div class="audio-examples">
    <div class="audio-example">
        <h4>Original</h4>
        <audio id="original1" src="/assets/audio/inverse-drum-machine/original1.wav" preload="auto"></audio>
        <button onclick="toggleAudio('original1')" class="btn btn--primary">Play/Stop</button>
    </div>
    <div class="audio-example">
        <h4>Reconstruction</h4>
        <audio id="recon1" src="/assets/audio/inverse-drum-machine/recon1.wav" preload="auto"></audio>
        <button onclick="toggleAudio('recon1')" class="btn btn--primary">Play/Stop</button>
    </div>
</div>

### Example 2: Parameter Extraction and Manipulation -->

<!-- <div class="audio-examples">
    <div class="audio-example">
        <h4>Original</h4>
        <audio id="original2" src="/assets/audio/inverse-drum-machine/original2.wav" preload="auto"></audio>
        <button onclick="toggleAudio('original2')" class="btn btn--primary">Play/Stop</button>
    </div>
    <div class="audio-example">
        <h4>Pitch Shifted</h4>
        <audio id="shifted" src="/assets/audio/inverse-drum-machine/shifted.wav" preload="auto"></audio>
        <button onclick="toggleAudio('shifted')" class="btn btn--primary">Play/Stop</button>
    </div>
</div>

## Method

Our approach uses a novel spectral loss function based on optimal transport theory to train a lightweight encoder-decoder architecture. The encoder estimates fundamental frequency and harmonic amplitudes, while the decoder is a differentiable harmonic synthesizer.

### Architecture

<img src="/assets/images/inverse-drum-machine/architecture.png" alt="System architecture" class="full-width-image">

### Spectral Optimal Transport Loss

The key innovation in our work is the use of a spectral optimal transport loss that aligns the energy distribution in the frequency domain between the original and synthesized signals. -->

<!-- <img src="/assets/images/inverse-drum-machine/transport_visualization.png" alt="Spectral transport visualization" class="full-width-image">

## Results

Our experiments show that the proposed approach outperforms traditional methods in parameter estimation accuracy and audio quality.

| Method | F0 Error (cents) | Reconstruction Error |
|--------|------------------|----------------------|
| CREPE + Synth | 23.4 | 0.087 |
| PYIN + Synth | 19.7 | 0.079 |
| **Ours** | **11.2** | **0.042** |

## Citation

If you use our work in your research, please cite our paper:

```
@inproceedings{torres2024unsupervised,
  title={Unsupervised Harmonic Parameter Estimation Using Differentiable DSP and Spectral Optimal Transport},
  author={Torres, Bernardo and Peeters, Geoffroy and Richard, Gaël},
  booktitle={ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
  year={2024},
  organization={IEEE}
}
```

## Contact

For questions about this project, please contact Bernardo Torres at [bernardo.torres@telecom-paris.fr](mailto:bernardo.torres@telecom-paris.fr).

<style>
.audio-examples {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 30px;
}

.audio-example {
    flex: 1;
    min-width: 250px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.full-width-image {
    width: 100%;
    max-width: 800px;
    margin: 20px 0;
    display: block;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
</style> -->