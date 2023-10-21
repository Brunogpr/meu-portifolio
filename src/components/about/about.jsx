import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg"


const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre Mim</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Trabalho atualmente como Analista de Infraestrutura de TI e desenvolvo
                            automações em Python. Tenho conhecimento em Javascript, React, Node e PHP.
                        </p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Desenvolvimento</h3>
                                <span className="skills__number development">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Designer Grafico</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Fotografia</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About