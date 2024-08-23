import React from "react";
import "./skills.css";
import Programming from "./Programming";
import Misc from "./Misc";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">What he aquired till now</span>

            <div className="skills__container container grid">
                <Programming />
                <Misc />
            </div>
        </section>
    )
}

export default Skills