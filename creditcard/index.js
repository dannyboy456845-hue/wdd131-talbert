const cvcInput = document.getElementById('cvc');
const cvvInput = document.getElementById('cvv');

cvcInput.addEventListener('input', (e) => {
    cvvInput.value = e.target.value;
});

cvvInput.addEventListener('input', (e) => {
    cvcInput.value = e.target.value;
});

const cardNumberInput = document.getElementById('cardNumber');
cardNumberInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
});