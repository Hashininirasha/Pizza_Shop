import React from 'react';

import './hero.css';
import { HeroHeading } from './HeroHeading2';

export const Hero2 = () => {
    return (
        <section className="hero-section">
            <div className="hero-section-container">
               <HeroHeading/>
                <img
                    className="hero-section-image"
                    src='./assets/images/hero2.jpg' 
                    alt='pizza'    
                />
            </div>
        </section>
    )
}