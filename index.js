const display = document.getElementById("display")
const calculateBtn = document.getElementById("calculateBtn")
const clearBtn = document.getElementById("clearBtn")
const plusMinusBtn = document.getElementById("plusMinusBtn")
const percentBtn = document.getElementById("percentBtn")

function appendToDisplay(input) {
    display.value += input
}

plusMinusBtn.addEventListener("click", function() {
    
    if(display.value === -display.value) {
        display.value = display.value
    }
    else {
        display.value = -display.value
    }
})

percentBtn.addEventListener("click", function() {
    percentFormula = display.value / 100
    display.value = percentFormula
})

calculateBtn.addEventListener("click", function() {

    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.value = "Error"
    }
    
})

clearBtn.addEventListener("click", function() {
    display.value = ""
})