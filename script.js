
const firstValue = document.getElementById("first_value")
const secondValue = document.getElementById("second_value")
const operator = document.getElementById("operator")
const resCalc = document.getElementById("res_calc")

const database = [];

function calc() {

    switch (operator.value) {
        case "+":
            resCalc.textContent = (+firstValue.value + +secondValue.value);
            break;
        case "-":
            resCalc.textContent = (+firstValue.value - +secondValue.value);
            break;
        case "/":
            resCalc.textContent = (+firstValue.value / +secondValue.value);
            break;
        case "*":
            resCalc.textContent = (+firstValue.value * +secondValue.value);
            break;
    }

}

const itemInput = document.getElementById("item_input")
const sumItem = document.getElementById("sum_item")
const arrayResult = document.getElementById("array_result")

function addItem() {
    const item = itemInput.value;
    if (!isNaN(item)) {
        database.push(item);
    } else {
        alert("NOT A NUMBER!")
    }

    let x = 0;
    for (i = 0; i < database.length; i++) {
        x += +database[i];
        sumItem.textContent = x;
    }

    arrayResult.textContent = database;
}

const numberInput = document.getElementById("number_input")
const reverseResult = document.getElementById("reverse_result")

function reverseNumber() {
    reverseResult.textContent = numberInput.value.split("").reverse().join("");
}















