

import React from 'react';
import "./About.css" 

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1>About Our Ecommerce Store</h1>
        <p>
          Welcome to Our Ecommerce Store! We are dedicated to providing quality
          products and an exceptional shopping experience to our customers.
        </p>
        <p>
          Founded in [year], our company has been at the forefront of the
          online retail industry. We strive to offer a wide range of products,
          from the latest fashion trends to cutting-edge electronics.
        </p>
      </section>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At [Company Name], our mission is to [describe your mission and
          values]. We aim to [describe your goals and objectives].
        </p>
      </section>
      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          Meet the dedicated individuals who make [Company Name] possible. Our
          team is passionate about [describe the company focus].
        </p>
        {/* Add team member profiles or images here */}
      </section>
    </div>
  );
};

export default AboutPage;
