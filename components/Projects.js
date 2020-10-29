import anime from './../node_modules/animejs/lib/anime.es.js';


const Projects = {

    projectImgAnimRecorderly: () => {
        let recorderlyWrapper = document.querySelector("#recorderly-content-wrapper");
        let projectImg = document.querySelector("#recorderly-img-wrapper");
        let projectTxt = document.querySelector("#recorderly-txt-wrapper");
        let projectSVG = document.querySelector("#recorderly-screen-svg");
        let phoneImg = document.querySelectorAll(".project-mockup-mobile");

             anime({
                begin: function() {
                    let phoneImg = document.createElement("img");
                    phoneImg.setAttribute("src", "./imgs/recorderly-mockup-mobile.png");
                    phoneImg.className = "project-mobile-mockup";
                    projectImg.appendChild(phoneImg);
                },
                targets: [recorderlyWrapper, projectTxt, phoneImg],
                keyframes: [
                    {  opacity: 0, translateX: '-100vw' },
                    {  opacity: 1, translateX: '0px' },
                ],
                easing: 'linear',
                delay: anime.stagger(500),
                duration: 1000,


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
        let wrapper = document.querySelector("#HPC-content-wrapper");
        let projectImg = document.querySelector("#HPC-img-wrapper");
        let projectTxt = document.querySelector("#HPC-txt-wrapper");
        let projectSVG = document.querySelector("#HPC-screen-svg");
        
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
                duration: 1000,


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
        let wrapper = document.querySelector("#scitech-content-wrapper");
        let projectImg = document.querySelector("#scitech-img-wrapper");
        let projectTxt = document.querySelector("#scitech-txt-wrapper");
        let projectSVG = document.querySelector("#scitech-screen-svg");
          
            anime({
            targets: [wrapper, projectTxt],
            keyframes: [
                {  opacity: 0, translateX: '-100vw' },
                {  opacity: 1, translateX: '0px' },
            ],
            easing: 'linear',
            duration: 1000,

            });     
        },
}



export { Projects }