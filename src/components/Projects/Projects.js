import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bounce from "../../Assets/Projects/bounce-game.png";
import careChat from "../../Assets/Projects/care-chat.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import apka from "../../Assets/Projects/apka.png";
import effortLogger from "../../Assets/Projects/effort-logger.png";
import usVisaSlotFinder from "../../Assets/Projects/slot-finder.png";
import chipDesign from "../../Assets/Projects/chip-design.png";
import pathRobot from "../../Assets/Projects/path-robot.png";


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
              imgPath={careChat}
              isBlog={false}
              title="Care Chat"
              TechStack="React, Node.js, Express.js, MySQL, OPENAI Api, JWT"
              description="Developed a full-stack real-time conversational chatbot with React (frontend), Express-Node.js (backend), and
MySQL (database), integrating with OpenAI LLM API. Implemented JWT token authentication for secure login and data transactions and utilized Gmail SMTP for sending
verification links, ensuring reliable conversation history storage in MySQL."
              ghLink="https://github.com/withPrasheel/chatbot-project"
              demoLink="https://www.youtube.com/watch?v=iBw9Sy5kY8I"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Web Portfolio"
              TechStack="React,Node.js,HTML,CSS,JavaScript"
              description="Developed a responsive web portfolio using React, Node.js, HTML, CSS, and JavaScript, showcasing my projects, skills, and experience. Utilized React-Bootstrap for a clean, modern design and deployed the site on Vercel for easy access."
              ghLink="https://github.com/withPrasheel/dev-folio"
              demoLink="https://prasheel.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apka}
              isBlog={false}
              title="APKA Language"
              TechStack="Python, Prolog"
              description="Developed a new programming language ”APKA” with Prolog (parser/evaluator) and Python (lexer), supporting
imperative constructs and custom syntax. Implemented a grammar-based interpreter to execute APKA programs. Led a team effort in building an interpreter pipeline from lexer to evaluator, demonstrating strong collaboration and
technical skills in software development"
              ghLink="https://github.com/withPrasheel/APKA-Language"
              demoLink="https://github.com/withPrasheel/APKA-Language"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={effortLogger}
              isBlog={false}
              title="Effort Logger"
              TechStack="Java, JavaFX"
              description="Led a team of 3 in creating a scalable effort logging system, enhancing statistical effort estimation for cost reduction. Implemented Java and JavaFX frameworks for authentication, registration, encryption and decryption of sensitive
data, while designing a user-friendly interface for seamless navigation and interaction."
              ghLink="https://github.com/withPrasheel/Effort-Logger"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usVisaSlotFinder}
              isBlog={false}
              title="US Visa Slot Finder"
              TechStack="Bash, Java, Maven"
              description="Created a monitoring script in Java, Bash and Maven to check checkvisaslots.com at a 1-minute polling rate,
generating an alert upon detecting preferred visa slot availability."
              ghLink="https://github.com/withPrasheel/USVisaSlotChecker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bounce}
              isBlog={false}
              title="Bounce Game"
              TechStack="React"
              description="Built a 2D game using Unity Enginer and C# where the player has to bounce the ball and deployed on itch.io"
              ghLink="https://github.com/withPrasheel/2D-test-project"
              demoLink="https://zetox1x.itch.io/bounce-game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathRobot}
              isBlog={false}
              TechStack="Python, Raspberry Pi"
              title="Path Detecting Wireless Landmine Detector"
              description="Designed and Implemented a working model of Path detecting robot that takes top view images of the area and guides
the robot to a given destination in real-time using A-star and wireless mine detector with video streaming and GPS
tracker using Raspberry PI using Python that helped us to make an UGV with a range of 600 meters with wifi
booster and A-star Algorithm that helped us to reduce the time taken to determine the shortest path compared
to other computation methods."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chipDesign}
              isBlog={false}
              title="Low Power 6T-SRAM Using FINFET for AI Chips"
              TechStack="Cadence Virtuoso,  Analog Chip Design"
              description="Designed a low power full working memory (Read and Write) SRAM with 18nm Fin-FET using 56 ps delay and
658.58 uW Peak Power while simulation on Cadence Virtuoso."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
