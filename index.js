/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let oneMeter = 3.281
let oneLiter = 0.264
let oneKilogram = 2.204
const inputNumber = document.getElementById("input-Number")
const lengthCardText = document.getElementById("card1-text")
const volumeCardText = document.getElementById("card2-text")
const massCardText = document.getElementById("card3-text")

const convertBtn = document.getElementById ("convert-btn")

convertBtn.addEventListener("click", function(){
    generateConv()
})

function generateConv() {
   let meter = inputNumber.value * oneMeter
   let feet = inputNumber.value / oneMeter
   lengthCardText.textContent = `${inputNumber.value} meters = ${meter.toFixed(3)} feet | 
   ${inputNumber.value} feet = ${feet.toFixed(3)} meters `
   //return meter
   let liter = inputNumber.value * oneLiter
   let gallons = inputNumber.value / oneLiter
   volumeCardText.textContent = `${inputNumber.value} liters = ${liter.toFixed(3)} gallons | 
   ${inputNumber.value} gallons = ${gallons.toFixed(3)} liters`
   //return liter
   let kilogram = inputNumber.value * oneKilogram
   let pounds = inputNumber.value / oneKilogram
   massCardText.textContent = `${inputNumber.value} kilos = ${kilogram.toFixed(3)} pounds |
   ${inputNumber.value} pounds = ${pounds.toFixed(3)} kilos`
   
   return meter; liter; kilogram
   
}
