
const skillsImgs = [
    './imgs/icons/11ty.png',
    './imgs/icons/bootstrap.png',
    './imgs/icons/bulma.png',
    './imgs/icons/express.png',
    './imgs/icons/jquery.png',
    './imgs/icons/js.png',
    './imgs/icons/mongo.png',
    './imgs/icons/nodejs.png',
    './imgs/icons/nunjucks.png',
    './imgs/icons/react.png',
    './imgs/icons/sass.svg',
    './imgs/icons/webpack.png'
]

const skillContainer = document.querySelector(".skill-container");


const Skills = {

    createLogos: () => {
        skillsImgs.forEach(skill => {
            let skillDiv = document.createElement("div");
            skillDiv.className = "skill-div";
            let skillIcon = document.createElement("img");
            skillIcon.setAttribute("src", skill);
            skillDiv.appendChild(skillIcon);
            skillContainer.appendChild(skillDiv);
        })
    }, 
}

export { Skills }