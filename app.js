////incraese added number

function caseupdate(product, value, isIncreasing) {
    const getInput = document.getElementById(product + '-input');
    const inputValue = getInput.value;
    let inputInNumber = parseInt(inputValue);
    if (isIncreasing == true) {
        inputInNumber = inputInNumber + 1;
    }
    else if (inputValue > 0) {
        inputInNumber = inputValue - 1
    }
    getInput.value = inputInNumber;
    const caseTotal = document.getElementById(product + '-total');
    const caseTotalInNumber = parseInt(caseTotal.innerText);
    caseTotal.innerText = inputInNumber * value;

    ///call a funtion to calculate//

    calculateTotal()
}

document.getElementById('phone-increase').addEventListener('click', function () {
    caseupdate('phone', 1219, true);
})
document.getElementById('phone-decrease').addEventListener('click', function () {
    caseupdate('phone', false)
})

document.getElementById('case-increase').addEventListener('click', function () {
    caseupdate('case', 59, true);
})

document.getElementById('case-decrease').addEventListener('click', function () {
    caseupdate('case', 59, false);
})

///calculate total Price///

function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productValue = parseInt(productInput.value);
    return productValue;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;

    ///calculate in cart

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;
}