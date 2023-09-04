const menuBar=document.querySelector('.nav-mobail-hamburg')
const menuMobail=document.querySelector('.menu-mobail')
const bg=document.querySelector('.bg')

menuBar.addEventListener('click',()=>{
    console.log('click');

    menuMobail.classList.toggle('active-menu')
    bg.classList.toggle('active')
})

bg.addEventListener('click',()=>{
    menuMobail.classList.remove('active-menu')
    bg.classList.remove('active')
})