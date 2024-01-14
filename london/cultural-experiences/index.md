---
title: London History Tours
date: 2015-05-11 15:47:00 Z
permalink: "/london/cultural-experiences/"
position: 4
heading: Cultural Experiences - Explore London History
description: Our cultural walking tours are the perfect fun addition to your conference,
  corporate day out or academic trip. Explore our historical London tours!
nav: london
background: cultural-experiences.jpg
layout: landing
---

Our cultural walking tours are the perfect fun addition to your conference, corporate day out or academic trip. An Insider classic, the Westminster Highlights provides the perfect introduction to London’s best sites.

Looking for something a bit different? Join us in colourful Covent Garden and unearth the weird and wonderful on our Quirky Tour. Our evening favourites: History of Drinking & Pubs and the 
Famous Ghosts and Infamous Murders, are sure to provide you with an unforgettable experience after dark!

{% assign tours = site.tours | where: "categories", "cultural-experiences" | sort:"order","last" %}
{% include related-tours.html %}
