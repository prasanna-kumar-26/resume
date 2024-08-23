import React from "react";

const Programming = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Programming</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class= 'bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Advance</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class= 'bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">C Programming</h3>
                            <span className="skills__level">Intermediate</span>
                            
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class= 'bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>                    
                </div>

                <div className="skills__group">
                <div className="skills__data">
                        <i class= 'bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Frontend (HTML, CSS, JavaScript)</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class= 'bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Programming