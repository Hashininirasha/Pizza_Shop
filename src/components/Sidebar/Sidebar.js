import React from 'react'
import { FaTimes } from 'react-icons/fa';
import '../../shared/shared.css';
import './sidebar.css';

export const Sidebar = () => {
    
    const [isOpen, setIsOpen] = React.useState(false);

    const iconOpenStyle = {
        opacity: '100',
    }

    const iconCloseStyle = {
        opacity: '0'
    }

    const sidebarOpenStyle = {
        opacity: '100%',
        top: '0',
    }

    const sidebarCloseStyle = {
        opacity: '0',
        top: '-100%'
    }

    // console.log("isOpen: " + isOpen);

    return (
        <div className="sidebar-container">
            <div className="sidebar-icon" onClick={() => setIsOpen(!isOpen)}
            style={ isOpen ? iconOpenStyle : iconCloseStyle }>
                <FaTimes />
            </div>
            <div className="sidebar-menu"
            style={ isOpen ? sidebarOpenStyle : sidebarCloseStyle }>
                <p>Locations</p>
                <p>About Us</p>
                <p>Special Customer Offers</p>
                <p>Order Now</p>
            </div>
        </div>
    )
}
