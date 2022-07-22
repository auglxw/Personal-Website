import * as React from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

function ProjectsBody() {
    return <Container fluid>
    <Row className="projectsGrid">
        <Col lg={4} xs={12} className="projectsCol">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src={require("../img/myclinic.png")} className="cardImg" />
                <Card.Body>
                    <Card.Title>Digital Patient Registration System</Card.Title>
                    <Card.Text>Online registration system for clinics to improve patients' waiting experience (In Progress)</Card.Text>
                    <Card.Text>Full-Stack Web App using MERN stack</Card.Text>
                    <Button variant="outline-secondary" href="https://github.com/auglxw/myclinic">Source Code</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4} xs={12} className="projectsCol">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src={require("../img/PortfolioWebsite.png")} className="cardImg" />
                <Card.Body>
                    <Card.Title>Personal Portfolio<br />Website</Card.Title>
                    <Card.Text>Portfolio webpage to share a little more about myself</Card.Text>
                    <Card.Text>Built using HTML, CSS, JavaScript, ReactJS</Card.Text>
                    <Button variant="outline-secondary" href="https://github.com/auglxw/Personal-Website">Source Code</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4} xs={12} className="projectsCol">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src={require("../img/DataSci.png")} className="cardImg" />
                <Card.Body>
                    <Card.Title>Multi-Class Income Classifier</Card.Title>
                    <Card.Text>Classifier model that predict one's income based on various factors</Card.Text>
                    <Card.Text>Built with Python with the use of libraries like Pandas, Scikit-learn, XGBoost</Card.Text>
                    <Button variant="outline-secondary" href="https://github.com/auglxw/SC1015-Project">Source Code</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    </Container>
}

export default ProjectsBody;