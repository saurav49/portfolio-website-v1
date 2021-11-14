// function to end preloader

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("finish-preloader");
  const main = document.querySelector("main");
  if (main !== null) {
    main.style["display"] = "block";
  }
});

const navBtn = document.querySelector(".nav-btn");
const sideBar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".fa-times");
const sidebarNavItems = document.querySelectorAll(".nav-items-sidebar");
const navItemsLink = document.querySelectorAll(".nav-item-link");

let showSidebar = false;

sidebarClose.style.display = "none";

navBtn.addEventListener("click", () => {
  showSidebar = !showSidebar;
  sidebarClose.style.display = "block";
  sidebarNavItems.forEach((item) => (item.style.display = "block"));
  showSidebar ? (sideBar.style.width = "300px") : (sideBar.style.width = "0px");
});

sidebarClose.addEventListener("click", () => {
  showSidebar = false;

  sidebarClose.style.display = "none";
  sidebarNavItems.forEach((item) => (item.style.display = "none"));
  sideBar.style.width = "0px";
});

navItemsLink.forEach((nav) => {
  nav.addEventListener("click", () => {
    console.log(nav.style.color);
    nav.style.color = "#536dfe";
  });
});

// let texts = ['Web Developer', 'Problem Solver'];
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';

// (function type() {

//     if (count === texts.length) {
//         count = 0;
//     }
//     currentText = texts[count];
//     letter = currentText.slice(0, ++index);

//     console.log(letter);

//     document.querySelector(".typing").textContent = letter;
//     if (letter.length === currentText.length) {
//         index = 0;
//         count++;
//     }
//     setTimeout(type, 350);
// }());
