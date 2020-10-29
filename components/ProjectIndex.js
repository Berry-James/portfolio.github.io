import anime from './../node_modules/animejs/lib/anime.es.js';

const ProjectIndex = {

    showText: () => {
        let wrapper = document.querySelectorAll(".study-wrapper")
/* 
        wrapper.forEach(entry => {
            let text = entry.querySelector(".study-title");
            let img = entry.querySelector(".study-img");
            console.log(entry);
            entry.addEventListener("mouseover", () => {
                anime({
                    targets: img,
                    translateX: '-50px',
                    duration: 250,
                    easing: 'linear',
                    delay: '1s'
                })
                anime({
                    targets: text,
                    left: '70%',
                    rotate: '90deg',
                    opacity: 1,
                })
            })

            entry.addEventListener("mouseout", () => {
                anime({
                    targets: img,
                    translateX: '0px',
                    duration: 250,
                    easing: 'linear'
                    
                })

                anime({
                    targets: text,
                    left: '50%',
                    rotate: '0deg',
                    opacity: 0,
                    
                    
                })
            })
        }) */
    },
/* 
    showBg: () => {
        let container = document.querySelectorAll(".study-wrapper");

        container.forEach(element => {

            document.addEventListener("mouseenter", () => {
                let bg = document.createElement("div");
                bg.className = "bg-circle";
                element.appendChild(bg)
            })

            document.addEventListener("mouseleave", () => {
                let bg = document.querySelector(".bg-circle");
                element.removeChild(bg);

            });


            
        })




        

    } */

    setBg: () => {
        let wrapper = document.querySelectorAll(".study-wrapper");
        wrapper.forEach(wrapper => {
            let colour = wrapper.getAttribute("data-color");
            let circle = wrapper.querySelector(".bg-circle");
            circle.style.background = colour;
        })
    }
}

export {ProjectIndex}