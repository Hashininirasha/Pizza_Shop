import React from 'react';

export const CtaContainer = () => {
    return (
        <div className='cta-container'>
            <div className='cta-image'>
                <img src='./assets/images/cta-section/cta-party-order.svg' alt='cta-section'></img>
            </div>
            <div className='cta-content'>
                <p>Get a Party Order</p>
                <a href="#order-now">Order Now</a>
            </div>
        </div>
    )
}