import React from 'react';
import '../shared/shared.css';
import { Hero2 } from '../components/hero-section/Hero2';
const About = () => {
  return (
    <main className="about">

<Hero2 />
<div className="container content">
 
     <p>
     Introducing Slice of Pizzeria! Established in 2023, Slice of Paradise Pizzeria aims to become Sri Lanka's go-to destination for delectable fusion pizzas and delightful cocktails. Inspired by the love for great food and a passion for creating a welcoming atmosphere, our pizzeria is the perfect spot to unwind and indulge in a culinary adventure.
     </p>

    <p>
    Located in prime areas across Sri Lanka, our restaurants in Colombo and Kandy invite you to savor our unique fusion pizzas that combine traditional Sri Lankan flavors with international ingredients. From tantalizing curried chicken pizzas to mouthwatering seafood specialties, our menu boasts a diverse range of options to cater to every palate.
    </p>
    <p>
    Join us at Slice of Pizzeria, where we invite you to embark on a pizza journey like no other. Discover the perfect blend of Sri Lankan culinary heritage and international flavors, all served with a side of warmth and hospitality. We can't wait to welcome you and share our passion for pizza with you!
    </p>
      </div>
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