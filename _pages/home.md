---
layout: splash
permalink: /
author_profile: false
classes: wide
---
<style>
body {
    font-family: 'Source Sans Pro', sans-serif;
    color: var(--gray-700);
    line-height: 1.6;
  }

</style>


<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-latest.min.js"></script>
<script>
$(document).ready(function(){
    $(".abuttons").click(function () {
        var idname= $(this).data('divid');
        $("#"+idname).show("slow");
    });
    $("#div1").hide();
    $("#div2").hide();
    $("#div3").hide();
});
</script>

<div markdown = "1">

<div markdown = "1">

<div class="intro-wrapper">
 <div class="intro-content" style="text-align: justify;">
   <p>
    Hello! I am a third-year PhD student at <a href="https://www.telecom-paris.fr/">Telecom Paris</a>, working on machine learning for audio and music processing under the supervision of prof. <a href="https://www.telecom-paris.fr/gael-richard">Gaël Richard</a> and prof. <a href="https://perso.telecom-paristech.fr/gpeeters/">Geoffroy Peeters</a>. I am part of the <a href="https://adasp.telecom-paris.fr/">ADASP</a> group and the <a href="https://hi-audio.imt.fr/">HI-Audio</a> project. I am currently working as a research scientist intern at <a href="https://research.deezer.com/about/">Deezer Research</a>. Previously, I was an intern at <a href="https://cslmusicteam.sony.fr/">Sony CSL (Music Team)</a>.
    </p>

<p>
My research focuses on developing novel approaches at the intersection of signal processing and deep learning for Music Information Retrieval (MIR), Music Source Separation and audio synthesis. I am particularly interested in unsupervised and self-supervised learning for training smart and efficient models.
</p>

   <p>
I hold a Bachelor's in Electrical and Computer Engineering from <a href="https://ufmg.br/">Universidade Federal de Minas Gerais</a> and an engineering degree from <a href="https://www.telecom-paris.fr/">Telecom Paris</a>. In 2022, I completed my Master's degree in Artificial Intelligence from the <a href="https://www.master-mva.com/">MVA</a> program at <a href="https://www.ens-paris-saclay.fr/">Ecole Normale Superieure Paris-Saclay</a>.
</p>


   <p style="margin-bottom: 1em;">
  <strong>Contact:</strong> <em>bernardo [dot] torres AT telecom-paris [dot] fr</em>
</p>

<p>
  <i class="fab fa-fw fa-github"></i> <a href="https://github.com/bernardo-torres">Github</a> 
   <i class="fab fa-fw fa-linkedin"></i> <a href="https://www.linkedin.com/in/bernardo-ferreira-torres/">LinkedIn</a>
    <svg style="width: 1em; height: 1em; vertical-align: middle;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"/></svg> <a href="https://bsky.app/profile/bernardo-torres.bsky.social/">Bluesky</a>
  <i class="fab fa-fw fa-twitter"></i> <a href="https://twitter.com/torres_be_">Twitter</a>
  <i class="fa fa-graduation-cap"></i> <a href="https://scholar.google.com/citations?user=S5h1fHIAAAAJ&hl=en">Google Scholar</a>
</p>
You can find my CV <a href="/documents/Bernardo_Torres_CV_2024.pdf">here</a>. 
 </div>
 <div class="profile-photo">
   <img src="/assets/images/bernardo_torres.png" alt="Bernardo Torres">
 </div>

 
</div>

   

<!-- Add line break -->

<!-- Add twitter link with twitter icon on the left using fab fa-fw fa-twitter -->


<!-- 
# Research
I am currently working on topics related to music source separation using synthesis, analysis-by-synthesis, deep learning for audio generation and differentiable digital signal processing. Broader research interests include self-supervised learning, music information retrieval, timbre, optimal transport and generative models. -->

<div style="text-align: left; font-size: 1.2em; font-weight: bold; margin: 10px 0 20px;">
    Publications
    <hr style="border: none; height: 1px; color: #ddd; background-color: #ddd; width: 12%; margin: 0.5em 0; text-align: left;">
</div>

