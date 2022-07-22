import * as React from "react";
import {Container, Navbar, Nav, Row, Col} from 'react-bootstrap';

function AboutBody() {
    return <Container fluid>
    <Row className="aboutGrid">
        <Col lg={4} xs={12} className="aboutCol">
            <div>
                <img className="aboutPicture" src={require("../img/profilepic.jpeg")} alt="Profile Pic" />
            </div>
        </Col>
        <Col lg={8} xs={12} className="aboutWords">
            <div className="aboutTitleGroup">
                <p className="aboutTitle">HELLO THERE!</p>
            </div>
            <p className="aboutContent">I am currently an undergraduate at Nanyang Technological University, majoring in Computer Science and Business. As a self-motivated and conscientious individual, I am constantly learning new technologies to broaden my skill set. I aspire to be able to optimise and improve business processes through the use of technology. I am familiar with the following technologies:</p>
            <p className="aboutContent">
            <b>Programming Languages</b>: Python, C Programming, JavaScript, SQL<br />
            <b>Web Development</b>: HTML, CSS, Bootstrap, React.JS, Node.JS, Express.JS<br />
            <b>Data Science</b>: Numpy, Pandas, MatPlotLib, Seaborn, Scikit-Learn, XGBoost<br />
            <b>Data Visualisation</b>: Power BI, Tableau<br />
            <b>Others</b>: Power Automate, Power Apps
            </p>
        </Col>
    </Row>
</Container>
}

export default AboutBody;
