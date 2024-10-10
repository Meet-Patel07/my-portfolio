import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/flipcart e-commcer.png";
import mkstore from "../../Assets/Projects/mkstore.png";
import entertainment from "../../Assets/Projects/entertainment.png";
import jane from "../../Assets/Projects/jane-bussines_ideas.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce"
              description="This is Flipkart Clone E-Commerce Website using languges like HTML, CSS, Bootstrap, JavaScript, React.js, Material-UI, Redux and Firebase"
              ghLink="https://github.com/Meet-Patel07/clone"
              demoLink="https://clone07ecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mkstore}
              isBlog={false}
              title="M K Store"
              description="This is M K Store E-Commerce Website using languges like HTML, CSS, Bootstrap and JavaScript"
              ghLink="https://github.com/Meet-Patel07/-ecommerce"
              demoLink="https://mkstore-js.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={entertainment}
              isBlog={false}
              title="CYBORG Entertainment"
              description="This is CYBORG Entertainment Gaming Website using languges like HTML, CSS, Bootstrap and JavaScript"
              ghLink="https://github.com/Meet-Patel07/cyborg-gaming_entertainment"
              demoLink="https://gamingentertainment.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jane}
              isBlog={false}
              title="Jane - Business Ideas"
              description="This is Jane - Business Ideas Website using languges like HTML, CSS, Tailwind.css"
              ghLink="https://github.com/Meet-Patel07/jane-business_ideas-tailwind.css"
              demoLink="https://jane-bussinessideas.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
