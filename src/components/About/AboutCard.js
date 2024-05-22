import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prasheel Nandwana </span>
            and I am currently located in <span className="purple"> Tempe, Arizona.</span>
            <br />
            I have 2.5 years of experience working as a Full Stack Software Engineer working with experience designing microservices architecture using optimal design pattern.
            <br />
            I am currently pursuing a Master of Science in Software Engineering at Arizona State University, focusing on advanced data structures, software validation, and mobile systems, maintaining a perfect 4.0 GPA.
            <br />
            {/* I have completed my Bachelors in Engineering from PES University. */}
            <br />
            <br />
            
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            'No' doesnt mean 'never', it just means 'not yet'{" "}
          </p>
          <footer className="blockquote-footer">My moto in life</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
