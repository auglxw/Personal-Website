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
                    <p className="expCoyName">AUTOMATION OF NEW EMPLOYEES' ORIENTATION PROJECT</p>
                    <p className="expPeriod">APR 2022 - JUL 2022</p>
                    <ul className="expJD">
                        <li>Worked with REC’s Learning & Development Team to automate new hires' orientation process and better understand engagement levels.</li>
                        <li>Developed user interface using Microsoft Power Apps.</li>
                        <li>Automated data flow to Sharepoint and dissemination of emails and forms using Power Automate.</li>
                        <li>Data analysis and visualisation using Excel and Power BI.</li>
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
                        <li>Analysed and visualised data to identify registration trends and key growth areas</li>
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