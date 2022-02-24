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

const parentContainer = document.querySelectorAll(".project-image-parent");
const projectContainer = document.querySelectorAll(".project-image");

// moving animation event
parentContainer.forEach((parent, i) => {
  parent.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    if (i > 0) {
      projectContainer[i].style.transform = `rotateY(${
        xAxis / (1 * i)
      }deg) rotateX(${yAxis / (1 * i)}deg)`;
    } else {
      projectContainer[
        i
      ].style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  });
});
// animate in
parentContainer.forEach((parent, i) => {
  parent.addEventListener("mouseenter", (e) => {
    projectContainer[i].style.transition = "none";
  });
});
// animate out
parentContainer.forEach((parent, i) => {
  parent.addEventListener("mouseleave", (e) => {
    projectContainer[i].style.transition = "0.5s all ease-in";
    projectContainer[i].style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});

// animate live demo btn icon
const eyeIcon = document.querySelectorAll(".fa-eye");
const codeIcon = document.querySelectorAll(".fa-code");
const btnOutline = document.querySelectorAll(".btn-color-outline");
const btnColor = document.querySelectorAll(".btn-color");

btnOutline.forEach((btn, i) => {
  btn.addEventListener("mouseover", (e) => {
    eyeIcon[i].style.transform = `translateY(-2px)`;
  });
});
btnColor.forEach((btn, i) => {
  btn.addEventListener("mouseover", (e) => {
    codeIcon[i].style.transform = `translateY(-2px)`;
  });
});

// animate in
btnOutline.forEach((btn, i) => {
  btn.addEventListener("mouseenter", (e) => {
    eyeIcon[i].style.transition = "none";
  });
});
btnColor.forEach((btn, i) => {
  btn.addEventListener("mouseenter", (e) => {
    codeIcon[i].style.transition = "none";
  });
});

// animate out
btnOutline.forEach((btn, i) => {
  btn.addEventListener("mouseleave", (e) => {
    eyeIcon[i].style.transition = "0.5s all ease-in";
    eyeIcon[i].style.transform = "translateY(0px)";
  });
});
btnColor.forEach((btn, i) => {
  btn.addEventListener("mouseleave", (e) => {
    codeIcon[i].style.transition = "0.5s all ease-in";
    codeIcon[i].style.transform = "translateY(0px)";
  });
});

parentContainer.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  projectContainer.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  console.log(projectContainer.style.transform);
});

// animate in
parentContainer.addEventListener("mouseenter", (e) => {
  projectContainer.style.transition = "none";
});

// animate out
parentContainer.addEventListener("mouseleave", (e) => {
  projectContainer.style.transition = "0.5s all ease-in";
  projectContainer.style.transform = "rotateY(0deg) rotateX(0deg)";
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
