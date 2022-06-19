import * as React from "react";
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';

function AboutBody() {
    return <Container fluid className="about">
    <Row className="aboutGrid">
        <Col lg={4} xs={12} className="aboutPicture">
            <div>
                <h3>Picture</h3>
            </div>
        </Col>
        <Col lg={8} xs={12}>
            <h1 className="aboutTitle">HELLO THERE!</h1>
            <p className="aboutContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
    </Row>
</Container>
}

export default AboutBody;