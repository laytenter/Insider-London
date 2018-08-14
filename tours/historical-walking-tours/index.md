---
title: London History Tours | Historical Walking Tours
date: 2015-05-11 15:47:17 Z
permalink: "/tours/historical-walking-tours/"
heading: Historical Tours
id: 25099
layout: page
description: We provide the most entertaining and informative London history tours.
  Ideal for tourists, schools and corporate events. Learn more at insider-london.co.uk.
---

  <p>Our Historical Tours run regularly as group tours for everyone to enjoy. Our Street Art Tour showcases the most beautiful pieces in vibrant Shoreditch whilst our Quirky Tour traverses colourful Covent Garden to unearth the weird and wonderful stories of the West End. The original Underground/Tube Tour provides fascinating insight into the lifeblood of London with more than 150 years of transport history, and the lifeblood of London.</p>

<div class="layout">
  {% assign tours = site.tours | where: "categories", "hidden" %}
  {% for tour in tours %}
    <div class="layout__item u-1/4 u-1/3-lap u-1/2-palm">
      {% include tour-block.html %}
    </div>
  {% endfor %}  
</div>
