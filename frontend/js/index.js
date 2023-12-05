const menuBar=document.querySelector('.nav-mobail-hamburg')
const menuMobail=document.querySelector('.menu-mobail')
const bg=document.querySelector('.bg')
const navShopp=document.querySelector('#nav-shopp')
const navShoppTwo=document.querySelector('#nav-shopp-2')
const basket=document.querySelector('.basket')
const basketClose=document.querySelector('.basket-close')
const coffeeSearch=document.querySelectorAll('.coffee-icon-link-search')
const detaileBox=document.querySelector('.detaile-box')
const detailClose=document.querySelector('.detail-close')
const coffeeItemElems=document.querySelectorAll('.coffee-item')


const coffeeBox=document.querySelector('.coffee-box')
const coffeeImg=document.querySelector('.coffee-img')
const coffeeLinkBox=document.querySelector('.coffee-link-box')
const headerTitle=document.querySelector('.header-infos__title')
let landingText='همه چیزهایی که در مورد قهوه باید بدونید!'
let indexText=0

window.addEventListener('load',()=>{
    typeWriter(landingText,indexText)

})


function typeWriter(text,index){

    if(index<text.length){
        headerTitle.innerHTML +=text[index]
        index++
    }

    setTimeout(()=>{
        typeWriter(text,index)
    },100)

}







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
    detaileBox.classList.toggle('detaile-box-active')

})
///////////////////////
// coffeeSearch.addEventListener('click',(event)=>{
//     event.preventDefault()
//     console.log('click');
//     detaileBox.computedStyleMap.display='flex'
// })
coffeeSearch.forEach(eve=>{
    eve.addEventListener('click',()=>{
        detaileBox.classList.toggle('detaile-box-active')
        bg.classList.toggle('active')
    })
})
detailClose.addEventListener('click',()=>{
    detaileBox.classList.toggle('detaile-box-active')
    bg.classList.toggle('active')
})


coffeeItemElems.forEach(item=>{
    console.log(item);
    item.addEventListener('click',function(){

       
        document.querySelector('.coffee-item-active').classList.remove('coffee-item-active')
        document.querySelector('.coffee-content-active').classList.remove('coffee-content-active')
        
        this.classList.add('coffee-item-active')
        let contentMenu=this.getAttribute('portdata')
        console.log(contentMenu);
        document.querySelector(contentMenu).classList.add('coffee-content-active')

        console.log('click');
    })
})
