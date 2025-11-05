---
layout: page
title: "Applications of the MCMC method in spectral fitting of active galactic nuclei and cosmology"
short_title: "MCMC in AGN & Cosmology" # ← 新增：用于Research卡片显示
summary: "Review paper for the graduate course _Statistical Methods in Astrophysics_, written in Chinese."
description:
img: /assets/img/projects/Review_AGN_MCMC.png # 你可以放一个封面图（可选）
importance: 5
category: AGN
related_publications: false
permalink: /projects/review_agn_mcmc/
---

This review paper, written in Chinese for [Prof. Guilin Liu](http://staff.ustc.edu.cn/~glliu/)’s graduate course _Statistical Methods in Astrophysics_, was co-authored by Jialai Wang, Tianyi Wei, Shihong Liu and me, with equal contributions.

I wrote the introductory chapter, which provides an overview of the fundamental concepts of AGNs and MCMC methods, laying the theoretical foundation for the subsequent chapters.

Note: The references are incomplete, as certain textbooks, lecture notes, and slides were omitted due to LaTeX formatting issues.

<style>
  .pdf-frame {
    width: 100%;
    height: 155vh;                 /* 可调：占视口 85% 高度 */
    border: 1px solid var(--global-divider-color);  /* 外框 */
    border-radius: 6px;           /* 可选：圆角 */
    box-shadow: 0 2px 8px rgba(0,0,0,.06); /* 可选：阴影 */
  }
</style>

<p style="text-align:center; margin-bottom: 0.75rem;">
  <a href="/assets/pdf/Review_AGN_MCMC.pdf" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
    <i class="ti ti-download"></i> Download PDF
  </a>
</p>

<iframe
  class="pdf-frame"
  src="/assets/pdf/Review_AGN_MCMC.pdf#zoom=page-width">
</iframe>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const agnIframe = document.getElementById('agn-iframe');
  const pdfPath = '/assets/pdf/Review_AGN_MCMC.pdf';
  const params = navigator.userAgent.toLowerCase().includes('firefox')
    ? '#view=FitH&pagemode=none'
    : '#toolbar=0&navpanes=0';
  agnIframe.src = pdfPath + params;
});
</script>
