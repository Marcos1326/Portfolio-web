let list = document.querySelectorAll('.nav li');
function active(){
    list.forEach((i) =>
    i.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((i) => 
i.addEventListener('click',active));

let menuNavbar = document.querySelector('.menuNavbar');
let header = document.querySelector('header');
menuNavbar.onclick = function(){
    header.classList.toggle('active')
}

document.getElementById("habilidades").addEventListener("click", function() {
    location.reload();
});


var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

// Mostrar el modal al hacer clic en un botón
document.getElementById("openModalButton").addEventListener("click", function() {
    modal.style.display = "block";
});

// Ocultar el modal al hacer clic en el botón de cierre o fuera del modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
});
