import React from "react"
import Contact from "./Contact"
import Anna from "../Images/Anna.jpeg"
import { ProjectData } from "../ProjectsData"
export default function 
Project (props){
    const {item, title, description, img} = props
    return (
        <>
            <div className="projects">
                <p className="projects-description">Some of my projects include:</p>
                <div className="each-project">
                    <img src={img} />
                    <div className="each-project-details">
                        <h3>
                            {title}
                        </h3>
                        <p> Description:
                        {description}
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </>
        
    )
}