<style>
    .publication-item {
        display: flex;
        align-items: flex-start;
        margin-top: 0px;
    }
    .pub-year {
        /* italic */
        font-style: italic;
        margin-right: 30px;
        /* font-size: 1.5em; */
    }
    .pub-details {
        flex-grow: 1;
        margin-top: 0; /* Adjust or reset margins as needed */
        padding-top: 0; /* Adjust or reset paddings as needed */
    }
    .pub-thumbnail {
        margin-right: 20px;
    }
    .pub-thumbnail img {
        max-width: 120px; /* Adjust the size as needed */
        height: auto;
    }
</style>



<div class="publication-item">
    <div class="pub-details">
        <p style="margin: 0; padding: 0;">
            <strong>The Inverse Drum Machine: Source Separation Through Joint Transcription and Analysis-by-Synthesis</strong>
        </p>
        <p style="margin-left: 0px; margin-top: 5px;">
            Bernardo Torres, Geoffroy Peeters, Gaël Richard  
            <br>
            Under review.  
            <br>
            <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('idm')">ABS</a>
            <a class="pdf-box">Preprint (soon)</a>
            <a href="https://github.com/bernardo-torres/inverse-drum-machine" class="pdf-box"><i class="fab fa-fw fa-github"></i> code</a>
            <a href="https://bernardo-torres.github.io/projects/inverse-drum-machine/" class="pdf-box">blog/demos</a>
            <div id="idm" class="abstract-content" style="display: none;">
                We present the Inverse Drum Machine (IDM), a novel approach to drum source separation that leverages an analysis-by-synthesis framework combined with deep learning. Unlike recent supervised methods that require isolated stem recordings, our approach operates on drum mixtures with only transcription annotations. IDM integrates Automatic Drum Transcription and One-shot Drum Sample Synthesis, jointly optimizing these tasks in an end-to-end manner. By convolving synthesized one-shot samples with estimated onsets—akin to a drum machine—we reconstruct the individual drum stems and train a deep neural network on the reconstruction of the mixture. Experiments on the StemGMD dataset demonstrate that IDM achieves separation quality comparable to state-of-the-art supervised methods that require isolated stems, while significantly outperforming matrix decomposition baselines.
            </div>
        </p>
    </div>
</div>


<div class="publication-item">
    <!-- <div class="pub-year">2024</div> -->
    <!-- <div class="pub-thumbnail">
        <img src="/assets/images/poster_spectra_horizontal_transport_lines.png" alt="Thumbnail">
    </div> -->
    <div class="pub-details">
        <p style="margin: 0; padding: 0;">
            <strong>PESTO: Real-Time Pitch Estimation with Self-supervised Transposition-equivariant Objective</strong>
        </p>
        <p style="margin-left: 0px; margin-top: 5px;">
            Alain Riou, Bernardo Torres, Ben Hayes, Stefan Lattner, Gaëtan Hadjeres, Gaël Richard, Geoffroy Peeters
            <br>
            Submitted to <em>Transactions of the International Society of Music Information Retrieval (TISMIR)</em>.
            <br>
            <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('sot')">ABS</a>
            <a class="pdf-box">Preprint (soon)</a>
            <a href="https://github.com/SonyCSLParis/pesto" class="pdf-box"><i class="fab fa-fw fa-github"></i> code</a>
            <div id="sot" class="abstract-content" style="display: none;">
                In this paper, we introduce PESTO, a self-supervised learning approach for single-pitch estimation using a Siamese architecture. Our model processes individual frames of a Variable-$Q$ Transform (VQT) and predicts pitch distributions. The neural network is designed to be equivariant to translations, notably by introducing a Toeplitz fully-connected layer. In addition, we construct pitch-shifted pairs by translating and cropping the VQT frames and train our model with a novel class-based transposition-equivariant objective, eliminating the need for annotated data. Thanks to this architecture and training objective, our model achieves remarkable performances while being very lightweight (130k parameters).

Evaluations on music and speech datasets (MIR-1K, MDB-stem-synth, and PTDB) demonstrate that PESTO not only outperforms self-supervised baselines but also competes with supervised methods, exhibiting superior cross-dataset generalization. Finally, we enhance PESTO's practical utility by developing a streamable VQT implementation using cached convolutions. Combined with our model's low latency (less than 10 milliseconds) and minimal parameter count, this makes PESTO particularly suitable for real-time applications.
            </div>
        </p>
    </div>
