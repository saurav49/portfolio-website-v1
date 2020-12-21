// function to end preloader

window.addEventListener('load', () => {
    const preloader = document.querySelector(".preloader");
    preloader.classList.add("finish-preloader");
    const main = document.querySelector("main");
    main.style["display"] = "block";
})

let texts = ['Web Developer', 'Problem Solver'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {

    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    console.log(letter);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        index = 0;
        count++;
    }
    setTimeout(type, 350);
}());