import {Container} from 'react-bootstrap';
import Typist from 'react-typist';
import React, { useState } from "react";
import {ArrowRightCircle} from 'react-bootstrap-icons';

function Introwords() {
    const [buttonVisibility, setButtonVisibility] = useState("hidden");

    function typeEnded() {
        setButtonVisibility("reveal");
    }

    return <Container fluid className="intro">
        <Typist className="introWords" cursor={{show:false}} avgTypingDelay={100} onTypingDone={typeEnded}>HELLO<br />WORLD</Typist>
        <a href="/about" className={buttonVisibility}>Get to know me <ArrowRightCircle /></a>
    </Container>
}

export default Introwords;