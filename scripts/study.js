import anime from '../node_modules/animejs/lib/anime.es.js';
import { Study } from '../components/Study.js';
import { Burger } from '../components/Burger.js';

// intersection observers
let imgOne = document.querySelector(".study-img-wrapper");
let imgs = document.querySelectorAll(".study-img-wrapper");
let subtitles = document.querySelectorAll(".subtitle");
let navbar = document.querySelector("#navbar");
let tools = document.querySelector(".study-tools-wrapper");

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
                    { opacity: 1, translateY: '0px' }
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

/* const observerNav = new IntersectionObserver(function (entries, observer) {
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

// bg colour change


// BURGER BUTTON
const burgerBtn = document.querySelector("#burger-button");

burgerBtn.addEventListener("click", () => {
  if (document.querySelector(".mobile-hamburger")) {
    Burger.remove();
  }
  else {
    Burger.show();
  }
})