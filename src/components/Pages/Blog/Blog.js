import React from 'react';
import Markdown from 'react-markdown';
import NavBar from '../../NavBar/Navbar';
import {Link} from 'react-router-dom';
import './Blog.css';
import '../page.css';

// blog posts
import foobar from './posts/foobar.js';

//
// TODO: scale images with screen size
//


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
        if (this.state.foobar_float === "left") {
            this.setState({ foobar_float: "right"});
        } else {
            this.setState({ foobar_float: "left"});
        }
    }

    foobar_referral(post) {
        if (post.id === "foobar") {
            return (
                <Link exact="true" to="/foobar_referral" style={{textDecoration: 'none'}}>
                    <p
                        style={{float: this.state.foobar_float}} 
                        onMouseOver={() => this.foobar_move()}
                    >Here.</p>
                </Link>
            )
        }
    }

    render() {
        // navigation sidebar
        const sidebar = (
            <ul>
                {this.posts.map((post) =>
                    <a href={"#" + post.id} key={post.id}>
                        <li key={post.id}>
                            {post.title_short}
                        </li>
                    </a>
                    
                )}
            </ul>
        );

        // actual blog posts content
        const content = this.posts.map((post) =>
            <section id={post.id} className="blogPost" key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.date}</p>
                <Markdown source={post.content}/>

                {/* a special something if the post is the Foobar Challenge... */}
                {this.foobar_referral(post)}
            </section>
        );

        return (
            <div>
                <NavBar/>

                <div className="content">
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