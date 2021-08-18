document.getElementById('case-increase').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const caseInputValue = parseInt(caseInput.value) + 1;
    caseInput.value = caseInputValue;

    ///case total 

    const caseTotal = document.getElementById('case-total');
    const caseTotalValue = caseTotal.innerText;
    caseTotal.innerText = caseInput.value * 59;


    /////// case update in chart

    const caseInputIn = document.getElementById('case-input');
    const caseInputInValue = parseInt(caseInputIn.value);
    const caseInputInValueCalculate = caseInput.value * 59;
    console.log(caseInputInValueCalculate);
})




document.getElementById('case-decrease').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    const casevalue = caseInput.value;
    if (casevalue > 0) {
        const caseInputValue = parseInt(casevalue) - 1;
        caseInput.value = caseInputValue;
    }

    ///case total

    const caseTotal = document.getElementById('case-total');
    const caseTotalValue = caseTotal.innerText;
    caseTotal.innerText = caseInput.value * 59;

    ///// case update in chart//

    const caseInputIn = document.getElementById('case-input');
    const caseInputInValue = parseInt(caseInputIn.value);
    const caseInputInValueCalculate = caseInput.value * 59;
    console.log(caseInputInValueCalculate);

})

///phone section start here///

document.getElementById('phone-increase').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-input');
    const phoneInputValue = parseInt(phoneInput.value) + 1;
    phoneInput.value = phoneInputValue;

    //update phone price

    const phonePrice = document.getElementById('phone-total');
    const phoneValueText = phonePrice.innerText;
    const phonePriceInTotal = phoneInput.value * 1219;
    phonePrice.innerText = phonePriceInTotal

    /// added in chart///

    const phoneInputIn = document.getElementById('phone-input');
    const phoneInputInValue = parseInt(phoneInputIn.value);
    const phonePriceIn = phoneInput.value * 1219;
    console.log(phonePriceIn);
    calculateTotal()

})

///////phone Section is start Here ////

document.getElementById('phone-decrease').addEventListener('click', function () {
    const phoneInput = document.getElementById('phone-input');
    const phoneValue = phoneInput.value;
    if (phoneValue > 0) {
        const phoneInputValue = parseInt(phoneValue) - 1;
        phoneInput.value = phoneInputValue;
    }

    //update phone price

    const phonePrice = document.getElementById('phone-total');
    const phoneValueText = phonePrice.innerText;
    const phonePriceInTotal = phoneInput.value * 1219;
    phonePrice.innerText = phonePriceInTotal

    /// added in chart///

    const phoneInputIn = document.getElementById('phone-input');
    const phoneInputInValue = parseInt(phoneInputIn.value);
    const phonePriceIn = phoneInput.value * 1219;
    console.log(phonePriceIn);
})