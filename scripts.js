document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  const content = document.getElementById('content');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('active');
  });

  // Content for each section
  const sections = {
    home: `
      <section id="home" class="section">
        <div class="container">
          <h2>Welcome to Smart Urban Garden</h2>
          <p>Experience the future of urban agriculture with our innovative, data-driven solutions.</p>
          <img src="urban..avif" alt="Smart Urban Garden Hero Image" class="hero-image">
          <p>Our mission is to create sustainable and productive urban gardens that thrive in any environment. By harnessing the power of technology, we provide you with the tools and insights to grow your own fresh, organic produce right at home.</p>
          <p><strong>Key benefits of our smart urban garden solutions:</strong></p>
          <ul>
            <li>Increased crop yields</li>
            <li>Optimized resource usage</li>
            <li>Reduced environmental impact</li>
            <li>Enhanced food security</li>
            <li>Educational opportunities</li>
          </ul>
          <p>Ready to start your own smart urban garden? <a href="#how-it-works" class="cta-button">Learn More</a></p>
        </div>
      </section>
    `,
    'how-it-works': `
      <section id="how-it-works" class="section">
        <div class="container">
          <h2>How It Works</h2>
          <p>Our smart urban garden integrates IoT sensors, data mining, and machine learning to optimize resource usage, improve crop yields, and promote sustainability.</p>
          <div class="work-link">
            <a href="soil.html" target="_blank">Soil Monitoring</a>
          </div>
          <div class="work-link">
            <a href="automated-irrigation.html" target="_blank">Automated Irrigation</a>
          </div>
          <div class="work-link">
            <a href="predictive-analytics.html" target="_blank">Predictive Analytics for Crops</a>
          </div>
          <div class="work-link">
            <a href="energy-efficient-solutions.html" target="_blank">Energy-efficient Solutions</a>
          </div>
        </div>
      </section>
    `,
    solutions: `
      <section id="solutions" class="section solutions-section">
        <div class="container">
          <h2>Solutions</h2>
          <div class="solution-grid">
            <div class="solution">
              <img src="precision-agriculture.jpg" alt="Precision Agriculture" class="solution-image">
              <h3>Precision Agriculture</h3>
              <p>We use real-time monitoring to optimize soil moisture, nutrients, and water usage, ensuring maximum crop yield and resource efficiency.</p>
            </div>
            <div class="solution">
              <img src="pest-management.jpg" alt="Pest & Disease Management" class="solution-image">
              <h3>Pest & Disease Management</h3>
              <p>Early detection systems powered by AI and sensors help protect crops sustainably, preventing the spread of pests and diseases.</p>
            </div>
            <div class="solution">
              <img src="energy-optimization.jpg" alt="Energy Optimization" class="solution-image">
              <h3>Energy Optimization</h3>
              <p>Our smart lighting and renewable energy solutions minimize energy consumption while promoting optimal plant growth.</p>
            </div>
            <div class="solution">
              <img src="waste-management.jpg" alt="Waste Management" class="solution-image">
              <h3>Waste Management</h3>
              <p>Efficient composting and recycling of organic waste enhance soil health and contribute to a cleaner, greener environment.</p>
            </div>
          </div>
        </div>
      </section>
    `,

    community: `
      <section id="community" class="section community-section">
        <div class="container">
          <h2>Join Our Green Community</h2>
          <p>Connect with urban gardening enthusiasts, share your knowledge, and learn from others. Together, we are building a sustainable future through innovative gardening practices.</p>
          
          <!-- Community Highlights -->
          <div class="community-highlights">
            <div class="highlight">
              <h3>Success Stories</h3>
              <p>Read about how our community members have transformed their urban spaces with smart gardening solutions.</p>
              <a href="#success-stories" class="cta-button">Read Stories</a>
            </div>
            <div class="highlight">
              <h3>Upcoming Events</h3>
              <p>Join us for workshops, webinars, and meetups to expand your gardening skills and connect with like-minded individuals.</p>
              <a href="#events" class="cta-button">See Events</a>
            </div>
            <div class="highlight">
              <h3>Forum Discussions</h3>
              <p>Participate in our forums to ask questions, share tips, and engage in discussions about urban gardening.</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1TxjwoGimzGVlgzNJYWYlIK48RoQerVd0K2nqJtZx4Tjw1A/viewform?usp=sf_link" class="cta-button" target="_blank">Join Forum</a>
            </div>
          </div>
          
          <!-- Testimonials -->
          <div class="testimonials">
            <h3>What Our Members Say</h3>
            <div class="testimonial">
              <img src="member1.jpg" alt="Member 1" class="testimonial-image">
              <blockquote>
                <p>"Joining this community has been a game-changer for my urban garden. The advice and support are incredible!"</p>
                <cite>- Alex, Urban Gardener</cite>
              </blockquote>
            </div>
            <div class="testimonial">
              <img src="member2.jpg" alt="Member 2" class="testimonial-image">
              <blockquote>
                <p>"The workshops and events have helped me refine my gardening techniques and grow healthier plants."</p>
                <cite>- Jamie, Sustainable Living Advocate</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    `,
    contact: `
      <section id="contact" class="section">
        <div class="container">
          <h2>Contact Us</h2>
          <p>Have questions or want to get involved? Reach out to us!</p>
          <form action="/submit-form" method="post">
            <input type="text" placeholder="Your Name" required aria-label="Your Name">
            <input type="email" placeholder="Your Email" required aria-label="Your Email">
            <textarea placeholder="Your Message" required aria-label="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    `
  };

  // Load content based on clicked nav item
  const navLinks = navbar.getElementsByTagName('a');
  for (let link of navLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      content.innerHTML = sections[section];

      // Update active class
      document.querySelector('#navbar a.active')?.classList.remove('active');
      this.classList.add('active');

      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navbar.classList.remove('active');
      }
    });
  }

  // Load home content by default
  content.innerHTML = sections.home;
  navLinks[0].classList.add('active');

  // Handle link clicks within "How It Works" section
  const workLinks = document.querySelectorAll('.work-link a');
  workLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const href = link.getAttribute('href');

      // Open the link in a new tab
      window.open(href, '_blank');
    });
  });
});