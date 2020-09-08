import React from 'react';
import construction from '../../../assets/under_construction.jpg';
import './UnderConstruction.css';

function UnderConstruction() {
    return (
        <div>
            <header class="construction">
                <p>This page is currently under construction!</p>

                <img class="construction-img" src={construction} alt="construction"/>

                <p>Karl is hard at work building and revising the site.</p>
            </header>            
        </div>
    );
}

export default UnderConstruction;