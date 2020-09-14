document.addEventListener("DOMContentLoaded", init)

function init() {
  eventListeners();
  createProjectsList();
  menuScroll();
}

function eventListeners(){
  document.querySelector(".box").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show")
    document.querySelector(".box").classList.toggle("highlight")
  });

  let menuItems = document.querySelectorAll(".menu-item")
  menuItems.forEach(item => item.addEventListener('click', handleMenuClose))
}


function handleMenuClose(){
  document.querySelector(".menu").classList.remove("show")
}


function createProjectsList(){
  let projectsList = [
    {
      image: "./imgs/placeholder.png",
      number: "01",
      title: "title of project"
    },
    {
      image: "http://lorempixel.com/200/200/fashion/",
      number: "02",
      title: "title of project"
    },
    {
      image: "http://lorempixel.com/200/200/sports/",
      number: "03",
      title: "title of project"
    },
  ]

  let container = document.querySelector(".projects-list");
  

  projectsList.forEach(item => {
    let project = document.createElement("div");
    let image = document.createElement("img")
    let number = document.createElement("p");
    let title = document.createElement("h5");

    image.src = item.image
    number.textContent = item.number;
    title.textContent = item.title;

    let textContainer = document.createElement("div")
    textContainer.classList.add("text-container")

    textContainer.appendChild(number);
    textContainer.appendChild(title);
    project.appendChild(image);
    project.appendChild(textContainer);
    container.appendChild(project);
  })
}

function menuScroll(){
  const slider = document.querySelector('.menu-items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', ev => {
    isDown = true;
    startX = ev.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', ev => {
    if(!isDown) return;
    ev.preventDefault();
    const x = ev.pageX - slider.offsetLeft;
    const scrollSpeed = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - scrollSpeed;
  });
}