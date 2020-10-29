const Random = {
    gen: () => {
        const colours = ['red', 'blue', 'green', 'rebeccapurple'];
        let r = Math.floor(Math.random() * 4);
        let chosen = '';

        window.addEventListener('DOMContentLoaded', () => {
            document.body.style.setProperty('--color', 'red');
        })
    }
}

export { Random }