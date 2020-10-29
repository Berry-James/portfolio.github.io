import anime from '../node_modules/animejs/lib/anime.es.js';
import { Study } from '../components/Study.js';
import {ProjectIndex} from '../components/ProjectIndex.js';

const swup = new Swup();

// Initialise swup to run script on page content change
function init() {
    if (document.querySelector('.study-header')) {
        Study.observer();
    }
}

swup.on('contentReplaced', init())

ProjectIndex.setBg();
