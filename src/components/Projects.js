import {Container, Row, Col,Tab} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { ProjectsCard } from './ProjectsCard';
import colorsharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Projects = () => {
    const projects = [
        {
            title: "Meet App",
            description: "The goal of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.",
            imgUrl : projImg1,
        },
        {
            title: "Movie app UI",
            description: "MovieApp UI is the client-side code for a movie application called MovieApp.Built with React, it interfaces with an existing RESTful API.It is a responsive single page application (SPA), consists of several interface views with routing and navigation",
            imgUrl : projImg2,
        },
        {
            title: "Movie API",
            description: "The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.",
            imgUrl : projImg3,
        },
        {
            title: "Pokemon app",
            description: "Pokémon app created with vanilla JavaScript and styled with CSS. This simple app loads data from an external API, displays each object and shows further detailsbin a modal. Pokémon’s can be searched by name of the Pokémon",
            imgUrl : projImg1,
        }, {
            title: "Portfolio Website",
            description: "The portfolio website of Priyanka Bangalore Nagaraja describes the progress,interests, skill, views and passion.",
            imgUrl : projImg1,
        }, {
            title: "Todo list app",
            description: "Within this project, I was responsible for the frontend. It’s written in React.js. Additionally, I've created the HTML and CSS templates.",
            imgUrl : projImg1,
        }, {
            title: "Business Profile Card",
            description: "I was responsible for the frontend. It’s written in React.js. Additionally, I've created the HTML and CSS templates.",
            imgUrl : projImg1,
        }, {
            title: "Online Restaurant Management System",
            description: "I accomplished a course “Front-End Web UI Frameworks and Tools:Bootstrap 4” from Coursera and developed this website.I was responsible for the frontend. It’s written in Bootstrap 4,Html and Css.",
            imgUrl : projImg1,
        }, {
            title: "Meet App",
            description: "The goal of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.",
            imgUrl : projImg1,
        }, {
            title: "Meet App",
            description: "The goal of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.",
            imgUrl : projImg1,
        },


    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills"  className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) => {
                                            return (
                                               <ProjectsCard key={index}
                                               {...project}/>
                                            )
                                        })
                                    }
                                </Row>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>

                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorsharp2}></img>
        </section>
    )
}