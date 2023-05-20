import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/laravel.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import pokemon from "../assets/img/pokemon.jpeg";
import IP from "../assets/img/IP.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Pokemon project",
      description: "Creating a Pokemon mobile application with React Native.",
      imgUrl: pokemon,
      githubLink: "https://github.com/your-github-repo1"
    },
    {
      title: "PFA project",
      description: "la securisation de la voix sur IP with JAVA",
      imgUrl: IP,
      githubLink: "https://github.com/your-github-repo2"
    },
    {
      title: "Rooms and Machines Management Project",
      description: "Creating a web application with Laravel that involves managing rooms and machines.",
      imgUrl: projImg3,
      githubLink: "https://github.com/your-github-repo3"
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                githubLink={project.githubLink}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background Image"></img>
    </section>
  )
}
