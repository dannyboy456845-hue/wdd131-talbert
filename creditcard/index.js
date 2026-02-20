const cvcInput = document.getElementById('cvc');
const cvvInput = document.getElementById('cvv');
const cardForm = document.getElementById('cardForm');
const errorMessage = document.getElementById('error-message');

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

cardForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errorMessage.textContent = '';
    
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    
    if (!month || !year) {
        errorMessage.textContent = 'Please enter expiration date.';
        return;
    }
    
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear() % 100;
    
    const expMonth = parseInt(month);
    const expYear = parseInt(year);
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
        errorMessage.textContent = 'Your credit card has expired. please enter a valid credit card.';
        return;
    }
    
    errorMessage.style.color = '#2e7d32';
    errorMessage.textContent = 'Card validated successfully!';
});