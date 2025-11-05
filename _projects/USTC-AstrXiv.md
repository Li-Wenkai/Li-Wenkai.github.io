---
layout: page
title: "USTC-AstrXiv (蜗壳天文科研周报)"
short_title: "USTC-AstrXiv"
summary: "A fully automated weekly digest of USTC Astronomy research"
description: 'USTC-AstrXiv (nicknamed "WoKe Astro Weekly") is an automated email newsletter that identifies, formats, and distributes new astronomy-related papers from the University of Science and Technology of China (USTC) on arXiv. The system runs autonomously on a server and delivers a neatly formatted HTML email to subscribers every Monday morning.'
img: "/assets/img/projects/USTC-AstrXiv_Logo.png"
importance: 3
category: "Astronomy Tools"
related_publications: false
permalink: "/projects/ustc-astrxiv/"
---

**USTC-AstrXiv**, also known as _WoKe Astronomy Weekly_, is an automated weekly digest that highlights new astronomy papers from the **University of Science and Technology of China (USTC)** posted on **arXiv**.  
The project was inspired by _StewarXiv_, a similar service run by the Steward Observatory at the University of Arizona.

It was built with the assistance of modern AI tools such as **Gemini** and **ChatGPT**, especially for parts involving **HTML and interface design**—areas in which the author had little prior experience.

---

## Logo and Name

The **logo** is both playful and symbolic:

- It resembles a **snail shell**, a nod to “WoKe” (蜗壳) — a homophone of “WoKe” meaning _our university_ in Chinese slang.
- It also represents a **spiral galaxy**, evoking the astronomical theme.

The name **LiWenXiv** originated as a light-hearted pun by a senior student.  
The goal of the project is to make it easier for USTC astronomers to keep track of their colleagues’ most recent work.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="/assets/img/projects/USTC-AstrXiv_Logo.png" title="USTC-AstrXiv Logo" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure 1: The USTC-AstrXiv logo combines a snail shell (“WoKe”) and the spiral arms of a galaxy, symbolizing both community and astronomy.
</div>

---

## System Overview

The program is hosted on a remote server and runs automatically every week, identifying relevant arXiv papers and distributing the newsletter on **Monday mornings**.  
Its architecture is clean and lightweight, consisting of **four Python modules**:

- (1) Author & Affiliation Recognition
- (2) Email Generation and Delivery
- (3) Subscription Management
- (4) Configuration and Parameters

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="/assets/img/projects/USTC-AstrXiv_Architecture.png" title="System Architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure 2: System architecture of USTC-AstrXiv, illustrating the workflow from arXiv data retrieval to automated email distribution.
</div>

---

## (1) Author and Affiliation Recognition

The program runs every **Sunday night**, retrieving new submissions from several arXiv categories closely related to astronomy — including _astro-ph_, _gr-qc_, _hep-ph_, _hep-th_, _nucl-th_, and _physics_.  
Roughly 1000 papers are processed each week.

While the arXiv API provides metadata, it often cannot reliably identify author affiliations.  
To improve accuracy, the program downloads each paper’s **TeX source**, parsing it to detect whether at least one author is affiliated with USTC.

USTC papers are identified if their author list includes phrases such as:

- “Department of Astronomy, University of Science and Technology of China”
- “School of Astronomy and Space Science, University of Science and Technology of China”

Keywords are also extracted from the TeX source.  
A short delay is inserted between downloads to prevent temporary blocking by the arXiv server.

---

## (2) Email Generation and Delivery

Once USTC papers are identified, the program automatically generates a **stylized HTML email** summarizing them.

Highlights:

- HTML design and layout were created with the help of AI assistants (Gemini and ChatGPT).
- The **logo** is pixel-encoded rather than embedded as an image file, ensuring it is displayed even in restrictive email clients.
- Abstracts are left in **uncompiled LaTeX form**, as pre-rendered equations often display poorly or get blocked by email filters.
- The sender uses the author’s USTC email, but the “display name” is set to **USTC-AstrXiv**, providing a professional appearance.

A test email is sent to the author each Sunday.  
If no issues are found, the weekly newsletter is automatically delivered to all subscribers early Monday morning.

---

## (3) Subscription and Unsubscription

Subscribers can join or leave the mailing list simply by sending an email:

- **To subscribe**: send an email with the subject “Subscribe” or “订阅” to `liwenkai@mail.ustc.edu.cn`
- **To unsubscribe**: send an email with the subject “Unsubscribe” or “退订`”

The program uses **keyword-based subject detection**, so the keywords can appear anywhere in the subject line.  
This lightweight approach is convenient for users, though in rare cases it might incorrectly add unrelated senders.

---

## (4) Configuration and Parameters

All runtime parameters — such as API access range, file paths, and email templates — are defined in a dedicated configuration file for easy modification and maintenance.

---

## Example Output

Below is an example of the final newsletter as seen by subscribers.  
It contains the pixel-encoded logo, paper titles, authors, abstracts, and arXiv links.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="/assets/img/projects/USTC-AstrXiv_Email.png" title="Example Newsletter" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
Figure 3: Example of a weekly newsletter email automatically generated and sent to USTC-AstrXiv subscribers every Monday morning.
</div>

---

## Acknowledgment

The development of **USTC-AstrXiv** was made possible through the open **arXiv API** and benefited greatly from the assistance of **AI tools (Gemini and ChatGPT)** in code generation and HTML rendering.

---
