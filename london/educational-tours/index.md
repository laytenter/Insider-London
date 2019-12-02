---
heading: London
title: Educational Tours in London
layout: landing
category: london
background: educational-tours.jpg
nav: london
---

Insider London offers a wide variety of educational guided walks which are perfect for corporate events, academic groups and private parties. Our guided walking tours are industry-specific and showcase London's many dimensions as a world-leading city.

Uncover the secrets of London's thriving business eco-systems, commercial success and creative scene. Explore impressive regeneration projects and beautiful architecture. Trace the origins of the world’s most iconic metropolitan transport and come check out how London is adapting to embrace a greener future.

{% assign tours = site.tours | where: "categories", "educational-tours" | sort:"order","last" %}
{% include related-tours.html %}
