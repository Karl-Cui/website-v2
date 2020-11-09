import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="navbar-div">
    
                            <div className="logo-wrapper">
                                <Link exact="true" to="/" style={{textDecoration: 'none'}}>
                                    <div className="logo">karl cui</div>
                                </Link>
                            </div>
    
                            {/* To fill up 3 middle columns... I really should implement this a different way */}
                            <div/>
                            <div/>
                            <div/>
    
                            <div className="link-wrapper">
                                <Link exact="true" to="/projects" style={{textDecoration: 'none'}}>
                                    <div className="link">projects</div>
                                </Link>
                            </div>
    
                            <div className="link-wrapper">
                                <Link exact="true" to="/blog" style={{textDecoration: 'none'}}>
                                    <div className="link">blog</div>
                                </Link>
                            </div>
    
                            <div className="link-wrapper">
                                <Link exact="true" to="/contact" style={{textDecoration: 'none'}}>
                                    <div className="link">contact</div>
                                </Link>
                            </div>
    
                    </div>
                </div>
    
                {/* Need this here since navbar is fixed */}
                <div className="navbar-space"/>
            </div>
        );

    } // end of render
    
}

export default NavBar;