import React from 'react';

const SocialNetwork = () => {
    //la fonction qui permet de faire l'animation des aimants sur les icones 
    const anim = () => {
        const icons = document.querySelectorAll(".social-network a")

        icons.forEach((link) => {
            //event qui effectue l'effet de l'aimant
            link.addEventListener("mouseover", (e) =>{
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`
            })
            //event qui annule l'effet
            link.addEventListener('mouseleave', () =>{
                link.style.transform = ""
            })
        })

    }

    return (
        <div className="social-network">
            <ul className="content">
                <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel='noopener noreferrer' 
                    className='hover'
                    onMouseOver={anim}
                >
                    <li>
                        <i className='fab fa-facebook'></i>
                    </li>
                </a>
                <a 
                    href="https://www.twitter.com" 
                    target="_blank" 
                    rel='noopener noreferrer' 
                    className='hover'
                    onMouseOver={anim}
                >
                    <li>
                        <i className='fab fa-twitter'></i>
                    </li>
                </a>
                <a 
                    href="https://www.instagram.com" 
                    target="_blank" 
                    rel='noopener noreferrer' 
                    className='hover'
                    onMouseOver={anim}
                >
                    <li>
                        <i className='fab fa-instagram'></i>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;