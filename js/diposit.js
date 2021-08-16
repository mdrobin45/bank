// Deposit input field validation
var emptyDeposit = document.getElementById('depositRequired'); // Empty deposit field error
var validAmount = document.getElementById('strNotAllow'); // String error
validAmount.style.color = 'red';
validAmount.style.display = 'none';
emptyDeposit.style.color = 'red';
emptyDeposit.style.display = 'none';


// Deposit and Main Balance
var mainBalance = document.getElementById('mainAmount');
document.getElementById('depositBtn').addEventListener('click', function () {
    let userDepositAmount = Number(document.getElementById('depositInput').value);
    if (userDepositAmount > 0) {
        if (userDepositAmount !== '') {
            // Deposit Balance Count
            let lastDeposit = document.getElementById('depositAmount');
            lastDeposit.innerText = userDepositAmount; // Add deposited amount to deposit section

            // Main Balance Count
            mainBalance.innerText = Number(mainBalance.innerText) + Number(lastDeposit.innerText); // Update main balance section
            document.getElementById('depositInput').value = ''; // Clear input value after successful deposit
            emptyDeposit.style.display = 'none'; // Hide empty field error
        }
        else {
            emptyDeposit.style.display = 'block'; // Show empty field error
        }
        validAmount.style.display = 'none'; // Hide error after right input
    } else {
        validAmount.style.display = 'block'; // Show error on wrong input
        document.getElementById('depositInput').value = ''; // Clear input value after wrong input
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
    if (mainBalance.innerText > 0 && mainBalance.innerText > withdrawUserValue) {
        // Update withdraw amount
        withdrawBalance.innerText = withdrawUserValue; // Update withdraw balance section

        // Subtract from main balance
        mainBalance.innerText = Number(mainBalance.innerText) - withdrawUserValue;
        emptyFunds.style.display = 'none'; // Hide Insufficient funds error
    } else {
        emptyFunds.style.display = 'block'; // Show Insufficient funds error
    }
    document.getElementById('withdrawInput').value = ''; // Clear withdraw field after string error
});