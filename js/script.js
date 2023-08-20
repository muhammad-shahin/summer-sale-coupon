// add to cart & calculate price
function addToCart(elementId){
    switch (elementId){
        case 'product-1':
            const productName = getProductName(elementId + '-name');
            const productPrice = getProductPrice(elementId + '-price');
            console.log(productPrice)
            addProductInCart(productName);
            updateTotalPrice(productPrice);
            const totalPrice = getProductPrice('total-price');
            enableButton(totalPrice);
    }
}







// get product price/value
function getProductPrice(productId){
    const element = document.getElementById(productId);
    const productPrice = parseFloat(element.innerText);
    return productPrice;
}
// get product name
function getProductName(productNameId){
    const element = document.getElementById(productNameId);
    const productName = element.innerText;
    return productName;
}
// add product in cart item
function addProductInCart(productName){
    const cartItem = document.getElementById('cart-item');
    
    const count = cartItem.childElementCount;
    const newELement = document.createElement('p');
    newELement.classList.add('font');
    newELement.textContent = `${count + 1}. ${productName}`;
    
    // append element in cart
    cartItem.appendChild(newELement);
}
// set value in element
function setValue(elementId){
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText);
    element.innerText = value;
}

// update Total Price
function updateTotalPrice(productPrice){
    const previousTotalPrice = getProductPrice('total-price');
    console.log(previousTotalPrice);

    const totalPrice = document.getElementById('total-price');
    const newTotalPrice = previousTotalPrice + productPrice;
    totalPrice.innerText = newTotalPrice;
}
// enable make purchase button
function enableButton(totalPrice){
    if(totalPrice >= 200){
        const makePurchaseBtn = document.getElementById('make-purchase');
        makePurchaseBtn.disabled = false;
    }
}