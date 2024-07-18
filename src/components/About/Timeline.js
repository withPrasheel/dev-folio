import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Timeline.css'; // Make sure to create a Timeline.css file

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item left">
          <Card className="timeline-card education-card">
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                Bachelor of Science in Computer Science
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="timeline-line"></div>
        <div className="timeline-item right">
          <Card className="timeline-card experience-card">
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                Software Engineer at XYZ Company
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
