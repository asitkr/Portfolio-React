import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {

    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index);
    }

    return (
        <section className='qualification section' id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
        
            <div className='qualification__container container'>
                <div className="qualification__tabs">
                    <div className={toggle === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggle(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggle === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => setToggle(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Matriculation</h3>
                                <span className="qualification__subtitle">Adarsh Vikas Vidyalaya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2011 - 2012
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intermediate</h3>
                                <span className="qualification__subtitle">The Earth Public School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2012 - 2015
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Under Graduation</h3>
                                <span className="qualification__subtitle">Sagar Institue od Science and Technology</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Internship</h3>
                                <span className="qualification__subtitle">Newton School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 feb - 2022 till
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;