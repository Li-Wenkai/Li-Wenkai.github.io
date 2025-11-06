---
layout: page # <-- Key: Changed 'cv' to 'page'
permalink: /cv/
title: "Curriculum Vitae"
short_title: "CV"
nav: true
nav_order: 5
---

<style>
  .pdf-frame {
    width: 100%;
    height: 155vh;
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0,0,0,.06);
  }
</style>

<p style="text-align:center; margin-bottom:0.75rem;">
  <a href="/assets/pdf/CV_Wenkai_Li.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
    <i class="ti ti-download"></i> Download CV
  </a>
</p>

<iframe
  class="pdf-frame"
  src="{{ '/assets/pdfjs/web/viewer.html' | relative_url }}?file={{ '/assets/pdf/CV_Wenkai_Li.pdf' | relative_url | url_encode }}#zoom=page-width&pagemode=none">
</iframe>
