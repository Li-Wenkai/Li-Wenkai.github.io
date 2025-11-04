---
layout: project
title: "Applications of the MCMC method in spectral fitting of active galactic nuclei and cosmology (in Chinese)"
description: "A brief review on the physics of active galactic nuclei and introduction to Markov Chain Monte Carlo methods, written in Chinese."
img: /assets/img/Review_AGN_MCMC.png # 你可以放一个封面图（可选）
importance: 2
category: AGN
related_publications: []
---

<style>
.embed-container {
  position: relative;
  padding-bottom: 141.4%; /* A4 比例 */
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border: 0;
}
</style>

<p style="text-align:center;">
  <a href="/assets/pdf/AGN_Review_WenkaiLi.pdf" class="btn btn-primary" role="button" target="_blank" rel="noopener noreferrer">
    <i class="ti ti-download"></i> Download PDF
  </a>
</p>

<div class="embed-container">
  <iframe id="agn-iframe"></iframe>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const agnIframe = document.getElementById('agn-iframe');
  const pdfPath = '/assets/pdf/AGN_Review_WenkaiLi.pdf';
  const params = navigator.userAgent.toLowerCase().includes('firefox')
    ? '#view=FitH&pagemode=none'
    : '#toolbar=0&navpanes=0';
  agnIframe.src = pdfPath + params;
});
</script>
