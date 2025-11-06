---
layout: page
title: Research
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories:
  - "TDEs & IMBHs"
  - "PSBs"
  - "Survey Forecasts"
  - "Astronomy Tools"
  - "AGNs"
horizontal: false
---

<style>
/* ============ 修正卡片中图片到底部标题的间距 ============ */
.projects .card figure {
  margin-bottom: 0 !important;  /* 移除 <figure> 默认留白 */
}

.projects .card .card-img-top {
  display: block;
  width: 100%;
  height: auto;                 /* 保持比例显示 */
  margin-bottom: 0 !important;  /* 避免图片自身留白 */
  vertical-align: bottom;
}

.projects .card .card-body {
  padding-top: 1.5rem !important;  /* 控制图片和文字之间统一距离 */
}

.projects .card .card-title {
  margin-top: 0 !important;        /* 避免标题上方出现额外空隙 */
}
</style>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  if (!location.hash) return;
  const raw = decodeURIComponent(location.hash.slice(1));
  const el  = document.getElementById(raw);
  if (!el) return;

  const go = () => el.scrollIntoView({ block: 'start', behavior: 'auto' });

  // 你的站点引了 imagesLoaded（al-folio 默认有）
  if (window.imagesLoaded) {
    imagesLoaded(document.body, function () {
      setTimeout(go, 0); // 等 Masonry 完成 reflow 再滚
    });
  } else {
    setTimeout(go, 0);
  }
});
</script>
