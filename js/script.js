// add to cart & calculate price
function addToCart(elementId) {
  switch (elementId) {
    case "product-1":
        updateCartItem(elementId);
        break;
    case "product-2":
        updateCartItem(elementId);
        break;
    case "product-3":
        updateCartItem(elementId);
        break;
    case "product-4":
        updateCartItem(elementId);
        break;
    case "product-5":
        updateCartItem(elementId);
        break;
    case "product-6":
        updateCartItem(elementId);
        break;
}
}

// get product price/value
function getProductPrice(productId) {
  const element = document.getElementById(productId);
  const productPrice = parseFloat(element.innerText);
  return productPrice;
}
// get product name
function getProductName(productNameId) {
  const element = document.getElementById(productNameId);
  const productName = element.innerText;
  return productName;
}
// set text value in element
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = Number(value).toFixed(2);
}
// add product in cart item
function addProductInCart(productName) {
  const cartItem = document.getElementById("cart-item");

  const count = cartItem.childElementCount;
  const newELement = document.createElement("p");
  newELement.classList.add("font");
  newELement.textContent = `${count + 1}. ${productName}`;

  // append element in cart
  cartItem.appendChild(newELement);
}

// update cart item
function updateCartItem(elementId) {
  addProductInCart(getProductName(elementId + "-name")); //add product name
  updateTotalPrice(getProductPrice(elementId + "-price")); //add product price
  enableButton(getProductPrice("total-price")); //enable button if total product price is more than 0
}
// update Total Price
function updateTotalPrice(productPrice) {
  const previousTotalPrice = getProductPrice("total-price");

  const newTotalPrice = previousTotalPrice + productPrice;
  setValue("total-price", newTotalPrice);
  checkCoupon();
  const discount = getProductPrice('discount')
  updateTotal(discount, newTotalPrice);
}
// update discount (coupon apply)
function applyCoupon() {
  const input = document.getElementById("coupon-input");
  const couponCode = input.value;
  if (couponCode === "SELL200") {
    const totalPrice = getProductPrice("total-price");
    const discount = (totalPrice * 20) / 100;
    setValue("discount", discount);
    updateTotal(discount, totalPrice);
    document.getElementById("coupon-alert").style.visibility = "hidden";
  } else {
    const errorMsg = `Use Coupon Code SELL200<br>to Get 20% Discount`;
    const msg = document.getElementById("coupon-alert");
    msg.style.visibility = "visible";
    msg.style.color = "green";
    msg.innerHTML = errorMsg;
  }
}
// update Total
function updateTotal(discount, totalPrice) {
  const total = totalPrice - discount;
  setValue("total", total);
}

// enable make purchase button
function enableButton(totalPrice) {
  if (totalPrice > 0) {
    const makePurchaseBtn = document.getElementById("make-purchase");
    makePurchaseBtn.disabled = false;
  }
}
// check coupon
function checkCoupon() {
  const totalPrice = getProductPrice("total-price");
  if (totalPrice >= 200) {
    const couponBtn = document.getElementById("coupon-btn");
    couponBtn.disabled = false;
    applyCoupon();
  } else {
    const couponBtn = document.getElementById("coupon-btn");
    couponBtn.disabled = true;
  }
}
// popup modal
function popupModal(){
    document.getElementById('popup-modal').classList.toggle('active');
}
// clear cart
function clearCart(){
    const parent = document.getElementById('cart-item')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    setValue('total-price', 0.00);
    setValue('discount', 0.00);
    setValue('total', 0.00);
    popupModal();

}
