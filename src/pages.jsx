import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from "./components/heading";
import ProjectCarousel from "./components/carousel";
import AboutBody from "./components/about";
import ProjectsBody from "./components/projects";
import ExperienceBody from "./components/experience";

function Home() {
    return <div className="App">
        <Heading />
        <ProjectCarousel />
    </div>
}

function About() {
    return <div className="App">
        <Heading />
         <AboutBody />
    </div>
}

function Projects() {
    return <div className="App">
        <Heading />
        <ProjectsBody />
    </div>
}

function Experience() {
    return <div className="App">
        <Heading />
        <ExperienceBody />
    </div>
}

export {Home, About, Projects, Experience};
