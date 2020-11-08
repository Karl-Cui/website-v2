import React from 'react';
import Markdown from 'react-markdown';
import NavBar from '../../NavBar/Navbar';
import './Blog.css';
import '../page.css';

// blog posts
import foobar from './posts/foobar.js';
import putnam from './posts/putnam.js';


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.posts = [foobar, putnam]
    }

    render() {
        const sidebar = (
            <ul>
                {this.posts.map((post) =>
                    <a href={"#" + post.id}>
                        <li key={post.id}>
                            {post.title_short}
                        </li>
                    </a>
                    
                )}
            </ul>
        );

        const content = this.posts.map((post) =>
            <section id={post.id}>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <Markdown source={post.content}/>
                </div>
            </section>
        );

        return (
            <div>
                <NavBar/>

                <div class="content">
                    <div id="sidebar">
                        {sidebar}
                    </div>
                    <div id="blogPosts">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;