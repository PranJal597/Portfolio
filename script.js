// Stick navbar
let header=document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

//toggle icon navbar
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}