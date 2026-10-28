---
layout: splash
permalink: /
author_profile: false
classes: wide
---

<section id="about" class="home-intro">
  <div class="home-intro__text">
    <p class="home-intro__lede">
      Hi! I'm Bernardo. I work as a machine learning researcher for applications on audio and music.
    </p>

    <p>
      I recently completed my PhD at <a href="https://www.telecom-paris.fr/">Telecom Paris</a>, supervised by prof. <a href="https://www.telecom-paris.fr/gael-richard">Gaël Richard</a> and prof. <a href="https://perso.telecom-paristech.fr/gpeeters/">Geoffroy Peeters</a>, as part of the <a href="https://adasp.telecom-paris.fr/">ADASP</a> group and the <a href="https://hi-audio.imt.fr/">HI-Audio</a> project. My thesis was on audio source separation and music information retrieval, with a particular interest in self-supervised and unsupervised methods for training smart and efficient models.
    </p>

    <p>
      Along the way, I was a research scientist intern at <a href="https://research.deezer.com/about/">Deezer Research</a> and <a href="https://cslmusicteam.sony.fr/">Sony CSL (Music Team)</a>.  I hold a Master's in Artificial Intelligence from the <a href="https://www.master-mva.com/">MVA</a> program at <a href="https://www.ens-paris-saclay.fr/">ENS Paris-Saclay</a>, an engineering degree from Telecom Paris, and a Bachelor's in Electrical and Computer Engineering from <a href="https://ufmg.br/">Universidade Federal de Minas Gerais</a>.
    </p>

    <div id="contact" class="home-contact">
      <p class="home-contact__email">
        <i class="fas fa-envelope" aria-hidden="true"></i> bernardo [AT] bernardotorres [dot] net
      </p>
      <ul class="home-contact__links">
        <li><a href="/documents/cv_public.pdf"><i class="fas fa-file-alt" aria-hidden="true"></i> CV</a></li>
        <li><a href="https://scholar.google.com/citations?user=S5h1fHIAAAAJ&hl=en"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Scholar</a></li>
        <li><a href="https://github.com/bernardo-torres"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/bernardo-ferreira-torres/"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
        <li><a href="https://bsky.app/profile/bernardo-torres.bsky.social/"><svg class="icon-bluesky" aria-hidden="true" viewBox="0 0 512 512"><path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z"/></svg> Bluesky</a></li>
        <li><a href="https://twitter.com/torres_be_"><i class="fab fa-twitter" aria-hidden="true"></i> Twitter</a></li>
      </ul>
    </div>
  </div>

  <div class="home-intro__photo">
    <img src="/documents/images/bernardo_torres_web.jpg" alt="Portrait of Bernardo Torres">
  </div>
</section>

<section id="news" class="home-section">
  <h2 class="home-section__title">News</h2>
  <ul class="news-list">
    {%- for item in site.data.news %}
    <li><span class="news-list__date">{{ item.date }}</span> <span>{{ item.text }}</span></li>
    {%- endfor %}
  </ul>
</section>

<section id="publications" class="home-section">
  <h2 class="home-section__title">Selected publications</h2>
  {% include publication-list.html %}
  <p class="pub-more">
    Full list on <a href="https://scholar.google.com/citations?user=S5h1fHIAAAAJ&hl=en">Google Scholar</a> →
  </p>
</section>
