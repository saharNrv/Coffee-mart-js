const menuBar = document.querySelector('.nav-mobail-hamburg')
const menuMobail = document.querySelector('.menu-mobail')
const bg = document.querySelector('.bg')
const navShopp = document.querySelector('#nav-shopp')
const navShoppTwo = document.querySelector('#nav-shopp-2')
const basket = document.querySelector('.basket')
const basketClose = document.querySelector('.basket-close')
// const coffeeSearch = document.querySelectorAll('.coffee-icon-link-search')
const detaileBox = document.querySelector('.detaile-box')
const detailClose = document.querySelector('.detail-close')
// const coffeeItemElems=document.querySelectorAll('.coffee-item')


const coffeeBox = document.querySelector('.coffee-box')
const coffeeImg = document.querySelector('.coffee-img')
const coffeeLinkBox = document.querySelector('.coffee-link-box')
const headerTitle = document.querySelector('.header-infos__title')
let landingText = 'همه چیزهایی که در مورد قهوه باید بدونید!'
let indexText = 0

window.addEventListener('load', () => {
    typeWriter(landingText, indexText)

})


function typeWriter(text, index) {

    if (index < text.length) {
        headerTitle.innerHTML += text[index]
        index++
    }

    setTimeout(() => {
        typeWriter(text, index)
    }, 100)

}







menuBar.addEventListener('click', () => {
    console.log('click');

    menuMobail.classList.toggle('active-menu')
    bg.classList.toggle('active')
})


navShopp.addEventListener('click', () => {

    basket.classList.add('basket-left')
    bg.classList.toggle('active')
})

navShoppTwo.addEventListener('click', () => {

    basket.classList.add('basket-left')
    bg.classList.toggle('active')
})
basketClose.addEventListener('click', () => {
    basket.classList.remove('basket-left')
    bg.classList.toggle('active')
})
bg.addEventListener('click', () => {
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
// coffeeSearch.forEach(eve => {
//     eve.addEventListener('click', () => {
//         detaileBox.classList.toggle('detaile-box-active')
//         bg.classList.toggle('active')
//     })
// })
detailClose.addEventListener('click', () => {
    detaileBox.classList.toggle('detaile-box-active')
    bg.classList.toggle('active')
})


// coffeeItemElems.forEach(item=>{
//     console.log(item);
//     item.addEventListener('click',function(){


//         document.querySelector('.coffee-item-active').classList.remove('coffee-item-active')
//         document.querySelector('.coffee-content-active').classList.remove('coffee-content-active')

//         this.classList.add('coffee-item-active')
//         let contentMenu=this.getAttribute('portdata')
//         console.log(contentMenu);
//         document.querySelector(contentMenu).classList.add('coffee-content-active')

//         console.log('click');
//     })
// })
// ///////////////////coffee menu
const coffeeItemsElem = document.querySelectorAll('.coffee-item')
const coffeeContentWrap = document.querySelector('#coffee-content')
const detaileImgElem=document.querySelector('.detaile-img')
const detaileTitleElem=document.querySelector('.detaile-title')
const detailePriceElem=document.querySelector('.detaile-price')
const addBtn=document.querySelector('.add-btn')
const inputNumber=document.querySelector('.input-number')

let detailArray=[];

fetch('http://localhost:3000/products')
.then(res=>res.json())
.then(data=>{
  
    detailArray.push(data)
    const dataIds = [];
   data.slice(0,4).forEach(data=>{

       coffeeContentWrap.insertAdjacentHTML('beforeend', `
       <div class="col-12 col-xs-12 col-md-6 col-lg-3">
                           <div class="coffee-box" >
                               <div class="coffee-img-wrap">
                                   <a href="#" class="coffee-link-img">
                                       <img src=${data.img} class="coffee-img">
                                   </a>
                                   <div class="coffee-img-wrap-hover">
                                       <a href="#" class="coffee-link-img">
                                           <img src=${data.imgBack} class="coffee-img">
                                       </a>
                                   </div>
                               </div>
                               <div class="coffee-btn-wrap">
                                   <a href="#" class="coffee-icon-link">
                                       <i class="fa-solid fa-cart-shopping"></i></a>
                                   <span class="coffee-icon-link coffee-icon-link-search coffe-search-js" onClick="searchHandel(${data.id})">
                                       <i class="fa-solid fa-magnifying-glass"
                                           id="coffee-icon-link-search"></i></span>
                                   <a href="#" class="coffee-icon-link"><i
                                           class="fa-regular fa-heart"></i></a>
                               </div>
                               <div class="coffee-info">
                                   <h3 class="coffee-info-title"><a href="#" class="coffee-info-title-link">${data.name}</a></h3>
                                   <span>${data.price} تومان</span>
                               </div>
                           </div>
                       </div>
       `)

       dataIds.push(data.id);
   })
   
   
//    const coffeeSearchElems=document.querySelectorAll('.coffe-search-js')
//    coffeeSearchElems.forEach(search=>{
//        search.addEventListener('click',(e)=>{
//            const parent = coffeeSearchElems[0].closest('.coffee-box');
//            const productId = e.currentTarget.id;
//            const dataId = dataIds[e.target.parentNode.querySelector('.coffee-info-title-link')];
//            console.log(e);
//            console.log(dataId);
//        })

//    })
      
})
// console.log(detailArray);
const searchHandel=(id)=>{
    // console.log(id);
    detaileBox.classList.toggle('detaile-box-active')
    bg.classList.add('active')

    const b=detailArray[0].filter(detail=> detail.id===id )
    console.log(b[0]);
    detaileImgElem.setAttribute('src',`${b[0].img}`)
    detaileTitleElem.innerHTML=`${b[0].name}`
    detailePriceElem.innerHTML=`${b[0].price}`

    addBtn.addEventListener('click',(e)=>{
        e.preventDefault()

      let count= inputNumber.value++;
      
      let c=Number(b[0].price)*inputNumber.value
      detailePriceElem.innerHTML=`${c}`
      console.log(c);
    //   console.log(count);
    })

}




coffeeItemsElem.forEach(item => {
  

    item.addEventListener('click', (event) => {
        let btnText = event.target.innerHTML;

        if (btnText === 'همه') {
           
           
        } else {
           coffeeContentWrap.innerHTML=''
        }

    })
})