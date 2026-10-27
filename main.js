//  CALCULATOR PROGRAM

const display = document.getElementById("display");

// function that shows the input
const appendToDisplay = (input) => {
    display.value += input
}

// function that clears the input
const clearDisplay = () => {
    display.value = ""
}

// function that runs the calculation
const calculate = () => {
    display.value = eval(display.value)
}