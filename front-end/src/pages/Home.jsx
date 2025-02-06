import React from 'react';
import '../stylesheets/Home.css';
import '../stylesheets/Navbar.css'
import '../stylesheets/Footer.css'
import Slider from '../Components/Slider.jsx'

const Home = () => {
  return (
    <>
    <div>
      <section className="hero_deals">
      </section>
      <section className="hero_text">
        <h2>GOOD DEALS ALL YEAR LONG</h2>
        <h4>GET THE BAG OF YOUR DREAMS</h4>
      </section>
      <Slider />
    <div className="fruitbag">
        <img src="images/fruitbag.jpg" alt="Bag in fruits" />
        <div className="story">
          <h3>Our Story</h3>
          <p>
            Jennifer Spade was founded in 1995 by Jennifer Guzman, a young artisan from Nice, who moved to Paris with a passion for fine craftsmanship. In a small workshop on Rue de Turenne, Jennifer began creating luxurious leather handbags that combined timeless Parisian style with modern design. Her attention to detail and dedication to quality quickly gained the brand a loyal following, and soon Jennifer Spade became known for its understated yet sophisticated bags. As the brand grew, it remained committed to craftsmanship and sustainability, becoming a symbol of French luxury. Today, Jennifer Spade continues to create iconic, handcrafted handbags, preserving the legacy of Jennifer's vision for timeless elegance.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;