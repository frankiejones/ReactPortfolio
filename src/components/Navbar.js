import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <h1>Frankie Jones</h1>
            <ul>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/employment">Employment</Link></li>
                <li><Link to = "/projects">Projects</Link></li>
                <li><Link to = "/contact">Contact</Link></li>
                <li><Link to = "/shop">Shop</Link></li>
                <li>Cart: <span>{props.basketNumbers}</span></li>
            </ul>
        </nav>
    )
};

export default Navbar;
