---
title: Tour Guides
permalink: "/tour-guides/"
layout: page
---

Insider London's guided walking tours are planned and led by our team of lovely guides. Read on to meet the team...

{% for guide in site.data.guides %}
  <div class="media media--responsive palm-mb-- lap-mb- desk-mb">
    <img src="{{ site.baseurl }}{{ guide.image }}" class="media__img">
    <div class="media__body">
      <h3>{{ guide.name }}</h3>
      {{ guide.description }}
    </div>
  </div>
{% endfor %}
