let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    // Add animation class
    category.classList.add('expand');
    
    // Remove animation class after animation completes
    setTimeout(() => {
      category.classList.remove('expand');
    }, 300);
  });
});
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

