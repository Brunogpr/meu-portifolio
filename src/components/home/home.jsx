import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className='intro'>
                <img src={Me} alt="" className='home__img' />
                <h1 className='home__name'>Bruno Guilherme</h1>
                <span className='home__education'>Eu sou desenvolvedor Full Stack</span>

                <HeaderSocials />

                <a href="https://wa.me/5531993792429" target="blank" className='btn'>Contate-me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home