</div>


<div class="publication-item">
    <!-- <div class="pub-year">2024</div> -->
    <!-- <div class="pub-thumbnail">
        <img src="/assets/images/poster_spectra_horizontal_transport_lines.png" alt="Thumbnail">
    </div> -->
    <div class="pub-details">
        <p style="margin: 0; padding: 0;">
            <strong>Unsupervised Harmonic Parameter Estimation Using Differentiable DSP and Spectral Optimal Transport</strong>
        </p>
        <p style="margin-left: 0px; margin-top: 5px;">
            Bernardo Torres, Geoffroy Peeters and Gaël Richard
            <br>
            In <em>IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2024)</em>.
            <br>
            <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('sot')">ABS</a>
            <a href="https://arxiv.org/pdf/2312.14507.pdf" class="pdf-box">PDF (arXiv)</a>
            <a href="https://github.com/bernardo-torres/1d-spectral-optimal-transport" class="pdf-box"><i class="fab fa-fw fa-github"></i> code</a>
            <a href="/documents/Torres_ICASSP_2024_poster.pdf" class="pdf-box"> poster 
            </a>
            <div id="sot" class="abstract-content" style="display: none;">
                In neural audio signal processing, pitch conditioning has been used to enhance the performance of synthesizers. However, jointly training pitch estimators and synthesizers is a challenge when using standard audio-to-audio reconstruction loss, leading to reliance on external pitch trackers. To address this issue, we propose using a spectral loss function inspired by optimal transportation theory that minimizes the displacement of spectral energy. We validate this approach through an unsupervised autoencoding task that fits a harmonic template to harmonic signals. We jointly estimate the fundamental frequency and amplitudes of harmonics using a lightweight encoder and reconstruct the signals using a differentiable harmonic synthesizer. The proposed approach offers a promising direction for improving unsupervised parameter estimation in neural audio applications.
            </div>
        </p>
    </div>
</div>


<div class="publication-item">
    <!-- <div class="pub-year">2024</div> -->
    <div class="pub-details">
        <p style="margin: 0; padding: 0;">
            <strong> A Fully Differentiable Model for Unsupervised Singing Voice Separation</strong>
        </p>
        <p style="margin-left: 0px; margin-top: 5px;">
            Gaël Richard, Pierre Chouteau, and Bernardo Torres
            <br>
            In <em>IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP 2024)</em>.
            <br>
            <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('fully-dif')">ABS</a>
            <a href="https://telecom-paris.hal.science/hal-04356813/document" class="pdf-box"> PDF (hal)
            </a>
            <!-- <a href="https://github.com/PierreChouteau/umss" class="pdf-box"> <i class="fab fa-fw fa-github"></i> code 
            </a> -->
            <div id="fully-dif" class="abstract-content" style="display: none;">
        A novel model was recently proposed by Schulze-Forster et al. in [1] for unsupervised music source separation. This model allows to tackle some of the major shortcomings of existing source separation frameworks. Specifically, it eliminates the need for isolated sources during training, performs efficiently with limited data, and can handle homogeneous sources (such as singing voice). But, this model relies on an external multipitch estimator and incorporates an Ad hoc voice assignment procedure. In this paper, we propose to extend this framework and to build a fully differentiable model by integrating a multipitch estimator and a novel differentiable assignment module within the core model. We show the merits of our approach through a set of experiments, and we highlight in particular its potential for processing diverse and unseen data.
      </div>
        </p>
    </div>
</div>




