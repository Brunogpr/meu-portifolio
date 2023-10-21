import React from 'react'

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/brunogui_/" className="home__social-link" target="_blank">
                <i class='fa-brands fa-instagram'></i>
            </a>

            <a href="https://github.com/Brunogpr/Brunogpr" className="home__social-link" target="_blank">
                <i class='fa-brands fa-git'></i>
            </a>

            <a href="https://www.linkedin.com/in/bruno-guilherme-b378b3158/" className="home__social-link" target="_blank">
                <i class='fa-brands fa-linkedin'></i>
            </a>

            <a href="https://www.facebook.com/bruno.guilherme.7355" className="home__social-link" target="_blank">
                <i class='fa-brands fa-facebook'></i>
            </a>
        </div>
    )
}

export default HeaderSocials