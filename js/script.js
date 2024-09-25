// Get references to buttons and sections
const sendMoneyBtn = document.getElementById('sendMoneyBtn');
const checkBalanceBtn = document.getElementById('checkBalanceBtn');
const payBillBtn = document.getElementById('payBillBtn');
const sendMoneySection = document.getElementById('sendMoneySection');
const checkBalanceSection = document.getElementById('checkBalanceSection');
const payBillSection = document.getElementById('payBillSection');

// Show or hide sections based on menu clicks
sendMoneyBtn.addEventListener('click', function() {
    hideAllSections();
    sendMoneySection.style.display = 'block';
});

checkBalanceBtn.addEventListener('click', function() {
    hideAllSections();
    checkBalanceSection.style.display = 'block';
});

payBillBtn.addEventListener('click', function() {
    hideAllSections();
    payBillSection.style.display = 'block';
});

// Hide all sections
function hideAllSections() {
    sendMoneySection.style.display = 'none';
    checkBalanceSection.style.display = 'none';
    payBillSection.style.display = 'none';
}

// Send Money
document.getElementById('sendMoneySubmit').addEventListener('click', function() {
    const recipient = document.getElementById('recipientNumber').value;
    const amount = document.getElementById('amount').value;
    
    if (recipient && amount) {
        document.getElementById('sendMoneyMessage').textContent = `Money sent to ${recipient} successfully!`;
    } else {
        document.getElementById('sendMoneyMessage').textContent = 'Please fill all fields.';
    }
});

// Pay Bill
document.getElementById('payBillSubmit').addEventListener('click', function() {
    const billAmount = document.getElementById('billAmount').value;

    if (billAmount) {
        document.getElementById('payBillMessage').textContent = `Bill of $${billAmount} paid successfully!`;
    } else {
        document.getElementById('payBillMessage').textContent = 'Please enter the bill amount.';
    }
});
