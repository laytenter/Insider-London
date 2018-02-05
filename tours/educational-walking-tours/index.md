---
title: Educational Tours in London | School Tours
heading: Educational Tours
description: Our educational guided tours are perfect for corporate events or student groups. The best educational tours in London with insider-london.co.uk.
date: 2015-05-11 15:47:17 Z
permalink: "/tours/educational-walking-tours/"
id: 25099
author: london75
layout: page
---

Insider London offers educational guided tours which are perfect for corporate events or student groups. The Financial Walking Tour reveals how the City of London developed into a global financial centre while our Silicon Roundabout Tour gives students the chance to explore and learn about East London’s Tech hub.

Alternatively, our Retail Design Tour takes in the most exciting and innovative retail design in London, with a focus on visual marketing and merchandising. Our in-depth business visits are also incredibly popular and involve a behind-the-scenes visit to one of London’s most exciting businesses where you will hear from entrepreneurs who built their companies from the ground up.

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
