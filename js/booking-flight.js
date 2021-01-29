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

    const vat = Math.round(subTotal * .1);
    document.getElementById('vat').innerText = '$ ' + vat;

    const grandTotal = subTotal + vat;
    document.getElementById('grand-total').innerText = '$ ' + grandTotal;
}


function getInputValue(quantity) {
    const quantityInput = document.getElementById(quantity + '-count');

    const quantityCount = parseInt(quantityInput.value);

    return quantityCount;
}

function successPage() {
    const checkBtn = document.getElementById('form-area');
    checkBtn.style.display = 'none';

    const checkOut = document.getElementById('booking-confirmation-area');
    checkOut.style.display = 'block';
    const firstClassTicketNum = getInputValue('first-class');
    const economyClassTicketNum = getInputValue('economy-class');
    var total = setInnerText('grand-total').innerText;
    

    console.log(total);

     setInnerText('first-class-ticket').innerText =  firstClassTicketNum;
     setInnerText('economy-class-ticket').innerText =  economyClassTicketNum;
     setInnerText('total-price').innerText =  total;
    

}
function setInnerText (id){
 return document.getElementById(id);
}


