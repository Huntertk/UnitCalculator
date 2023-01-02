const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    let element = inputEl.value
    convertLength(element)
    convertVolume(element)
    convertMass(element)
})

function convertLength(elem){
    let meter = elem * 3.281
    let feet = elem * 0.3048
    lengthEl.textContent = `${elem} Meters = ${meter.toFixed(3)} feet  | ${elem} Feet = ${feet.toFixed(3)} meter`
}

function convertVolume(elem){
    let liters = elem * 0.264
    let gallons = elem * 3.785
    volumeEL.textContent = `${elem} Liters = ${liters.toFixed(3)} gallons  | ${elem} gallons = ${gallons.toFixed(3)} liters`
}

function convertMass(elem){
    let kilos = elem * 2.204
    let pounds = elem * 0.453
    massEl.textContent = `${elem} kilos = ${kilos.toFixed(3)} pounds  | ${elem} pounds = ${pounds.toFixed(3)} kilos`
}