import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Entre em contao</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Vamos conversar!</h3>
                    <p className="contact__details">Mande um e-mail e tire sua duvida. 👋</p>
                </div>

                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insira seu nome' />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='Insira seu e-mail' />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='Insira um assunto' />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea 
                        name="" 
                        id=""
                        cols="30"
                        rows="10" 
                        className="contact__form-input"
                        placeholder="Escreva sua mensagem"></textarea>
                    </div>

                    <buttom className="btn">Enviar Mensagem</buttom>
                </form>
            </div>
        </section>
    )
}

export default Contact