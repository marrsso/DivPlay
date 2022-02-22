
var prevColor
var currColor

var customColorInput
var changeColorTypeButton
var customColorButton
var div
var randomColorButton
var randomNumberButton

function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function loader() {
    div = document.getElementById("myDiv")
    div.style.backgroundColor = randomColor();
    prevColor = div.style.backgroundColor;

    customColorInput = document.getElementById("customColorInput")

    changeColorTypeButton = document.getElementById("changeColorType")
    customColorButton = document.getElementById("customColorButton")
    randomColorButton = document.getElementById("changeColorButton")
    randomNumberButton = document.getElementById("randomNumberButton")

    $(changeColorTypeButton).hide()
    $(customColorInput).hide()

}

//============================================================================================

function showPrevColor() {
    currColor = div.style.backgroundColor;
    div.style.backgroundColor = prevColor;
}

function showOriginalColor() {
    div.style.backgroundColor = currColor;
}

//============================================================================================

var colorInterval;
var colorInterCounter = 0;

function randomColor() {
    var r = randomInt(0, 255);
    var g = randomInt(0, 255);
    var b = randomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor() {
    randomColorButton.disabled = true
    colorInterCounter= 0;
    prevColor = document.getElementById("myDiv").style.backgroundColor;
    colorInterval = setInterval(intervalColor, 100);
}

function intervalColor() {
    colorInterCounter++;
    div.style.backgroundColor = randomColor();
    if (colorInterCounter === 9) {
        clearInterval(colorInterval);
        randomColorButton.disabled = false
    }
}
//============================================================================================

var isCustom = false
var customColorInputType = "text"

function customColor() {
    if (!isCustom) {
        $(customColorInput).show()
        $(changeColorTypeButton).show();
        $(customColorButton).addClass("activeButton")
        isCustom = true;
        return
    }
    $(customColorInput).hide()
    $(changeColorTypeButton).hide()
    $(customColorButton).removeClass("activeButton")
    isCustom = false

}

function isValidColor(customColor) {
    const s = new Option().style;
    s.color = customColor;
    return s.color !== '';
}

function submitCustomColor() {
    var customColor = customColorInput.value
    if (customColorInputType === "text") {
        customColorInput.value = "";
    }
    customColor = customColor.toLowerCase().trim();
    customColor = customColor.replace(/\s+/g, '');
    if (customColor === "" || !isValidColor(customColor)) {
        alert("Not a valid color")
        return;
    }
    prevColor = div.style.backgroundColor;
    div.style.backgroundColor = customColor;
}


function changeColorType() {
    if (customColorInputType === "text") {
        customColorInput.type = "color"
        customColorInput.style.width = "240px"
        customColorInput.style.height = "40px"
        customColorInput.style.backgroundColor = "white"
        customColorInputType = "color"
        return
    }
    customColorInput.type = "text"
    customColorInput.style.width = "216px"
    customColorInput.style.height = ""
    customColorInput.value = ""
    customColorInputType = "text"
}
//============================================================================================

var numberInterval
var numberInterCounter = 0

function randomNumber(){

}