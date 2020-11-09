import React from 'react';
import Markdown from 'react-markdown';
import NavBar from '../../NavBar/Navbar';
import {Link} from 'react-router-dom';
import './Blog.css';
import '../page.css';

// blog posts
import foobar from './posts/foobar.js';
import putnam from './posts/putnam.js';


class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.posts = [foobar];
        this.state = {
            foobar_float: "left"
        };
    }

    // foobar referral
    foobar_move() {
        if (this.state.foobar_float == "left") {
            this.setState({ foobar_float: "right"});
        } else {
            this.setState({ foobar_float: "left"});
        }
    }

    foobar_referral(post) {
        if (post.id == "foobar") {
            return (
                <Link exact to="/foobar_referral" style={{textDecoration: 'none'}}>
                    <a 
                    style={{float: this.state.foobar_float}} 
                    onMouseOver={() => this.foobar_move()}

                    >Here.</a>
                </Link>
            )
        }
    }

    render() {
        // navigation sidebar
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

        // actual blog posts content
        const content = this.posts.map((post) =>
            <section id={post.id}>
                <div class="blogPost" key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.date}</p>
                    <Markdown source={post.content}/>

                    {/* a special something if the post is the Foobar Challenge... */}
                    {this.foobar_referral(post)}
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