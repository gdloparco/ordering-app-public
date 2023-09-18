import {menuArray} from '/data.js'

const menuItemsContainer = document.getElementById("menu-items-container")

for (let item of menuArray) {
    menuItemsContainer.innerHTML +=
    `
        <div class="${item.property}-container items-container">
                    <img class="${item.property}-img" src="${item.image}" alt="A ${item.property} cartoon image">
                    <div class="items-text">
                        <h2 class="item-name">${item.name}</h2>
                        <p class="item-ingredients">${item.ingredients}</p>
                        <p class="item-price">£ ${item.price}</p>
                    </div>
                    <button class="items-button" id="${item.property}-button">+</button>
                </div>
    `
}

const orderContainer = document.getElementById("order-container")
const chartItem = document.getElementById("chart-item")
let  totalPrice = []

menuItemsContainer.addEventListener('click', function(e){
    
    orderContainer.classList.remove('hidden')
    let totalPriceShown = document.getElementById('total-price')
    
    if (e.target.id === "pizza-button") {
        chartItem.innerHTML +=
        `
            <div class="single-item">
                <h2 class="item-order">${menuArray[0].name}</h2>
                <h2 class="item-price">£ ${menuArray[0].price}</h2>
            </div>
        `
        totalPrice.push (menuArray[0].price)
        
    } else if (e.target.id === "ice-cream-button") {
        chartItem.innerHTML +=
        `
            <div class="single-item">
                <h2 class="item-order">${menuArray[1].name}</h2>
                <h2 class="item-price">£ ${menuArray[1].price}</h2>
            </div>
        `
        totalPrice.push (menuArray[1].price)
        
    } else if (e.target.id === "beer-button") {
        chartItem.innerHTML +=
        `
            <div class="single-item">
                <h2 class="item-order">${menuArray[2].name}</h2>
                <h2 class="item-price">£ ${menuArray[2].price}</h2>
            </div>
        `
        totalPrice.push (menuArray[2].price)
    } else {
    }
    
    totalPriceShown.innerHTML = "£ " + totalPrice.reduce(function(total, currentElement){
        return total + currentElement
    })
})

const clearOrderBtn = document.getElementById("clear-order-btn")

clearOrderBtn.addEventListener ('click', function(){
    totalPrice = []
    chartItem.innerHTML = ""
    orderContainer.classList.add('hidden')
})

const orderBtn = document.getElementById("order-btn")
const paymentFormContainer = document.getElementById("payment-form-container")

orderBtn.addEventListener ('click', function(){
    paymentFormContainer.classList.remove('hidden')
})

const exitBtn = document.getElementById("exit-button")

exitBtn.addEventListener ('click', function(){
    paymentFormContainer.classList.add('hidden')
})

const paymentBtn = document.getElementById("payment-btn")
const orderConfirmationMessage = document.getElementById("order-confirmation-message")
const paymentForm = document.getElementById("payment-form")



paymentForm.addEventListener ('submit', function(e){
    paymentFormContainer.classList.add('hidden')
    e.preventDefault()
    totalPrice = []
    chartItem.innerHTML = ""
    orderContainer.classList.add('hidden')
    orderConfirmationMessage.classList.remove('hidden')
    
    const paymentFormData = new FormData (paymentForm)
    const name = paymentFormData.get('fullName')
    
            orderConfirmationMessage.innerHTML =
            `
            Thank you for your Order, ${name}.<br>
            We will text you when the driver is on the way!
            `
        setTimeout(function(){
             orderConfirmationMessage.classList.add('hidden')
        }, 4000)
})