let burgerOpen = document.getElementById('open-burger')
let menuBurger = document.querySelector('.burger')
burgerOpen.addEventListener('click', ()=>{
  menuBurger.classList.toggle('open')
})