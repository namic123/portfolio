let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navigationLink = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navigationLink.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      })
    }
  })
}

/* 고정 네비게이션 */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);