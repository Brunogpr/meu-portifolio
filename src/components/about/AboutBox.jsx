import React from 'react'

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>

                <div>
                    <h3 className="about__title">12</h3>
                    <span className="about__subtitle">Projetos Completos</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>

                <div>
                    <h3 className="about__title">5670</h3>
                    <span className="about__subtitle">Xícaras de café</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>

                <div>
                    <h3 className="about__title">12</h3>
                    <span className="about__subtitle">Clientes Satisfeitos</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-badge"></i>

                <div>
                    <h3 className="about__title">+10</h3>
                    <span className="about__subtitle">Cursos Concluidos</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox