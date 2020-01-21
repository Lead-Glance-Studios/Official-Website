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
      number: "01",
      title: "title of project"
    },
    {
      number: "02",
      title: "title of project"
    },
    {
      number: "03",
      title: "title of project"
    },
  ]

  let ul = document.getElementById("projects-list");
  

  projectsList.forEach(item => {
    let li = document.createElement("li");
    let number = document.createElement("p");
    let title = document.createElement("h5");

    number.textContent = item.number;
    title.textContent = item.title;

    li.appendChild(number);
    li.appendChild(title);
    ul.appendChild(li);
  })
}

function projectsScroll(){
  const slider = document.querySelector('#projects-list');
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