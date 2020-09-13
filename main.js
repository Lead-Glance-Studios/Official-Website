document.addEventListener("DOMContentLoaded", init)

function init() {
  eventListeners();
  createProjectsList();
  projectsScroll();
}

function eventListeners(){
  document.querySelector(".box").addEventListener("click", ev => 
  document.querySelector(".box").classList.toggle("x"));
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