import React, { useEffect } from 'react';


const Mouse = () => {
    useEffect(() => {
        const cursor = document.querySelector(".cursor")
        
        window.addEventListener('mousemove', (e) => {
            cursor.style.top = e.y + "px"
            cursor.style.left = e.x + "px"
        })

        //cette logique permet d'jaouter l'évenement sur la souris
        document.querySelectorAll(".hover").forEach((link) => {
            //lorsque nous sommes sur un élément cliquable la souris s'est rétreci
           link.addEventListener("mouseover", () => {
               cursor.classList.add("hovered")
           });
           //lorque nous ne le sommes sa s'agrandi
           link.addEventListener("mouseleave", () =>{
               cursor.style.transition = "3s ease-out"
               cursor.classList.remove("hovered")
           })
        })
        
    }, []);

    return (
        <span className="cursor"></span>
    );
};

export default Mouse;