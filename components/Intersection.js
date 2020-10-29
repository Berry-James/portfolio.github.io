const sectionOne = document.querySelector(".skill-container");

const options = {
    root: null,
    threshold: 0,
}

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        console.log(entry);
    });
}, options);

observer.observe(sectionOne);

