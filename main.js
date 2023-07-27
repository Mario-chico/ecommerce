let navImageEmail = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')
let hamMenu = document.querySelector('.menu')
let mobileMenu = document.querySelector('.mobile-menu')

console.log({navImageEmail})

navImageEmail.addEventListener('click', activeDesktopMenu)
hamMenu.addEventListener('click', activeHamMenu)
function activeDesktopMenu(){
  desktopMenu.classList.toggle('inactive')
  //desktopMenu.style = "display: block"
}
function activeHamMenu(){
  mobileMenu.classList.toggle('inactive')
}