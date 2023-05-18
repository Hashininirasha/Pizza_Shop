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
                    src='https://th.bing.com/th/id/OIP.VXaWx5npfzjt9yD9_UQLzQHaE8?pid=ImgDet&rs=1' 
                    alt='pizza'    
                />
            </div>
        </section>
    )
}