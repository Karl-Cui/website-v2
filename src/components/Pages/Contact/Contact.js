import React from 'react';
import NavBar from '../../NavBar/Navbar';
import './Contact.css';
import '../page.css';

import GitHubLogo from '../../../assets/logos/github.png';
import LinkedInLogo from '../../../assets/logos/linkedin.png';
import LichessLogo from '../../../assets/logos/lichess.png';

class Contact extends React.Component {
    
    render() {
        return (
            <div>
                <NavBar/>
    
                <div class="content">
                    <p>My email is: <strong>karl.cui@mail.utoronto.ca</strong></p>
                    
                    <p>I can be found at any of these links. Drop me a message about anything and I will (probably) respond.</p>
                </div>
    
                <div class="content">
                    <div class="logo-grid">
    
                        <div class="logo-card">
                            <a href="https://github.com/Karl-Cui" target="_blank" rel="noopener noreferrer"><img src={GitHubLogo} alt="GitHub"/></a>
                        </div>
    
                        <div class="logo-card">
                            <a href="https://www.linkedin.com/in/karl-cui/" target="_blank" rel="noopener noreferrer"><img src={LinkedInLogo} alt="LinkedIn"/></a>
                        </div>
    
                        <div class="logo-card">
                            <a href="https://lichess.org/@/pattrik" target="_blank" rel="noopener noreferrer"><img src={LichessLogo} alt="Lichess"/></a>
                        </div>
    
                    </div>
                </div>
            </div>
        );

    } // end of render
    
}

export default Contact;