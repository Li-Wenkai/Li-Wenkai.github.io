---
layout: page
title: Five-Stage Model for IMBH-TDE EP240222a (TBD!!! AI Version Website)
description: Developing a comprehensive analytical model for the first intermediate-mass black hole tidal disruption event (IMBH-TDE) candidate.
img: /assets/img/projects/EP240222a_Model.png
importance: 1
category: "TDEs & IMBHs"
related_publications: true
permalink: /projects/ep240222a_model/
---

This project focuses on the detailed theoretical modeling of EP240222a, a key candidate for a Tidal Disruption Event (TDE) involving an **Intermediate-Mass Black Hole (IMBH)**. The unique, long-duration light curve of this event challenges standard TDE theory, necessitating a novel analytical framework.

### The Challenge of EP240222a

Unlike typical TDEs characterized by fast, steep light curve decays, EP240222a exhibits peculiar features: a slower rise and a prolonged plateau phase. Our primary goal was to construct a physical model that self-consistently explains the multi-wavelength observations.

## IMBH-TDE: Five-Stage Model

We developed a robust five-stage evolutionary model that links the debris stream dynamics to the observed luminosity:

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/projects/EP240222a_Model.png" title="Five-Stage Model Illustration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Illustration of the five distinct phases of the stellar debris evolution around the IMBH, from disruption to the formation of a stable accretion disk. (Simulated/Analytical data).
</div>

The model stages include:

- **Stage I: Disruption & Stream Fallback.** Initial tidal stripping and free-fall of the stellar material back towards the black hole.
- **Stage II: Delayed Stream-Stream Collision (Key).** The unique timing where the leading and trailing edges of the stream collide, thermalizing the energy. This collision powers the initial optical/UV emission.
- **Stage III: Inefficient Circularization.** The stream material forms a highly eccentric orbit rather than immediately forming a stable disk, leading to the prolonged plateau phase observed in EP240222a.
- **Stage IV: Accretion Disk Formation.** Gradual circularization and formation of a standard accretion disk.
- **Stage V: Luminosity Decay.** The mass fallback rate drops below the critical Eddington rate, leading to the decay phase observed in the final stages.

## Constraining IMBH Properties

This analytical work allowed us to place tight constraints on the IMBH mass, spin, and the star's properties, providing crucial insights into the elusive IMBH population.

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/projects/EP240222a_X-ray.png" title="Model Fit" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="/assets/img/projects/EP240222a_Early_Optical.png" title="Constraint Diagram" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: Multi-band light curve fitting (left) showing the model's excellent agreement with observational data, and constraint diagrams (right) of the inferred black hole mass and stellar parameters.
</div>

---

## Related Publication

This project is fully detailed in the following work:

{% bibliography --file papers --query @Li2025 %}

_(Please note: Click on the 'Submitted' badge to view links to the accompanying video and slides from conference presentations.)_
