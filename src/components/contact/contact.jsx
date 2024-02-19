import React, { useState } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();
    
        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        };

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        };

        emailjs.send("service_b01u1ul", "template_y97tl9k", templateParams, "-282hJ5RP6iU-klOb")
        .then((response) => {
            alert("EMAIL ENVIADO")
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }

    return (
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Entre em contato</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Vamos conversar!</h3>
                    <p className="contact__details">Mande um e-mail e tire sua duvida. 👋</p>
                </div>

                <form action="" className="contact__form" onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insira seu nome' onChange={(e) => setName(e.target.value)} value={name} />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='Insira seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='Insira um assunto' onChange={(e) => setSubject(e.target.value)} value={subject} />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Escreva sua mensagem"
                            onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                    </div>

                    <button className="btn" type="submit" value="Enviar">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contact