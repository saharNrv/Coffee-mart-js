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

const coffeeItemsElem = document.querySelectorAll('.coffee-item')
const coffeeContentWrap = document.querySelector('#coffee-content')
const detaileImgElem = document.querySelector('.detaile-img')
const detaileTitleElem = document.querySelector('.detaile-title')
const detailePriceElem = document.querySelector('.detaile-price')
const addBtn = document.querySelector('.add-btn')
const minusBtn = document.querySelector('.minus-btn')
const inputNumber = document.querySelector('.input-number')
const detailFormBtn = document.querySelector('.detail-form-btn')
const basketMenuElem = document.querySelector('.basket-menu')
const coffeeItems = document.querySelectorAll('.coffee-item ')
const allItem = document.querySelector('#all')
const saleItem=document.querySelector('#sale')
const specialItem=document.querySelector('#special')
const selectItem=document.querySelector('#select')

let detailArray = [];

const coffeeBox = document.querySelector('.coffee-box')
const coffeeImg = document.querySelector('.coffee-img')
const coffeeLinkBox = document.querySelector('.coffee-link-box')
const headerTitle = document.querySelector('.header-infos__title')
let landingText = 'همه چیزهایی که در مورد قهوه باید بدونید!'
let indexText = 0

function productCoffee() {

    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {

            detailArray.push(data)
            const dataIds = [];
     let sliceData=data.slice(start,end)

            sliceData.forEach(data => {

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
                                       <span  class="coffee-icon-link" onClick="basketHnadler(${data.id})">
                                           <i class="fa-solid fa-cart-shopping"></i>
                                           </span>
                                       <span class="coffee-icon-link coffee-icon-link-search coffe-search-js" onClick="searchHandel(${data.id})">
                                           <i class="fa-solid fa-magnifying-glass"
                                               id="coffee-icon-link-search"></i>
                                        </span>
                                       <span class="coffee-icon-link" onClick="favoritHandler()">
                                       <i class="fa-regular fa-heart"></i>
                                       </span>
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



        })
}




window.addEventListener('load', () => {
    typeWriter(landingText, indexText)
    productCoffee()
    start=0;
    end=4;

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
    inputNumber.value = 1

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
    inputNumber.value = 1
})


// ///////////////////coffee menu




/*function for post fetch product */

function postProduct(objectPro) {
    fetch('http://localhost:3000/productCart', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectPro)
    })
        .then(res => {
            console.log(res);
            if (res.status === 500) {
                swal({
                    icon: 'success',
                    title: 'این محصول در سبد خرید قرار دارد',
                    button: 'باشه'
                })
            }
        })
}


/* search icon js handel */
const searchHandel = (id) => {

    detaileBox.classList.toggle('detaile-box-active')
    bg.classList.add('active')


    const b = detailArray[0].filter(detail => detail.id === id)

    detaileImgElem.setAttribute('src', `${b[0].img}`)
    detaileTitleElem.innerHTML = `${b[0].name}`
    detailePriceElem.innerHTML = `${b[0].price} تومان`

    addBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let count = inputNumber.value++;

        let increasePrice = Number(b[0].price) * inputNumber.value
        detailePriceElem.innerHTML = `${increasePrice} تومان`

    })
    minusBtn.addEventListener('click', (e) => {
        e.preventDefault()


        let count = inputNumber.value--;
        if (inputNumber.value <= 1) {
            detailePriceElem.innerHTML = `${b[0].price}`
            inputNumber.value = 1

        } else {

            let increasePrice = Number(b[0].price) * inputNumber.value
            detailePriceElem.innerHTML = `${increasePrice}`
        }


    })

    detailFormBtn.addEventListener('click', (e) => {

        e.preventDefault()
        let newCartProduct = {
            id: b[0].id,
            name: b[0].name,
            price: (b[0].price * inputNumber.value),
            count: inputNumber.value,
            img: b[0].img
        }


        postProduct(newCartProduct)


    })

}
/* basket icon js handler*/

const basketHnadler = (basketID) => {

    const b = detailArray[0].filter(detail => detail.id === basketID)

    let newCartProduct = {
        id: b[0].id,
        name: b[0].name,
        price: (b[0].price * inputNumber.value),
        count: inputNumber.value,
        img: b[0].img
    }

    postProduct(newCartProduct)

}

coffeeItems.forEach(item => {
    item.addEventListener('click', function (e) {
        document.querySelector('.coffee-item-active').classList.remove('coffee-item-active')

        this.classList.add('coffee-item-active')
    })

})

allItem.addEventListener('click', () => {
    coffeeContentWrap.innerHTML=''
    productCoffee()
start=0;
end=5;
})

saleItem.addEventListener('click',()=>{
    productCoffee()
    start=2;
    end=4

})
specialItem.addEventListener('click',()=>{
    productCoffee()
    start=1,
    end=4
})

selectItem.addEventListener('click',()=>{
 productCoffee()
 start=4;
 end=5;
})

fetch('http://localhost:3000/productCart')
    .then(res => res.json())
    .then(data => {
        data.map(item => {
            basketMenuElem.insertAdjacentHTML('beforeend', `
            <li class="basket-item">
            <a href="#" class="basket-link">
            <div class="basket-pro">
                <img src=${item.img} class="basket-img">
            </div>
            <div class="basket-info">
                <h3 class="basket-info-title">${item.name}</h3>
                <div class="basket-info-price">
                    <span class="basket-price">${item.price} تومان</span>
                    <span class="basket-count">x${item.count}</span>
                </div>
            </div>
        </a>
        <div class="basket-link-close">X</div>
        </li>
            `)
        })
    })


coffeeItemsElem.forEach(item => {


    item.addEventListener('click', (event) => {
        let btnText = event.target.innerHTML;

        if (btnText === 'همه') {


        } else {
            coffeeContentWrap.innerHTML = ''
        }

    })
})