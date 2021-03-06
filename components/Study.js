import anime from '../node_modules/animejs/lib/anime.es.js';

let pageBackground = document.querySelector(".study-container");
let studyImg = document.querySelectorAll(".study-wrapper");
let navbar = document.querySelector(".navbar");

const Study = {

    observer: () => {
        // intersection observers
        let imgs = document.querySelectorAll(".study-img-wrapper");
        let subtitles = document.querySelectorAll(".subtitle");

        const options = {
            root: null,
            threshold: 0,
            rootMargin: '-50px',
        }

        subtitles.forEach(subtitle => {
            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                }
                    anime({
                        targets: subtitle,
                        keyframes: [
                            { opacity: 0, translateX: '-200px' },
                            { opacity: 1, translateX: '0px' }
                        ],
                        duration: 800,
                        easing: 'easeInOutQuad'
                    })
                    observer.unobserve(entry.target);
                });
            }, options);

            observer.observe(subtitle);
        });

        imgs.forEach(img => {
            const observer = new IntersectionObserver(function (entries, observer) {
                entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return;
                }
                    anime({
                        targets: img,
                        keyframes: [
                            { opacity: 0, translateX: '10px' },
                            { opacity: 1, translateX: '0px' }
                        ],
                        duration: 800,
                        easing: 'easeInOutQuad',
                        delay: anime.stagger(1000)
                    })
                    observer.unobserve(entry.target);
                });
            }, options);

            observer.observe(img);
        });

/*         const observerNav = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
                console.log(entry.target);
                navbar.classList.toggle("navbar-active-study");
                observer.unobserve(entry.target);
            });
        }, options);

        observerNav.observe(tools); */

    },

    background: () => {
/*         navbar.classList.add('navbar-active-study');
 */
        let backgroundOverlay = document.createElement("div");
        backgroundOverlay.className = "background-overlay";

        studyImg.forEach(img => {
            let colour = img.getAttribute("data-color");
            img.addEventListener("mouseover", () => {
                 anime({
                    targets: pageBackground,
                    backgroundColor: colour,
                    duration: 200,
                    easing: 'linear',
                }) 
            });

            img.addEventListener("mouseleave", () => {

                 anime({
                    targets: pageBackground,
                    backgroundColor: '#171717',
                    duration: 200,
                    easing: 'linear',
                }) 
            })
        });
    },
}

export { Study }



