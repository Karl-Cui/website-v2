import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class NavBar extends React.Component {

    render() {
        return (
            <div>
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
    
                            <div class="link-wrapper">
                                <Link exact to="/projects" style={{textDecoration: 'none'}}>
                                    <div class="link">projects</div>
                                </Link>
                            </div>
    
                            <div class="link-wrapper">
                                <Link exact to="/blog" style={{textDecoration: 'none'}}>
                                    <div class="link">blog</div>
                                </Link>
                            </div>
    
                            <div class="link-wrapper">
                                <Link exact to="/contact" style={{textDecoration: 'none'}}>
                                    <div class="link">contact</div>
                                </Link>
                            </div>
    
                    </div>
                </div>
    
                {/* Need this here since navbar is fixed */}
                <div class="navbar-space"/>
            </div>
        );

    } // end of render
    
}

export default NavBar;