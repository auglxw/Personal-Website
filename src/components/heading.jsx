import * as React from "react";
import {Link} from "react-router-dom";
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';
import {Linkedin, Github} from 'react-bootstrap-icons';

function Heading() {
  return <Container className="heading">
  <Row>
    <Col lg={{span: 4, order: 1}} xs={{span: 12, order: 3}}>
      <Navbar collapseOnSelect expand="lg" variant="light" id="navBar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="flexContent me-auto">
              <Nav.Link href="/about" className="navLink">About</Nav.Link>
              <Nav.Link href="/projects" className="navLink">Projects</Nav.Link>
              <Nav.Link href="/experience" className="navLink">Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
    <Col lg={{span: 4, order: 2}} xs={{span: 12, order: 1}} className="header">
      <a href="/" className="name">AUGUSTINE LEE</a>
    </Col>
    <Col lg={{span: 4, order: 3}} xs={{span: 12, order: 2}} className="header">
      <a href="https://www.linkedin.com/in/augustine-lee-al67"><Linkedin className="socialIcon"/></a>
      <a href="https://github.com/auglxw"><Github className="socialIcon"/></a>
    </Col>
  </Row>
</Container>
}

export default Heading;