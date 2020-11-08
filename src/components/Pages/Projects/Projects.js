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


class Projects extends React.Component {

    constructor(props) {
        super(props);

        // all current projects
        this.current_projects = [
            {
                title: "Piazza Bot",
                description: [
                    "Can we create a bot to automatically intervene when a student makes a post that's a duplicate of or similar to a question that has been answered already?"
                ],
                img: PlaceHolder,
            }
        ]

        // all past projects
        this.past_projects = [
            {
                title: "2D to 3D Reconstruction",
                url: "https://github.com/Karl-Cui/2dto3dreconstruction",
                description: [
                    "We had to do a project for a course, but what we ended up making is much more than just a course project.", 
                    "We created 3D CAD models from 2D images using a mix of machine learning with PyTorch, 3D point cloud registration, and meshing algorithms."
                ],
                img: ReconstructionIcon,
            },
            {
                title: "Ease",
                url: "https://github.com/Karl-Cui/ai-eat-green",
                description: [
                    "Android and iOS app that uses a recommendation system on Azure to promote healthy eating!"
                ],
                img: EaseIcon,
            },
            {
                title: "Neurostack",
                url: "https://neurotechuoft.com/neurostack",
                description: [
                    "Streaming brain waves to machine learning services, made easy.",
                    "In my time as team lead, we created an open-source EEG signal-processing API and research and deployed several different microservices onto Google Cloud."
                ],
                img: NeurostackIcon,
            },
            {
                title: "Showtime",
                url: "https://github.com/Karl-Cui/show-time",
                description: [
                    "Web app for rating and commenting on TV shows and making watchlists using the MEAN (MongoDB, Express, Angular, NodeJS) stack!"
                ],
                img: ShowtimeIcon,
            },
            {
                title: "MindType",
                url: "https://github.com/neurotechuoft/MindType",
                description: [
                    '"How cool would it be to type without a keyboard?" "Pretty cool."',
                    "So we made a mind-controlled keyboard. To determine which key the user wants to type, we flash keys on a keyboard and see which ones correspond to a P300 signal."
                ],
                img: MindTypeIcon,
            },
            {
                title: "Crevice",
                url: "https://docs.google.com/document/d/1Rtq9fXhKK6gDF01ya7LV6snOQ9hyHz0_DZLcvBMUq2o/edit?usp=sharing",
                description: [
                    "Which design patterns are effective in educational video games?",
                    "To try to answer this, I helped professor Steve Engels design an educational video with Unity that aims to teach high school students the intuition behind a branch of physics, optics."
                ],
                img: CreviceIcon,
            }
        ]
    }
    
    render() {
        const listParagraphs = (paras) => 
            paras.map((para) => 
                <p>{para}</p>
            );

        // display each project
        const listProjects = (projects) => 
            projects.map((project) => 
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <div class="project">
                        <img src={project.img} alt={project.title + " icon"}/>
                        <div>
                            <h2>{project.title}</h2>
                            {listParagraphs(project.description)}
                        </div>
                    </div>
                </a>
            );

        return (
            <div>
                <NavBar/>
    
                <div class="content">
                    <p>I am always exploring different fields of computer science and their intersection with other areas of science and engineering. Below are some of the cool projects that I have had the opportunity to work on.</p>
                </div>
    
                <div class="content">
                    <h1 class="projects-section-title">In progress</h1>
    
                    <div class="projects-grid">
                        {listProjects(this.current_projects)}
                    </div>
                </div>
    
                <div class="content">
                    <h1 class="projects-section-title">Past Projects</h1>
    
                    <div class="projects-grid">
                        {listProjects(this.past_projects)}
                    </div>
                </div>
            </div>
        );

    } // end of render
}

export default Projects;