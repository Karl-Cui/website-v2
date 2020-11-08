import React from 'react';
import Markdown from 'react-markdown';
import NavBar from '../../NavBar/Navbar';
import '../page.css';

// blog posts
import foobar from './posts/foobar.js';


function Blog() {

    return (
        <div>
            <NavBar/>

            <div class="content">
                <Markdown source={foobar}/>
            </div>
        </div>
    );
}

export default Blog;