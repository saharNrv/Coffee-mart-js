const menuBar=document.querySelector('.nav-mobail-hamburg')
const menuMobail=document.querySelector('.menu-mobail')
const bg=document.querySelector('.bg')
const navShopp=document.querySelector('#nav-shopp')
const navShoppTwo=document.querySelector('#nav-shopp-2')
const basket=document.querySelector('.basket')
const basketClose=document.querySelector('.basket-close')

const coffeeBox=document.querySelector('.coffee-box')
const coffeeImg=document.querySelector('.coffee-img')
const coffeeLinkBox=document.querySelector('.coffee-link-box')

console.log(navShoppTwo);


menuBar.addEventListener('click',()=>{
    console.log('click');

    menuMobail.classList.toggle('active-menu')
    bg.classList.toggle('active')
})


navShopp.addEventListener('click',()=>{

    basket.classList.add('basket-left')
    bg.classList.toggle('active')
})

navShoppTwo.addEventListener('click',()=>{

    basket.classList.add('basket-left')
    bg.classList.toggle('active')
})
basketClose.addEventListener('click',()=>{
    basket.classList.remove('basket-left')
    bg.classList.toggle('active')
})
bg.addEventListener('click',()=>{
    menuMobail.classList.remove('active-menu')
    basket.classList.remove('basket-left')
    bg.classList.remove('active')
})
///////////////////////

