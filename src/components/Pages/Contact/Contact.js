import React from 'react';
import NavBar from '../../NavBar/Navbar';
import './Contact.css';
import '../page.css';

import GitHubLogo from '../../../assets/logos/github.png';
import LinkedInLogo from '../../../assets/logos/linkedin.png';
import LichessLogo from '../../../assets/logos/lichess.png';

class Contact extends React.Component {   

    constructor(props) {
        super(props);
        this.logos = [
            {url: "https://github.com/Karl-Cui", img: GitHubLogo, alt: "GitHub icon"},
            {url: "https://www.linkedin.com/in/karl-cui/", img: LinkedInLogo, alt: "LinkedIn icon"},
            {url: "https://lichess.org/@/pattrik", img: LichessLogo, alt: "Lichess icon"}
        ];

    }

    render() {
        const listLogos = this.logos.map((logo) =>  
            <div class="logo-card">
                <a href={logo.url} target="_blank" rel="noopener noreferrer"><img src={logo.img} alt={logo.alt}/></a>
            </div>
        ); 

        return (
            <div>
                <NavBar/>
    
                <div class="content">
                    <p>My email is: <strong>karl.cui@mail.utoronto.ca</strong></p>
                    
                    <p>I can be found at any of these links. Drop me a message about anything and I will (probably) respond.</p>
                </div>
    
                <div class="content">
                    <div class="logo-grid">
    
                        {listLogos}
    
                    </div>
                </div>
            </div>
        );

    } // end of render
    
}

export default Contact;