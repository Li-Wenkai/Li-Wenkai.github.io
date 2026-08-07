---
layout: page
title: ξ
permalink: /ξ/
description:
nav: true
nav_order: 6
display_categories:
  - "Tucson (2025-)"
  - "Hefei (2021-2026)"
  - "Shenzhen (2002-2021)"
horizontal: false
---

<style>
/* ============ 修正卡片中图片到底部标题的间距 ============ */
.projects .card figure {
  margin-bottom: 0 !important;  
}
.projects .card .card-img-top {
  display: block;
  width: 100%;
  height: auto;                
  margin-bottom: 0 !important; 
  vertical-align: bottom;
}
.projects .card .card-body {
  padding-top: 1.5rem !important;  
}
.projects .card .card-title {
  margin-top: 0 !important;        
}
</style>

<div class="projects">

{% if site.enable_project_categories and page.display_categories %}

{% for category in page.display_categories %}

{% if category == "Shenzhen (2002-2021)" %}

  <h2 class="category" id="{{ category | slugify }}">
    <a href="https://mp.weixin.qq.com/s/RL8BCqMXEFR_ybQ853-rcQ?scene=1&click_id=4"
       target="_blank" rel="noopener">
      {{ category }}
    </a>
  </h2>
{% else %}
  <h2 class="category" id="{{ category | slugify }}">{{ category }}</h2>
{% endif %}

{% assign categorized_projects = site.amateur_astronomy | where: "category", category %}
{% assign sorted_projects = categorized_projects | sort: "importance" %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include personal_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include personal.liquid %}
    {% endfor %}
  </div>
{% endif %}

{% endfor %}

{% else %}

{% assign sorted_projects = site.amateur_astronomy | sort: "importance" %}

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include personal_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include personal.liquid %}
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
  if (window.imagesLoaded) {
    imagesLoaded(document.body, function () {
      setTimeout(go, 0); 
    });
  } else {
    setTimeout(go, 0);
  }
});
</script>

<script>
document.addEventListener('DOMContentLoaded', function () {
  if (typeof mediumZoom === 'function') {
    mediumZoom('.projects img', { margin: 24, scrollOffset: 0 });
  }
});
</script>
