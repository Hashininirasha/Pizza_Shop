import React from 'react';
import './footerSection.css';

export const FooterContainer = () => {
    return (
        <div>
            <p className='footer-logo'>Pizzeria</p>
            <div className='footer-grid'>
                <div className='footer-column'>
                    <p className='footer-column--header'>Company</p>
                    <p>Blog</p>
                    <p>Investor</p>
                    <p>Feedback</p>
                    <p>Ads</p>
                </div>
                <div className='footer-column'>
                    <p className='footer-column--header'>About</p>
                    <p>Gift Card</p>
                    <p>Card Balance Enquiry</p>
                    <p>FAQ</p>
                </div>
                <div className='footer-column'>
                    <p className='footer-column--header'>Legal</p>
                    <p>Disclaimer</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='footer-column'>
                    <p className='footer-column--header'>Social Media</p>
                    <div className='social-media-icons'>
                    <div>
                        <img
                            className='footer-icons' 
                            src='./assets/images/footer-section/facebook-icon.svg'
                            alt='facebook-icon'
                        />
                    </div>

                    <div>
                        <img
                            className='footer-icons' 
                            src='./assets/images/footer-section/twitter-icon.svg'
                            alt='twitter-icon'
                        />
                    </div>

                    <div>
                        <img
                            className='footer-icons' 
                            src='./assets/images/footer-section/insta-icon.svg'
                            alt='insta-icon'
                        />
                    </div>

                    <div>
                        <img
                            className='footer-icons' 
                            src='./assets/images/footer-section/youtube-icon.svg'
                            alt='youtube-icon'
                        />
                    </div>
                </div>
            </div>
                    </div>
            <p className='copyright'>All Rights Reserved. Copyright © Pizzeria Foods Ltd</p>
    </div>
    )
}