import * as React from "react";
import {Container, Row, Col} from 'react-bootstrap';

function ExperienceBody() {
    return <div>
        <Container>
            <Row>
                <Col md={4} xs={12} className="expCol">
                    <img src={require("../img/rec.png")} alt="NK Robotics Logo" height="150px" />
                </Col>
                <Col md={8} xs={12} className="expCol">
                    <p className="expCoyName">AUTOMATION PROJECT INDUSTRIAL ATTACHMENT</p>
                    <p className="expPeriod">APR 2022 - JUL 2022</p>
                    <ul className="expJD">
                        <li>Remote project with REC’s Learning & Development Team to automate new employee orientation process.</li>
                        <li>Developed web application using Microsoft Power Apps.</li>
                        <li>Established automated data flow to Sharepoint using Power Automate.</li>
                        <li>Data visualisation using Power BI.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <hr className="expSeparator"/>
        <Container>
            <Row>
                <Col md={4} xs={12} className="expCol">
                    <img src={require("../img/nkr.jpeg")} alt="NK Robotics Logo" height="250px" />
                </Col>
                <Col md={8} xs={12} className="expCol">
                    <p className="expCoyName">BUSINESS DEVELOPMENT & CURRICULUM INTERN</p>
                    <p className="expPeriod">FEB 2021 - JUN 2021</p>
                    <ul className="expJD">
                        <li>Analysed and visualised data to identify the most popular courses and age groups as well as courses with highest student retention rate, among other insights. This established key growth areas and the management then adopted a more targeted marketing approach.</li>
                        <li>Delivered sales presentation on course offerings to potential customers after trial lessons.</li>
                        <li>Synthesised proposal for partnership with external organisation.</li>
                        <li>Developed and designed a series of workbooks to improve students’ learning experience.</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
}

export default ExperienceBody;