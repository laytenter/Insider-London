---
title: Educational Tours in London | School Tours
date: 2015-05-11 15:47:17 Z
permalink: "/tours/educational-walking-tours/"
heading: Educational Tours
description: Our educational guided tours are perfect for corporate events or student
  groups. The best educational tours in London with insider-london.co.uk.
id: 25099
author: london75
layout: page
---

Insider London offers educational guided tours which are perfect for corporate events, student groups and private parties. The City Finance Tour uncovers the development of the world's financial hub, whilst our Silicon Roundabout Tour analyses the development of the thriving business eco-system which has become the third biggest tech start-up zone in the world.

Discover the rich and varied visual marketing and merchandising techniques of retail in London with our many Retail Design Tours, or experience London as a global green city, with our Cutting-Edge Green or Sustainable Architecture

### Brochure

For more information about our education tours please download our PDF brochure

<a class="btn btn--small btn--red" href="/assets/insider-london-web-brochure.pdf">View Brochure
</a>

<div class="layout">
  {% assign tours = site.tours | where: "categories", "educational" %}
  {% for tour in tours %}
  <div class="layout__item u-1/4 u-1/3-lap u-1/2-palm">
  {% include tour-block.html %}
  </div>
  {% endfor %}
</div>
