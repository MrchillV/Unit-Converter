const input = document.querySelector(".user-input");
const convertBtn = document.querySelector(".convert-btn");
const lengthSection = document.querySelector(".length-section");
const volumeSection = document.querySelector(".volume-section");
const massSection = document.querySelector(".mass-section");

const paragraphOne = document.createElement("p");
const paragraphTwo = document.createElement("p");
const paragraphThree = document.createElement("p");

convertBtn.addEventListener("click", function(){
    let userInput = input.value;
    
    paragraphOne.textContent = `${userInput} meters = ${meterToFeet(userInput)} feet | ${userInput} feet = ${feetToMeter(userInput)} meters`;
    lengthSection.append(paragraphOne);
    
    paragraphTwo.textContent = `${userInput} liters = ${literToGallon(userInput)} gallons | ${userInput} gallons = ${gallonToLiter(userInput)} liters`;
    volumeSection.append(paragraphTwo);
    
    paragraphThree.textContent = `${userInput} kilos = ${kiloToPound(userInput)} pounds | ${userInput} pounds = ${poundToKilo(userInput)} kilos`;
    massSection.append(paragraphThree);
})

function meterToFeet(value){
    return (value * 3.281).toFixed(3);
}

function feetToMeter(value){
    return (value * 0.305).toFixed(3);
}

function literToGallon(value){
    return (value * 0.264).toFixed(3);
}

function gallonToLiter(value){
    return (value * 3.785).toFixed(3);
}

function kiloToPound(value){
    return (value * 2.204).toFixed(3);
}

function poundToKilo(value){
    return (value * 0.454).toFixed(3);
}