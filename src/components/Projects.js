import React from "react";
import Contact from "./Contact";
import { ProjectData } from "../ProjectsData";
export default function Project() {
  return (
    <>
      <div className="projects">
        <p className="projects-description">Some of my projects include:</p>
        <div>
          {ProjectData.map((item) => {
            const { id, img, title, description } = item;
            return (
              <div key={id} className="each-project">
                <img src={img} alt="" />
                <div className="each-project-details">
                  <h3>{title}</h3>
                  <p>
                    {" "}
                    Description:
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Contact />
    </>
  );
}
