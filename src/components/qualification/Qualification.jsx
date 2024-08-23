import React from "react";
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">The geek's journey till now</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification_icon"></i>Education
                    </div>
                </div>

                <div className="qualification__tabs">
                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">M.Tech (Research)</h3>
                                <span className="qualification__subtitle">NITK, Surathkal</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification