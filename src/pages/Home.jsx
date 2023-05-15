import React from 'react';
import '../shared/shared.css';
import { Hero } from '../components/hero-section/Hero';

const Home = () => {
  return (
    <main>
  
      <Hero />
      <div className="container content">
      <p>
      Welcome to our pizza shop in Sri Lanka, where we offer delicious and authentic Italian-style pizzas made with fresh, high-quality ingredients. Our menu features a wide variety of toppings to suit all tastes, from classic Margherita and Pepperoni pizzas to more exotic options like Chicken Tikka and Seafood pizzas.
      </p>
      <p>
      Our pizzas are made to order using only the freshest ingredients, including locally sourced produce and imported Italian cheeses. We use a traditional wood-fired oven to bake our pizzas, giving them that perfect crispy crust and authentic flavor that you won't find anywhere else.
      </p>
      <p>
      Come and visit us today and discover why we're the best pizza shop in Sri Lanka!

      <div>
          
          
        </div>
      </p>
      </div>
    </main>
  )
}

export default Home