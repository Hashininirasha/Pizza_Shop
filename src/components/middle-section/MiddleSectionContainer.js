import React from 'react';
import './middleSection.css'

export const MiddleSectionContainer = () => {
    return (
        <div className='middle-section-container'>
            <h1 className='middle-section-heading'>Try Our Most Loved Dishes</h1>
            <div className="middle-section-image-block">
                <img
                    className='pizza-image'
                    src='./assets/images/middle-section-images/paneer-barbeque.png'
                    alt='paneer-barbeque'
                />
                <p className='pizza-name'>Paneer Barbeque</p>
            </div>
            <div className='middle-section-image-block'>
                <img
                    className='pizza-image'
                    src='./assets/images/middle-section-images/mexican-loaded.png'
                    alt='mexican-loaded'
                />
                <p className='pizza-name'>Mexican Loaded</p>
            </div>
            <div className='middle-section-image-block'>
                <img
                    className='pizza-image'
                    src='./assets/images/middle-section-images/fresh-cheese-veggie.png'
                    alt='fresh-cheese-veggie'
                />
                <p className='pizza-name'>Fresh Cheese Veggie</p>
            </div>
            <div className='middle-section-image-block'>
                <img
                    className='pizza-image'
                    src='./assets/images/middle-section-images/onion-cheese-crisp.png'
                    alt='onion-cheese-crisp'
                />
                <p className='pizza-name'>Onion Cheese Crisp</p>
            </div>
            <div className='middle-section-image-block'>
                <img
                    className='pizza-image'
                    src='./assets/images/middle-section-images/chicken-cheesy.png'
                    alt='chicken-cheesy'
                />
                <p className='pizza-name'>Chicken Cheesy</p>
            </div>
            <div className='middle-section-image-block'>
                <img
                    className='pizza-image'
                    src='./assets/images/middle-section-images/veg-delight.png'
                    alt='veg-delight'
                />
                <p className='pizza-name'>Veg Delight</p>
            </div>
        </div>
    )
}