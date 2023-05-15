import React from 'react';
import '../shared/shared.css';
import { Hero2 } from '../components/hero-section/Hero2';
const About = () => {
  return (
    <main className="about">

<Hero2 />
      
      <div className="container content">
        <div className="row">
          <div className="col-lg-4">
            <h2>Why Choose Us.</h2>
            <p>We use only the freshest, locally sourced ingredients to make our pizzas, ensuring that each bite is packed with flavor and nutrition.</p>
          <p>Our pizzas are made using traditional Italian recipes and techniques, giving them an authentic flavor and texture that you won't find anywhere else.</p>
          </div>
          <div className="col-lg-4">
            <h2>Our Mission.</h2>
            <p>Our mission at our pizza shop is to provide our customers with the best possible dining experience by serving delicious, high-quality pizzas made with fresh ingredients and cooked to perfection. We strive to exceed our customers' expectations by offering a wide variety of toppings, sides, and beverages to suit all tastes and preferences.</p>
          </div>
          <div className="col-lg-4">
            <h2>What Aim.</h2>
            <p>We aim to create a welcoming and inclusive environment where everyone feels comfortable and valued. Our friendly and knowledgeable staff are always on hand to answer any questions and help our customers make informed choices.</p>
          <p>At our pizza shop, we are dedicated to providing a memorable dining experience that will keep our customers coming back for more.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About