<div class="publication-item">
    <!-- <div class="pub-year">2023</div> -->
    <div class="pub-details">
        <p style="margin: 0; padding: 0;">
            <strong> Singer Identity Representation Learning using Self-Supervised Techniques</strong>
        </p>
        <p style="margin-left: 0px; margin-top: 5px;">
            Bernardo Torres, Stefan Lattner and Gaël Richard
            <br>
            In <em>International Society for Music Information Retrieval Conference (ISMIR 2023)</em>.
            <br>
            <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('ssl_sing_id')">ABS</a>
            <a href="https://telecom-paris.hal.science/hal-04186048v1/document" class="pdf-box"> PDF (hal)
            </a>
            <a href="https://github.com/SonyCSLParis/ssl-singer-identity" class="pdf-box"> <i class="fab fa-fw fa-github"></i> code 
            </a>
            <a href="https://sites.google.com/view/singer-representation-learning" class="pdf-box"> blog 
            </a>
            <a href="/documents/ISMIR_23_Poster.pdf" class="pdf-box"> poster 
            </a>
            <div id="ssl_sing_id" class="abstract-content" style="display: none;">
            Significant strides have been made in creating voice
            identity representations using speech data. However, the
            same level of progress has not been achieved for singing
            voices. To bridge this gap, we suggest a framework for
            training singer identity encoders to extract representations
            suitable for various singing-related tasks, such as singing
            voice similarity and synthesis. We explore different selfsupervised learning techniques on a large collection of isolated vocal tracks and apply data augmentations during
            training to ensure that the representations are invariant to
            pitch and content variations. We evaluate the quality of
            the resulting representations on singer similarity and identification tasks across multiple datasets, with a particular
            emphasis on out-of-domain generalization. Our proposed
            framework produces high-quality embeddings that outperform both speaker verification and wav2vec 2.0 pre-trained
            baselines on singing voice while operating at 44.1 kHz. We
            release our code and trained models to facilitate further research on singing voice and related areas.
      </div>
        </p>
    </div>
</div>


<br><br>

<!-- <div style="text-align: center; font-size: 1.2em; font-weight: bold; margin: 10px 0 20px;">
    Theses
    <hr style="border: none; height: 1px; color: #ddd; background-color: #ddd; width: 12%; margin: 0 auto;">
</div>

<!-- Add the thesis section following a similar structure -->
<!-- 
<div class="publication-item">
    <div class="pub-year">2022</div>
    <div class="pub-details">
        <p style="margin: 0; padding: 0;">
            <strong> Singer identity conversion using self-supervised learning and differentiable source-filter models</strong>
        </p>
        <p style="margin-left: 0px; margin-top: 5px;">
            Bernardo Torres
            <br>
            <em> Master’s (M2) thesis for program <a href="https://www.master-mva.com/">Mathematiques, Vision, Apprentissage (MVA)</a>. Research performed while interning at Sony CSL Paris.</em>.
            <br>
            <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('masters')">ABS</a>
            <div id="masters" class="abstract-content" style="display: none;">
            The human voice is a musical instrument highly limited by the physiology of the singer, making it
difficult for a singer to move out of the limitations of one’s voice. Compared to the most basic
synthesizers, existing systems designed for voice synthesis or transformation are still
rudimentary in terms of giving the user control of the timbral aspects of the sound. It is even
more so for perceptually-motivated synthesis, in which the user uses an intuitive control to
perform sound transformations (e.g. pitch and identity).
This work explores the domain of voice transformation, using the singer’s identity as the primary
control, a process known as Singing Voice Conversion (SVC). We focus on
answering two main questions: 1) how to extract the vocal identity of a singer, and 2) how can we control
it during synthesis? 

We resort to recent developments in Deep Learning for obtaining (or learning) answers to
these questions using data-driven solutions. Furthermore, we design a voice modification
system that works on zero-shot conditions: it must generalize well outside the data used to train
it so anyone can use it with their voice.
For the first part, we explore Self-supervised learning (SSL) to obtain representations that
uniquely identify a singer based on an excerpt of his voice. SSL leverages significant amounts
of unlabeled data by solving a pretext (unsupervised) task without using labelled data, and the
learned representations can be transferred to other tasks. This work compares contrastive and
non-contrastive approaches and different neural network architectures. Metrics borrowed from
Singer Identification and Verification literature are used to evaluate the trained models and
compare them to baselines. A qualitative evaluation is also performed to assess the quality of
the learned identity representations.
In the second part, we explore audio synthesis architectures and modify them to inject the
identity information extracted in the first part. Changing only the injected identity information can
change the voice’s identity while keeping the linguistic information intact. We focus on a recent
trend in the domain of neural audio synthesis that attempts to join classical signal processing
techniques with the data-driven workflow of deep neural networks grouped under the name of
differentiable signal models. This work adapts a differentiable model based on the source-filter
model of speech production for the injection of identity information.
      </div>
        </p>
    </div>
</div>
 --> 


</div>{: .notice--blank}
