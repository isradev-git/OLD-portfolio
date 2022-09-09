//RECUERDA!!
//const _ = (selector) => document.querySelector(selector); //NO ES QuerySelectorAll
//const $ = (selector) => document.getElementById(selector);

//Funcionamiento Hide & Show de Proyectos
let divs = [
  "btn-bussiness-div",
  "btn-landing-div",
  "btn-others-div",
  "btn-all-div",
]; //Creamos un array
let visibleDivId = null;
function toggleVisibility(divId) {
  if (visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  let i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = $(divId);
    if (visibleDivId === divId) {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
}

//Funcionamiento de la seccion proyectos
let cards = document.querySelectorAll(".option");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    desactivate2();
    card.classList.add("active");
  });
});
function desactivate2() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
