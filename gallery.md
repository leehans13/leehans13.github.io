---
layout: default
title: Gallery
description: Photo and video gallery of Hanshin Lee.
permalink: /gallery/
---

# Gallery

<p class="muted">A few moments outside research.</p>

<div class="gallery-grid">
  <figure class="gallery-item">
    <img src="{{ '/assets/media/happy-days.jpg' | relative_url }}" alt="Hanshin Lee standing in a garden of orange flowers" loading="lazy">
    <figcaption>Happy days</figcaption>
  </figure>

  <figure class="gallery-item portrait">
    <img src="{{ '/assets/media/ddabong.jpg' | relative_url }}" alt="Hanshin Lee giving a thumbs-up" loading="lazy">
    <figcaption>DDabong</figcaption>
  </figure>

  <figure class="gallery-item video-item">
    <video controls playsinline preload="metadata" poster="{{ '/assets/media/playing-tennis-poster.jpg' | relative_url }}">
      <source src="{{ '/assets/media/playing-tennis.mp4' | relative_url }}" type="video/mp4">
      Your browser does not support the video element.
    </video>
    <figcaption>Playing tennis with father</figcaption>
  </figure>
</div>
