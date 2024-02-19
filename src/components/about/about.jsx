import React from 'react';
import "./about.css";
import Image from "../../assets/eu01.png"
import AboutBox from './AboutBox';


const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Sobre Mim</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Trabalho atualmente com desenvolvimento RPA em Python, realizo integrações de API externa com sistemas internos para melhoria do desempenho das funções. Desenvolvo tambem melhorias em telas do Logix(TOTVS) e realizo criação de dashbords no PBI para acompanhamento de indicadores.
                        </p>
                        <a href="/Curriculo_Bruno_2024.docx" download className="btn">Download CV</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills_name">React.Js</h3>
                                <span className="skills__number">40%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage react"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills_name">Node.Js</h3>
                                <span className="skills__number">50%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage node"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills_name">Python</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About