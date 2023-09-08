const menuBar=document.querySelector('.nav-mobail-hamburg')
const menuMobail=document.querySelector('.menu-mobail')
const bg=document.querySelector('.bg')

const coffeeBox=document.querySelector('.coffee-box')
const coffeeImg=document.querySelector('.coffee-img')
const coffeeLinkBox=document.querySelector('.coffee-link-box')




menuBar.addEventListener('click',()=>{
    console.log('click');

    menuMobail.classList.toggle('active-menu')
    bg.classList.toggle('active')
})

bg.addEventListener('click',()=>{
    menuMobail.classList.remove('active-menu')
    bg.classList.remove('active')
})
///////////////////////

// coffeeBox.addEventListener('mouseover',()=>{
//     console.log('hover');
//     coffeeImg.classList.add('tr')

//     coffeeImg.setAttribute('src','./image/product-8-2-back.jpeg')
// })

// coffeeBox.addEventListener('mouseout',()=>{
//     console.log('hover');
//     coffeeImg.setAttribute('src','./image/product-8.jpg')
//     coffeeImg.classList.add('tr')
// })
// coffeeLinkBox.addEventListener('click',()=>{
//     coffeeLinkBox.setAttribute('href','https://www.w3schools.com/')
//     coffeeImg.classList.add('tr')

// })