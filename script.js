let burgerOpen = document.getElementById('openBtn')
let menuBurger = document.querySelector('#burger')
let sideNav = document.getElementById('mySidenav')
burgerOpen.addEventListener('click', ()=>{
  menuBurger.classList.toggle('open')
  sideNav.classList.toggle('active')

})