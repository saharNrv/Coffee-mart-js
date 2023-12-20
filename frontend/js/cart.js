const tableWrapper = document.querySelector('.table-wrapper')

fetch('http://localhost:3000/productCart')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.map(proCart => {
            tableWrapper.insertAdjacentHTML('beforeend', `
            
            <div class="cart-table">
            <div class="cart-table-product">
                <a href="#">

                    <img src="./image/product-1.jpeg" alt="">
                </a>
                <a href="#">

                    ${proCart.name} 
                </a>
            </div>
            <div class="cart-table-price">
                <span>${proCart.price}تومان</span>
            </div>
            <div class="cart-table-count">
                <div class="input-erap-detaile">
                    <input type="button" value="-" class="input-btn">
                    <input type="number" value="1" autocomplete="off" inputmode="numeric" class="input-number">
                    <input type="button" value="+" class="input-btn">
                </div>
            </div>
            <div class="cart-table-total">
                <span>${proCart.price}تومان</span>

                <div class="cart-table-close">X</div>
            </div>

        </div>
        
            `)
        })
    })