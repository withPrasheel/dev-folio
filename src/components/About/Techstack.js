import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { PiFileSql } from "react-icons/pi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiAngularSimple
} from "react-icons/di";
import {
  SiExpress,
  SiJunit5,
  SiAngular,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiVisualstudiocode,
  SiSpringboot,
  SiPostman,
  SiDocker,
  SiGit,
  SiGithub,
  SiJenkins,
  SiJira,
  SiAmazonaws,
  SiUnity,
  SiMicrosoftazure,
  SiGitlab,
  SiEclipseide,
  SiApachenetbeanside,
  SiPycharm,
  SiMysql,
  SiCucumber,
  SiSelenium
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <>
    <Row style={{ justifyContent: "center" }}>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <div className="tech-icon">
          <DiJava />
          <span className="tech-name">Java</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure Artifacts">
        <div className="tech-icon">
          <DiJavascript1 />
          <span className="tech-name">Javascript</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <div className="tech-icon">
          <CgCPlusPlus />
          <span className="tech-name">C++</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jenkins">
        <div className="tech-icon">
          <DiPython />
          <span className="tech-name">Python</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <div className="tech-icon">
        <PiFileSql />
          <span className="tech-name">SQL</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiSpringboot />
          <span className="tech-name">Spring Boot</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <div className="tech-icon">
          <DiAngularSimple />
          <span className="tech-name">Angular</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <div className="tech-icon">
          <DiReact />
          <span className="tech-name">React</span>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Jira">
        <div className="tech-icon">
          <DiNodejs />
          <span className="tech-name">Nodejs</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <div className="tech-icon">
          <SiExpress />
          <span className="tech-name">Express.js</span>
        </div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiMysql />
          <span className="tech-name">MySql</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <DiMongodb />
          <span className="tech-name">MongoDb</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiPostgresql />
          <span className="tech-name">PostgreSQL</span>
        </div>
      </Col>
      
    </Row>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiCucumber />
          <span className="tech-name">Cucumber</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiSelenium />
          <span className="tech-name">Selenium</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiJunit5 />
          <span className="tech-name">Junit</span>
        </div>
      </Col>
    </Row>
    </>
  );
}

export default Techstack;
