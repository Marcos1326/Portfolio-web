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