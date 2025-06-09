import React from "react";
import "./contacts.css";

const Contact = () => {
  return (
   <section class="contact-section">
  <div class="contact-container">
    <h2 class="contact-title">
      <i class="fas fa-envelope contact-icon"></i>
      Get In Touch
    </h2>
    
    <div class="contact-content">
      <div class="contact-info">
        <div class="contact-method">
          <i class="fas fa-envelope"></i>
          <a href="mailto:your.email@example.com">pcherrieanne@gmail.com</a>
        </div>
        <div class="contact-method">
          <i class="fas fa-phone"></i>
          <a href="tel:+1234567890">099610724699</a>
        </div>
        <div class="contact-method">
          <i class="fas fa-map-marker-alt"></i>
          <span>Davao City, Phillipines</span>
        </div>
        
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
          <a href="#" class="social-link"><i class="fab fa-github"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;
