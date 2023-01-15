import React from "react"
import Anna from "../Images/Anna.jpeg"
export default function About (){
    return (
        <div className="about-section">
            <div className="about-me-writeup">
            <h1>
                Hi, I am Anna Isumonah, <span >A Front-End Developer</span>
            </h1>
            <p className="my-description">I am a tech-enthusiat, passionate about front-end web development. I enjoy building beautiful and dynamic websites.</p>
            <p className="my-skills-p">My skills include:</p>
            <ul className="my-skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
            <button className="resume-btn">
                Download Resume
            </button>
            </div>
            <div className="about-me-img">
                <img src={Anna}></img>
            </div>
        </div>
    )
}