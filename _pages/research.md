---
# layout: single
layout: splash
permalink: /research/
author_profile: false
classes: wide
# sidebar:
#   nav: "research"
---

<!-- <script>
function toggleAbstract() {
    var abstract = document.getElementById("abstractContent");
    if (abstract.style.display === "none") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}
<script> -->


<div markdown = "1">

<!-- Add a bit of space -->

<br>




# Research
I am currently working on topics ranging from music source separation using synthesis, signal processing informed deep learning and differentiable digital signal processing.
<!-- <p style="font-family:verdana"></p> -->


## Publications  
<!-- add small space, not full line break -->


<div class="notice--blank">
  <p style="margin: 0; padding: 0; margin-top: 25px">
    <strong>Singer Identity Representation Learning using Self-Supervised Techniques</strong>
  </p> 
  <div style="margin-left: 20px; margin-top: 5px;">
    Bernardo Torres, Stefan Lattner and Gaël Richard, 2023. In <em>International Society for Music Information Retrieval Conference (ISMIR 2023)</em>. 
    <br>
    <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('ssl_sing_id')">ABS</a>
    <a href="https://telecom-paris.hal.science/hal-04186048v1/document" class="pdf-box"> PDF
    </a>
    <a href="https://github.com/SonyCSLParis/ssl-singer-identity" class="pdf-box"> <i class="fab fa-fw fa-github"></i> code 
    </a>
    <!-- <a href="https://telecom-paris.hal.science/hal-04186048v1/document"> <i class="fas fa-file-pdf"></i></a>  -->
   <a href="https://sites.google.com/view/singer-representation-learning" class="pdf-box"> blog 
    </a>
    <a href="/documents/ISMIR_23_Poster.pdf" class="pdf-box"> poster 
    </a>

    <!-- <a href=""> <i class="fab fa-fw fa-github"></i></a>  -->
    <!-- <a href="/documents/ISMIR_23_Poster.pdf">[poster]</a> -->

    
    <div id="ssl_sing_id" class="abstract-content">
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
</div>
</div>





<!-- 
**Torres, B.**, Lattner, S. and Richard, G., 2023. *Singer Identity Representation Learning using Self-Supervised Techniques*. In International Society for Music Information Retrieval Conference (ISMIR 2023).    <a href="https://telecom-paris.hal.science/hal-04186048v1/document"> <i class="fas fa-file-pdf"></i></a> <a href="https://github.com/SonyCSLParis/ssl-singer-identity"> <i class="fab fa-fw fa-github"></i></a> [[blog]](https://sites.google.com/view/singer-representation-learning) [[poster]](/documents/ISMIR_23_Poster.pdf) 
</div>{: .notice--blank} -->



## Theses

<!-- Bernardo Torres. *Singer identity conversion using self-supervised learning and differentiable source-filter models*. Master’s (M2) thesis for master's program [Mathematiques, Vision, Apprentissage (MVA)](https://www.master-mva.com/),
in double degree with Telecom Paris. Research performed in an intership at Sony CSL Paris. -->

<div class="notice--blank">
  <p style="margin: 0; padding: 0; margin-top: 25px">
    <strong>Singer identity conversion using self-supervised learning and differentiable source-filter models</strong>
  </p> 
    <div style="margin-left: 20px; margin-top: 5px;">
        Bernardo Torres. <em> Master’s (M2) thesis for program <a href="https://www.master-mva.com/">Mathematiques, Vision, Apprentissage (MVA) </a>. Research performed while interning at Sony CSL Paris.</em>
        <br>
        <a href="javascript:void(0)" class="pdf-box" onclick="toggleAbstract('masters')">ABS</a>
        <div id="masters" class="abstract-content">
            <!-- lala -->
        </div>
    </div>
</div>

