import anime from './../node_modules/animejs/lib/anime.es.js';

const Projects = {

    projectImgAnimRecorderly: () => {
        const recorderlyWrapper = document.querySelector("#recorderly-content-wrapper");
        const projectImg = document.querySelector("#recorderly-img-wrapper");
        const projectTxt = document.querySelector("#recorderly-txt-wrapper");
        const projectSVG = document.querySelector("#recorderly-screen-svg");
        const phoneImg = document.querySelectorAll(".project-mockup-mobile");

             anime({
/*                 begin: function() {
                    let phoneImg = document.createElement("img");
                    phoneImg.setAttribute("src", "./imgs/recorderly-mockup-mobile.png");
                    phoneImg.className = "project-mobile-mockup";
                    projectImg.appendChild(phoneImg);
                }, */
                targets: [recorderlyWrapper, projectTxt, phoneImg],
                keyframes: [
                    {  opacity: 0, translateX: '-100vw' },
                    {  opacity: 1, translateX: '0px' },
                ],
                easing: 'linear',
                delay: anime.stagger(500),
                duration: 500,


             });         

/*              anime({
                 targets: projectTxt,
                 keyframes: [
                     { opacity: 0, },
                     { opacity: 1,  },
                 ],
                 easing: 'linear',
                 complete: projectSVG.classList.add("svg-glow-recorderly"),
                 delay: 1000,
             }); */

/*              anime({
                begin: function() {
                    let phoneImg = document.createElement("img");
                    phoneImg.setAttribute("src", "./imgs/recorderly-mockup-mobile.png");
                    phoneImg.className = "project-mobile-mockup";
                    projectImg.appendChild(phoneImg);
                },
                targets: phoneImg,
                opacity: 0,
                easing: 'linear',
                duration: 500,
             }) */
        },

    projectImgAnimHPC: () => {
        const wrapper = document.querySelector("#HPC-content-wrapper");
        const projectImg = document.querySelector("#HPC-img-wrapper");
        const projectTxt = document.querySelector("#HPC-txt-wrapper");
        const projectSVG = document.querySelector("#HPC-screen-svg");
        
/*                  anime({
                targets: [wrapper, projectTxt],
                keyframes: [
                    {  opacity: 0, translateX: '-100vw', },
                    {  opacity: 1, translateX: '0vw' },
                    
                ],
                easing: 'easeOutElastic(1, .6)',
                delay: anime.stagger(500),


                });      */  
                
                anime({
                targets: [wrapper, projectTxt],
                keyframes: [
                    {  opacity: 0, translateX: '-100vw' },
                    {  opacity: 1, translateX: '0px' },
                ],
                easing: 'linear',
                duration: 800,


                });     

/*                  anime({
                    targets: projectTxt,
                    keyframes: [
                        { opacity: 0, },
                        { opacity: 1, translateX: '30vw' },
                    ],
                    easing: 'linear',
                    complete: projectSVG.classList.add("svg-glow-HPC")
                }); */
        },


    projectImgAnimScitech: () => {
        const wrapper = document.querySelector("#scitech-content-wrapper");
        const projectImg = document.querySelector("#scitech-img-wrapper");
        const projectTxt = document.querySelector("#scitech-txt-wrapper");
        const projectSVG = document.querySelector("#scitech-screen-svg");
          
            anime({
            targets: [wrapper, projectTxt],
            keyframes: [
                {  opacity: 0, translateX: '-100vw', rotate: '5deg' },
                {  opacity: 1, translateX: '0px', rotate: '0deg' },
            ],
            easing: 'easeOutQuart',
            duration: 800,

            });     
        },
    
    projectImgAnimTravelr: () => {
        const travelrImgs = document.querySelectorAll(".travelr-img");
        anime({
            targets: travelrImgs,
            keyframes: [
                { opacity: 0, scale: 0.2 },
                { opacity: 1, scale: 1 }
            ],
            
            easing: 'spring(1, 80, 10, 0)',
            delay: anime.stagger(250),
            duration: 1500,
        })
    }
        
}



export { Projects }