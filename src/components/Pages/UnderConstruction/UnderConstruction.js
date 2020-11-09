import React from 'react';
import construction from '../../../assets/under_construction.jpg';
import '../trollPage.css';

class UnderConstruction extends React.Component {

    render() {
        return (
            <div>
                <header class="page">
                    <p>This page is currently under construction!</p>

                    <img class="page-img" src={construction} alt="construction"/>

                    <p>Karl is hard at work revising the site.</p>
                </header>            
            </div>
        );
    }
    
}

export default UnderConstruction;