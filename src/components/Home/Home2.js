import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import {BsMedium} from 'react-icons/bs'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              
              <br />
              <br />I can communicate with computers in
              <i>
                <b className="purple"> Java, Python, C++ and javascript mainly. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Software Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing products across the 
              <i>
                <b className="purple"> Full stack.</b>
              </i> 
              <br />
                On the <b className="purple">backend</b>, I work with technologies like 
              <i>
                <b className="purple"> Spring, Spring Boot, Node.js, and Express.js. </b>
              </i>
              <br />
              On the <b className="purple">frontend</b>, I utilize modern JavaScript libraries and frameworks like 
              <i>
                <b className="purple"> Angular and React. </b>
              </i> 
              <br />
              Additionally, I have experience working with <b className="purple">databases</b> such as 
              <i>
                <b className="purple"> MySQL and MongoDB.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/withPrasheel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/withprasheel/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsMedium />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Prasheel_code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
