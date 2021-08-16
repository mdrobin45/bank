// Deposit input field validation
var emptyDeposit = document.getElementById('depositRequired'); // Empty deposit field error
var validAmount = document.getElementById('strNotAllow'); // String error
validAmount.style.color = 'red';
validAmount.style.display = 'none';
emptyDeposit.style.color = 'red';
emptyDeposit.style.display = 'none';

function getElement(SectionId) {
    let Element = document.getElementById(SectionId);
    return Element;
}
// Input value function
function inputValue(inputFieldId) {
    let values = document.getElementById(inputFieldId).value;
    return values;
}

// Deposit and Main Balance
getElement('depositBtn').addEventListener('click', function () {
    let userDepositAmount = Number(document.getElementById('depositInput').value);
    if (userDepositAmount > 0) {
        if (userDepositAmount !== '') {
            // Add deposited amount to deposit section
            getElement('depositAmount').innerText = userDepositAmount;

            // Total main balance
            getElement('mainAmount').innerText = Number(getElement('mainAmount').innerText) + Number(getElement('depositAmount').innerText); 

            // Clear input value after successful deposit
            document.getElementById('depositInput').value = '';

            // Hide empty field error
            emptyDeposit.style.display = 'none';
        }
        else {
            emptyDeposit.style.display = 'block'; // Show empty field error
        }

        // Hide error after right input
        validAmount.style.display = 'none';
    } else {
        // Show error on wrong input
        validAmount.style.display = 'block';

        // Clear input value after wrong input
        document.getElementById('depositInput').value = '';
    }

});

// Withdraw
var emptyFunds = document.getElementById('insufficientFunds'); // Insufficient funds error
emptyFunds.style.color = 'red';
emptyFunds.style.display = 'none';

/******************************/
document.getElementById('withdrawBtn').addEventListener('click', function () {
    let withdrawUserValue = Number(document.getElementById('withdrawInput').value);
    let withdrawBalance = document.getElementById('withdrawAmount');
    let mainBalance = getElement('mainAmount');
    if (mainBalance.innerText > 0 && mainBalance.innerText > withdrawUserValue) {
        // Update withdraw amount
        withdrawBalance.innerText = withdrawUserValue; // Update withdraw balance section

        // Subtract from main balance
        mainBalance.innerText = Number(mainBalance.innerText) - withdrawUserValue;
        emptyFunds.style.display = 'none'; // Hide Insufficient funds error
    } else {
        emptyFunds.style.display = 'block'; // Show Insufficient funds error
    }
    // Clear withdraw field after string error
    getElement('withdrawInput').value = '';
});