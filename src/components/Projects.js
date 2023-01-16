import React from "react";
import Contact from "./Contact";
import { ProjectData } from "../ProjectsData";
import Footer from "./Footer";

export default function Project() {
  return (
    <>
      <div className="projects">
        <p className="projects-description">Some of my projects include:</p>
        <div>
          {ProjectData.map((item) => {
            const { id, img, title, description, link } = item;
            return (
              <div key={id} className="each-project">
                <img 
                src={img} 
                alt="image of the project" />
                <div className="each-project-details">
                  <h3>{title}</h3>
                  <p>
                    Description: {description}
                  </p>
                  <button className="display-project-site">
                    <a href={link}
                    target="_blank"> Click here to see
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
