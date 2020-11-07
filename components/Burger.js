import anime from './../node_modules/animejs/lib/anime.es.js';

const Burger = {

    shown: false,

    init: () => {
        let burgerBtn = document.querySelector('#burger-button');
        let navbar = document.querySelector("#navbar");
        console.log(Burger.shown);

        burgerBtn.addEventListener("click", () => {
            if (Burger.shown === false) {
                Burger.show();
            }
            if (Burger.shown === true) {
                Burger.remove();
            }

        })
    },
    
    show: () => {
        Burger.shown = true;
        let burgerBtn = document.querySelector('#burger-button');
        let navbar = document.querySelector(".mobile-nav-container");
        let bContainer = document.createElement("div");
        const indexLinks = [
            {name: 'About', href: 'index.html#skills'},
            {name: 'Work', href: 'index.html#work'},
            {name: 'Case Studies', href: './case-studies/studies.html'},
            {name: 'Contact', href: 'index.html#contact'},
        ]
        const elseLinks = [
            {name: 'About', href: '../index.html#skills'},
            {name: 'Work', href: '../index.html#work'},
            {name: 'Case Studies', href: './studies.html'},
            {name: 'Contact', href: '../index.html#contact'},
        ]

        // Create an entry with a link for each item in 'links' array
        if(window.location.pathname.includes('index.html')) {
            console.log('INDEX PAGE')
            console.log(window.location.pathname)
            indexLinks.forEach(link => {
                let entry = document.createElement("div");
                entry.className = 'mobile-hamburger-entry';
                let button = document.createElement("a");
                button.innerText = link.name;
                button.setAttribute("href", link.href);
                entry.appendChild(button);
                bContainer.appendChild(entry);
                bContainer.addEventListener("click", () => {
                    Burger.remove();
                })
            })
        } else {
            console.log('NOT INDEX PAGE')
            elseLinks.forEach(link => {
                let entry = document.createElement("div");
                entry.className = 'mobile-hamburger-entry';
                let button = document.createElement("a");
                button.innerText = link.name;
                button.setAttribute("href", link.href);
                entry.appendChild(button);
                bContainer.appendChild(entry);
                bContainer.addEventListener("click", () => {
                    Burger.remove();
                })
            })
        }


        // Append links to bContainer div
        bContainer.className = "mobile-hamburger";
        navbar.appendChild(bContainer); 

        // change burger button to cross button
        burgerBtn.innerHTML = null;
        burgerBtn.innerHTML = '&times;';

        // Animate burger div entrance
        anime({
            targets: bContainer,
            keyframes: [
                { opacity: 0, translateY: '-50vh',},
                { opacity: 1, translateY: '0vh',},
            ],
            duration: 200,
            easing: 'linear'
        })

        // Animate link entrance
        let entries = document.querySelectorAll(".mobile-hamburger-entry");

            anime({
                targets: entries,
                keyframes: [
                    { opacity: 0, translateX: '-100vw' },
                    { opacity: 1, translateX: '0vw' }
                ],
                easing: 'linear',
                delay: anime.stagger(100),
                duration: 500,
            }) 
        

        
    },

     remove: () => {
        Burger.shown = false;
        let navbar = document.querySelector("#navbar");
        let burger = document.querySelector(".mobile-hamburger");
        let burgerBtn = document.querySelector('#burger-button');

        anime({
            targets: burger,
            keyframes: [
                { opacity: 1, translateY: '0vh' },
                { opacity: 0, translateY: '-50vh' }
            ],
            easing: 'linear',
            duration: 200,
            complete: () => {
                burger.remove() 
            }
        })
/*         burger.remove();
 */        burgerBtn.innerHTML = '☰';
    } 
}

export { Burger }