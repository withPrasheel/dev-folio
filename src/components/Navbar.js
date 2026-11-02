import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/pn-logo.png";
import Button from "react-bootstrap/Button";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

const SECTIONS = [
  { id: "home", label: "Home", Icon: AiOutlineHome },
  { id: "about", label: "About", Icon: AiOutlineUser },
  { id: "projects", label: "Projects", Icon: AiOutlineFundProjectionScreen },
  { id: "resume", label: "Resume", Icon: CgFileDocument },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, updateActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);

      const doc = document.documentElement;
      const atBottom =
        doc.scrollHeight > window.innerHeight + 1 &&
        window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      if (atBottom) {
        updateActiveSection(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      const marker = window.innerHeight / 3;
      let current = SECTIONS[0].id;
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= marker) {
          current = id;
        }
      });
      updateActiveSection(current);
    }

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex"
          onClick={() => updateExpanded(false)}
        >
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {SECTIONS.map(({ id, label, Icon }) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  active={activeSection === id}
                  onClick={() => updateExpanded(false)}
                >
                  <Icon style={{ marginBottom: "2px" }} /> {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/withPrasheel"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
