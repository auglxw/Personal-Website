import * as React from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

function ProjectsBody() {
    return <Container fluid>
    <Row className="projectsGrid">
        <Col lg={4} xs={12} className="projectsCol">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4" />
                <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>
                    Project 1 Description
                    </Card.Text>
                    <Button variant="outline-secondary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4} xs={12} className="projectsCol">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4" />
                <Card.Body>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>
                    Project 2 Description
                    </Card.Text>
                    <Button variant="outline-secondary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
        <Col lg={4} xs={12} className="projectsCol">
            <Card style={{ width: '18rem' }} className="mx-auto">
                <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4" />
                <Card.Body>
                    <Card.Title>Project 3</Card.Title>
                    <Card.Text>
                    Project 3 Description
                    </Card.Text>
                    <Button variant="outline-secondary">Read More</Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    </Container>
}

export default ProjectsBody;