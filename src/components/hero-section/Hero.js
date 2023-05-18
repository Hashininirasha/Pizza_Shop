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
                    src="https://thelionsroarmhsn.com/wp-content/uploads/2015/04/Pepperoni_1.jpg"
                    alt='pizza'    
                />
                {/* <div style={{backgroundImage: URL("https://thelionsroarmhsn.com/wp-content/uploads/2015/04/Pepperoni_1.jpg")}}></div> */}
            </div>
        </section>
    )
}