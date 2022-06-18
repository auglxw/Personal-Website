import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from "./components/heading";
import ProjectCarousel from "./components/carousel";

function Home() {
    return <div className="App">
        <Heading />
        <ProjectCarousel />
    </div>
}

function About() {
    return <div className="App">
        <Heading />
        <div>
            <h1>About</h1>
        </div>
    </div>
}

function Projects() {
    return <div className="App">
        <Heading />
        <div>
            <h1>Projects</h1>
        </div>
    </div>
}

function Experience() {
    return <div className="App">
        <Heading />
        <div>
            <h1>Experience</h1>
        </div>
    </div>
}

export {Home, About, Projects, Experience};