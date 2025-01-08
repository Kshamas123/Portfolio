import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.css"; // Ensure this file includes the CSS styles

function ColorSchemesExample() {
  return (
    <>
      {/* Animated Gradient Navbar */}
      <Navbar className="animated-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#" className="animated-brand">
            MY PORTFOLIO
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="animated-link"> {/* Home Link */}
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/techstack" className="animated-link"> {/* About Link */}
              TECHSTACK
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="animated-link"> {/* Projects Link */}
              MY PROJECTS
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;



