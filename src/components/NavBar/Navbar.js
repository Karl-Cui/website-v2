import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function NavBar() {
    return (
       <div class="navbar">
           <div class="navbar-div">

                <div class="logo-wrapper">
                    <Link exact to="/" style={{textDecoration: 'none'}}>
                        <div class="logo">karl cui</div>
                    </Link>
                </div>

                {/* To fill up 3 middle columns... I really should implement this a different way */}
                <div/>
                <div/>
                <div/>

                <Link exact to="/projects" style={{textDecoration: 'none'}}>
                    <div class="link">projects</div>
                </Link>

                <Link exact to="/blog" style={{textDecoration: 'none'}}>
                    <div class="link">blog</div>
                </Link>

                <Link exact to="/contact" style={{textDecoration: 'none'}}>
                    <div class="link">contact</div>
                </Link>

           </div>
       </div>
    );
}

export default NavBar;