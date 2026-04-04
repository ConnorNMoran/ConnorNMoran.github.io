---
layout: page
title: Contact
description: >
  BIG OLD TEST YEAH
sitemap: false
---

<form id="contact-form" action="https://formspree.io/f/mgopnlea" method="POST">
  <div class="form-group">
    <input type="text" name="name" class="form-control" placeholder="Name">
  </div>
  <div class="form-group">
    <input type="email" name="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address">
  </div>
  <div class="form-group">
    <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder="Type your message here..."></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<div id="success-popup" class="popup">
  <div class="popup-box">
    <p>Thanks! Your message has been sent.</p>
  </div>
</div>