---
title: Cultural Experiences in London
date: 2015-05-11 15:47:00 Z
permalink: "/london/cultural-experiences/"
heading: London
title: Cultural Experiences
description:
layout: landing
nav: london
background: cultural-experiences.jpg
---

Our cultural walking tours are the perfect fun addition to your conference, corporate day out or academic trip. An Insider classic, the Westminster Highlights provides the perfect introduction to London’s best sites.

Looking for something a bit different? Join us in colourful Covent Garden and unearth the weird and wonderful on our Quirky Tour (link). Our evening favourites: History of Drinking & Pubs and the Famous Ghosts and Infamous Murders, are sure to provide you with an unforgettable experience after dark!

{% assign tours = site.tours | where: "categories", "cultural-experiences" | sort:"order","last" %}
{% include related-tours.html %}
