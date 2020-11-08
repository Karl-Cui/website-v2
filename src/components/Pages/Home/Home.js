import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from '../../NavBar/Navbar';
import './Home.css';
import '../page.css';

class Home extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
    
                {/* Self intro */}
                <div class="content">
                    <p>Hello.</p>
                    <p>I am a Canadian software engineer with an odd sense of humor who likes to build cool things. I am an avid fan of short scary stories, a casual good-but-not-amazing gamer, a tormented perfectionist, and a coffee and chess addict.</p>
                    <p>Welcome to my site.</p>
                </div>
    
                {/* Content is split into 3 sections */}
                <div class="content">
                    <div class="content-split">
    
                        {/* Projects that I am working on, link to resume, portfolio stuffs */}
                        <Link exact to="/projects">
                            <div class="column">
                                <h1>Projects</h1>
                                My resume, and some of the cool projects I worked on.
                            </div>
                        </Link>
    
                        {/* My blog */}
                        <Link exact to="/blog">
                            <div class="column">
                                <h1>Blog</h1>
                                My personal blog where I muse about anything and everything.
                            </div>
                        </Link>
    
                        {/* Links and Contact */}
                        <Link exact to="/contact">
                            <div class="column">
                                <h1>Contact</h1>
                                My direct contact and links to find me online.
                            </div>
                        </Link>
    
                    </div>
                </div>
    
            </div>
        );
        
    } // end of render

}

export default Home;