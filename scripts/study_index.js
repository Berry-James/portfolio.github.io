import anime from '../node_modules/animejs/lib/anime.es.js';
import { Study } from '../components/Study.js';
import { Burger } from '../components/Burger.js';
import {ProjectIndex} from '../components/ProjectIndex.js';

ProjectIndex.setBg();

let navbar = document.querySelector("#navbar")
navbar.classList.add("navbar-active-study");

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