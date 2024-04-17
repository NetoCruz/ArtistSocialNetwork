import './navbar.css'
import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <h1>SocialArtist</h1>
            <div className="links">
                <a href="/">Artists</a>
                <a href="/">All cities</a>
                <a href="/">Pricing</a>
                <a href="/">Sign Up</a>
                <a href="/">Login</a>
            </div>
        </div>
    );
}

export default Navbar