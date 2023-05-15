import React from 'react';
import { HeroHeading } from './HeroHeading';
import './hero.css';

export const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-section-container">
                <HeroHeading />
                <img
                    className="hero-section-image"
                    src='./assets/images/hero-pizza.jpg' 
                    alt='pizza'    
                />
            </div>
        </section>
    )
}