import React from 'react';
import NavBar from '../../NavBar/Navbar';
import './Projects.css';
import '../page.css';

import PlaceHolder from '../../../assets/project-icons/placeholder.png';
import ReconstructionIcon from '../../../assets/project-icons/2d3d_reconstruction.png';
import EaseIcon from '../../../assets/project-icons/ease.png'
import NeurostackIcon from '../../../assets/project-icons/neurostack.png';
import ShowtimeIcon from '../../../assets/project-icons/showtime.png';
import MindTypeIcon from '../../../assets/project-icons/mindtype.png';
import CreviceIcon from '../../../assets/project-icons/crevice.jpg';


function Projects() {
    return (
        <div>
            <NavBar/>

            <div class="content">
                <p>I am always exploring different fields of computer science and their intersection with other areas of science and engineering. Below are some of the cool projects that I have had the opportunity to work on.</p>
            </div>

            <div class="content">
                <h1 class="projects-section-title">In progress</h1>

                <div class="projects-grid">

                    {/* Pizza bot */}
                    <div class="project">
                        <img src={PlaceHolder} alt="Placeholder icon"/>

                        <div>
                            <h2>Piazza bot</h2>
                            {/* <h3>NLP, Selenium, Python</h3> */}
                            <p>Can we create a bot to automatically intervene when a student makes a post that's a duplicate of or similar to a question that has been answered already?</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="content">
                <h1 class="projects-section-title">Past Projects</h1>

                <div class="projects-grid">

                    {/* CSC420 2D to 3D reconstruction */}
                    <a href="https://github.com/Karl-Cui/2dto3dreconstruction" target="_blank" rel="noopener noreferrer">
                        <div class="project">
                            <img src={ReconstructionIcon} alt="2D to 3D reconstruction icon"/>

                            <div>
                                <h2>2D to 3D Reconstruction</h2>
                                {/* <h3>PyTorch, CAD models, OpenCV, Python</h3> */}
                                <p>We had to do a project for a course, but what we ended up making is much more than just a course project.</p>
                                <p>We created 3D CAD models from 2D images using a mix of machine learning with PyTorch, 3D point cloud registration, and meshing algorithms.</p>
                            </div>
                        </div>
                    </a>

                    {/* AI Eat Green / Ease*/}
                    <a href="https://github.com/Karl-Cui/ai-eat-green" target="_blank" rel="noopener noreferrer">
                        <div class="project">
                            <img src={EaseIcon} alt="Ease icon"/>

                            <div>
                                <h2>Ease</h2>
                                {/* <h3>Microsoft Azure, Angular, Ionic, TypeScript</h3> */}
                                <p>Android and iOS app that uses a recommendation system on Azure to promote healthy eating!</p>
                            </div>
                        </div>
                    </a>

                    {/* Neurostack */}
                    <a href="https://neurotechuoft.com/neurostack" target="_blank" rel="noopener noreferrer">
                        <div class="project">
                            <img src={NeurostackIcon} alt="Neurostack icon"/>

                            <div>
                                <h2>Neurostack</h2>
                                {/* <h3>Google Cloud Platform, signal processing, SocketIO, Flask, Python</h3> */}
                                <p>Streaming brain waves to machine learning services, made easy.</p>
                                <p>In my time as team lead, we created an open-source EEG signal-processing API and research and deployed several different microservices onto Google Cloud.</p>
                            </div>
                        </div>
                    </a>

                    {/* Showtime */}
                    <a href="https://github.com/Karl-Cui/show-time" target="_blank" rel="noopener noreferrer">
                        <div class="project">
                            <img src={ShowtimeIcon} alt="Showtime icon"/>

                            <div>
                                <h2>Showtime</h2>
                                
                                {/* <h3>MongoDB, Express, Angular, NodeJS, TypeScript</h3> */}
                                <p>Web app for rating and commenting on TV shows and making watchlists using the MEAN (MongoDB, Express, Angular, NodeJS) stack!</p>
                            </div>
                        </div>
                    </a>

                    {/* MindType */}
                    <a href="https://github.com/neurotechuoft/MindType" target="_blank" rel="noopener noreferrer">
                        <div class="project">
                            <img src={MindTypeIcon} alt="MindType icon"/>

                            <div>
                                <h2>MindType</h2>
                                {/* <h3>Python, Cython</h3> */}
                                <p>"How cool would it be to type without a keyboard?" "Pretty cool."</p>
                                <p>So we made a mind-controlled keyboard. To determine which key the user wants to type, we flash keys on a keyboard and see which ones correspond to a P300 signal.</p>
                            </div>
                        </div>
                    </a>

                    {/* Crevice */}
                    <a href="https://docs.google.com/document/d/1Rtq9fXhKK6gDF01ya7LV6snOQ9hyHz0_DZLcvBMUq2o/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div class="project">
                            <img src={CreviceIcon} alt="Crevice icon"/>

                            <div>
                                <h2>Crevice</h2>
                                {/* <h3>C#, Unity</h3> */}
                                <p>Which design patterns are effective in educational video games?</p>
                                <p>To try to answer this, I helped professor Steve Engels design an educational video with Unity that aims to teach high school students the intuition behind a branch of physics, optics.</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default Projects;