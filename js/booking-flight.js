function ticketPurchaseQuantity(quantity, isIncrease) {
    const count = getInputValue(quantity);
    let newCount = count;
    if (isIncrease == true) {
        newCount = newCount + 1;
    }
    else if (isIncrease == false && count > 0) {
        newCount = newCount - 1;
    }
    console.log(newCount);
    document.getElementById(quantity + '-count').value = newCount;

    calculateGrandTotal();
}
function calculateGrandTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyClassCount = getInputValue('economy-class');

    const subTotal = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('sub-total').innerText = '$ ' + subTotal;

    const tax = Math.round(subTotal * .1);
    document.getElementById('vat').innerText = '$ ' + tax;

    const grandTotal = subTotal + tax;
    document.getElementById('grand-total').innerText = '$ ' + grandTotal;
}
function getInputValue(quantity) {
    const quantityInput = document.getElementById(quantity + '-count');

    const quantityCount = parseInt(quantityInput.value);

    return quantityCount;
}
