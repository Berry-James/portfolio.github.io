import { Skills } from '.././components/Skills.js';
import { Projects } from '.././components/Projects.js';
import { Burger } from '.././components/Burger.js';
import { Random } from '.././components/Random.js';
import anime from './../node_modules/animejs/lib/anime.es.js';

// SCROLL TRACKER FOR CUBE ANIMATION
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// RANDOM
Random.gen();

// INTERSECTION OBSERVER 
const sectionOne = document.querySelector(".skill-container");
const sectionTwo = document.querySelector("#recorderly");
const HPCsection = document.querySelector("#hpc");
const ScitechSection = document.querySelector("#scitech");
const navbar = document.querySelector(".navbar");
const hexagons = document.querySelector(".hexagons");
const projectsText = document.querySelectorAll(".projects-title");
const projectsTitle = document.querySelector("#projects-title");


// INTERSECTION OBSERVER OPTIONS
const options = {
    root: null,
    threshold: 0,

}

const recorderlyOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-75px',
}

// INTERSECTION OBSERVERS

// SKILL LOGOS
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
        console.log(entry.target);
        createLogo();
        observer.unobserve(entry.target);
    });
}, options);
observer.observe(sectionOne);

/* // 'PROJECTS' TITLE
const titleObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
      console.log(entry.target);
      anime({
        targets: projectsText,
        keyframes: [
        {opacity: 0, translateX: '10vw'},
        {opacity: 1, translateX: '0vw' },
        ],
        duration: 1000,
        easing: 'easeInOutQuart'
      })
      observer.unobserve(entry.target);
  });
}, options);
titleObserver.observe(projectsTitle); */

// RECORDERLY
 const observerRecorderly = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
      Projects.projectImgAnimRecorderly();
      console.log(entry.target);
      observer.unobserve(entry.target);
  });
}, recorderlyOptions); 
observerRecorderly.observe(sectionTwo);  

// HPC 
const observerHPC = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
      Projects.projectImgAnimHPC();
      console.log(entry.target);
      observer.unobserve(entry.target);
  });
}, recorderlyOptions); 
observerHPC.observe(HPCsection);  

// Scitech 
const observerScitech = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
      Projects.projectImgAnimScitech();
      console.log(entry.target);
      observer.unobserve(entry.target);
  });
}, recorderlyOptions); 
observerScitech.observe(ScitechSection);  

// Travelr
const travelr = document.querySelector(".mobile-showcase");
const observerTravelr = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
      Projects.projectImgAnimTravelr();
      observer.unobserve(entry.target);
  });
}, recorderlyOptions); 
observerTravelr.observe(travelr);  

// NAVBAR
let aboutSection = document.querySelector(".about-section");
const observerNavbar = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    navbar.classList.add("navbar-active");
  });
}, options);
observerNavbar.observe(aboutSection);

// ABOUT
let aboutHeader = document.querySelector('.about-header');
let aboutMain = document.querySelectorAll(".about-section-content");
let aboutImg = document.querySelector('.about-me-image');
let aboutText = document.querySelector('.about-me-text');
const observerAbout = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }
    anime({
      targets: [aboutHeader, aboutMain ],
      keyframes: [
        { opacity: 0, translateY: '10vh'},
        { opacity: 1, translateY: '0'},
      ],
      delay: anime.stagger(100),
      easing: 'linear'
    })
    anime({
      targets: aboutImg,
      keyframes: [
        { opacity: 0, translateX: '-10vw' },
        { opacity: 1, translateX: '0' },
      ],
      easing: 'linear'
    })
    anime({
      targets: aboutText,
      keyframes: [
        { opacity: 0, translateX: '10vw' },
        { opacity: 1, translateX: '0' },
      ],
      easing: 'linear'
    })
    observer.unobserve(entry.target);

  });
}, options);
observerAbout.observe(aboutSection);

// BACKGROUND ON LANDING
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

particlesJS.load('particles-js-main', 'assets/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// BACKGROUNDS FOR PROJECTS
// RECORDERLY
particlesJS.load('particles-js-recorderly', 'assets/hexagonsR.json', function() {
  console.log('callback - particles.js config loaded');
})
// HPC
particlesJS.load('particles-js-hpc', 'assets/hexagonsH.json', function() {
  console.log('callback - particles.js config loaded');
})
// SCITECH
particlesJS.load('particles-js-scitech', 'assets/hexagonsS.json', function() {
  console.log('callback - particles.js config loaded');
})

// BUTTON SHOW/HIDE EXTENSIONS
function showAbout() {
  var button = document.querySelector("class")
  button.addEventListener("click", alert("click"));
}

// ANIMATE IN SKILL LOGOS
function createLogo() {
  Skills.createLogos();
  let skillContainer = document.querySelector(".skill-container");
  let skillLogos = document.querySelectorAll(".skill-div");
  let dividerBar = document.querySelector(".divider-bar");
  let hexagons = document.querySelector(".hexagons");

  anime({
    targets: [dividerBar, skillContainer, hexagons],
    keyframes: [
      { opacity: 0, translateY: '30px', scale: '0.5' },
      { opacity: 1, translateY: 0, scale: '1' },
    ],
    duration: 500,
    easing: 'easeOutQuint',
    delay: anime.stagger(250)
  })

  anime({
    targets: skillLogos, 
    keyframes: [
        { opacity: 0, scale: '0.5' },
        { opacity: 1, scale: '1' },
    ],
     delay: anime.stagger(75, {easing: 'linear'})
 });       
}

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



