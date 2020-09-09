import React from 'react';
import NavBar from '../../NavBar/Navbar';
import Footer from '../../Footer/Footer';
import './Home.css';

function Home() {
    return (
        <div>
            <NavBar/>

            {/* Self intro bar */}
            <div class="content">
                Self intro
            </div>

            {/* Bar for resume / projects */}
            <div class="content">
                <div class="row">
                    <div class="column">
                        Projects
                    </div>
                    <div class="column">
                        Blog
                    </div>
                    <div class="column">
                        Links
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default Home;