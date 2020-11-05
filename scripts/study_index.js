import anime from '../node_modules/animejs/lib/anime.es.js';
import { Study } from '../components/Study.js';
import {ProjectIndex} from '../components/ProjectIndex.js';

ProjectIndex.setBg();

let navbar = document.querySelector("#navbar")
navbar.classList.add("navbar-active-study");