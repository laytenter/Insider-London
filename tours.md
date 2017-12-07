---
title: Tours
date: 2015-05-11 15:47:17 Z
permalink: "/tours/"
id: 25099
author: london75
layout: page
---

<p>Insider London has a wide variety of walking tours to appeal to everyone; whether you are a Londoner wanting to find out more about the city’s weird and wonderful curiosities or a member of a corporate organisation looking for something a bit different to do on your work away-day. You might even be looking for a bespoke tour - go to our <a href="/special-occasions">Special Occasions</a> page for more information regarding this service.</p>

<div class="layout">
{% assign tours = site.tours | sort:"date" %}
{% for tour in tours %}
  {% assign loopindex = forloop.index | modulo: 4 %}
  {% if forloop.index > 1 %}-->{% endif %}<div class="layout__item u-1/4 u-1/3-lap u-1/2-palm">
    {% include tour-block.html %}
  </div>{% if forloop.last %}{% else %}<!--{% endif %}
{% endfor %}
</div>
