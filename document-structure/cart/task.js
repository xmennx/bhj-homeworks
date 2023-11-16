document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart__products');

    products.forEach(product => {
        // Кнопки увеличения и уменьшения количества
        let quantityControl = product.querySelector('.product__quantity-value');
        let increaseBtn = product.querySelector('.product__quantity-control_inc');
        let decreaseBtn = product.querySelector('.product__quantity-control_dec');
        // Кнопка добавления в корзину
        let addToCartBtn = product.querySelector('.product__add');

        increaseBtn.addEventListener('click', () => {
            quantityControl.textContent = parseInt(quantityControl.textContent) + 1;
        });

        decreaseBtn.addEventListener('click', () => {
            if (parseInt(quantityControl.textContent) > 1) {
                quantityControl.textContent = parseInt(quantityControl.textContent) - 1;
            }
        });

        addToCartBtn.addEventListener('click', () => {
            let productId = product.dataset.id;
            let productImage = product.querySelector('.product__image').src;
            let quantity = parseInt(quantityControl.textContent);
            addProductToCart(productId, productImage, quantity);
        });
    });

    function addProductToCart(id, image, quantity) {
        let cartProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);
        if (cartProduct) {
            let cartProductCount = cartProduct.querySelector('.cart__product-count');
            cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
        } else {
            let newCartProduct = document.createElement('div');
            newCartProduct.className = 'cart__product';
            newCartProduct.dataset.id = id;
            newCartProduct.innerHTML = `
                <img class="cart__product-image" src="${image}">
                <div class="cart__product-count">${quantity}</div>
            `;
            cart.appendChild(newCartProduct);
        }
    }
});
