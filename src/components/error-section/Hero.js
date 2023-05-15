import React from 'react';
import { ErrorHandling } from './ErrorHandling';
import './hero.css';

export const Errors = () => {
    return (
        <section className="hero-section">
            <div className="hero-section-container">
                <ErrorHandling />
                <img
                    className="hero-section-image"
                    src='./assets/images/404_pizza.jpg' 
                    alt='pizza'    
                />
            </div>
        </section>
    )
}