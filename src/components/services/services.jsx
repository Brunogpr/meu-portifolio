import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.png"

const data = [
    {
      id: 1,
      image: Image1,
      title: "Designer Grafico",
      description:
        "Criação de manual de marca, criação de logomarca, tratamento de imagens para sites",
    },
    {
      id: 2,
      image: Image2,
      title: "Desenvolvimento Web",
      description:
        "Desenvolvimento de sites em Wordpress e HTML, CSS e React",
    },
    {
      id: 3,
      image: Image3,
      title: "Automação",
      description:
        "Desenvolvimento de automação de processos administrativos.",
    },
  ];

const Services = () => {
    return <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) => {
                return (
                    <div className="services__card" key={id}>
                        <img src={image} alt="" className="services__img" />

                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                );
            })}
        </div>
    </section>
}

export default Services