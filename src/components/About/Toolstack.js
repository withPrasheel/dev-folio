import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
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
  SiPycharm
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="AWS">
        <div className="tech-icon">
          <SiAmazonaws />
          <span className="tech-name">AWS</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Azure Artifacts">
        <div className="tech-icon">
          <SiMicrosoftazure />
          <span className="tech-name">Azure</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <div className="tech-icon">
          <SiDocker />
          <span className="tech-name">Docker</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jenkins">
        <div className="tech-icon">
          <SiJenkins />
          <span className="tech-name">Jenkins</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <div className="tech-icon">
          <SiGit />
          <span className="tech-name">Git</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <div className="tech-icon">
          <SiGithub />
          <span className="tech-name">Github</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Github">
        <div className="tech-icon">
          <SiGitlab />
          <span className="tech-name">GitLabs</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <div className="tech-icon">
          <SiPostman />
          <span className="tech-name">Postman</span>
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons" title="Jira">
        <div className="tech-icon">
          <SiJira />
          <span className="tech-name">Jira</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <div className="tech-icon">
          <SiUnity />
          <span className="tech-name">Unity</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiVisualstudiocode />
          <span className="tech-name">VSCode</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiEclipseide />
          <span className="tech-name">Eclipse IDE</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiApachenetbeanside />
          <span className="tech-name">Apache Netbeans</span>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
        <div className="tech-icon">
          <SiPycharm />
          <span className="tech-name">Pycharm</span>
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
