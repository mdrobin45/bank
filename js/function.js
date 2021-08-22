// Error handle message
emptyDeposit = document.getElementById('depositRequired'); // Empty deposit field error
var validAmount = document.getElementById('strNotAllow'); // String error
validAmount.style.color = 'red';
validAmount.style.display = 'none';
emptyDeposit.style.color = 'red';
emptyDeposit.style.display = 'none';

var emptyFunds = document.getElementById('insufficientFunds'); // Insufficient funds error
emptyFunds.style.color = 'red';
emptyFunds.style.display = 'none';
// Get Input Value
function getInputValue(inputId, isWithdrawField) {
    if (isWithdrawField == false) {
        const inputField = document.getElementById(inputId);
        const inputFieldValue = parseFloat(inputField.value);
        // const isNumber = typeof (inputFieldValue);
        if (inputFieldValue > 0) {
            const toNumberValue = parseFloat(inputFieldValue);
            inputField.value = '';
            validAmount.style.display = 'none';
            return toNumberValue;
        }
        else if (inputField.value == '') {
            emptyDeposit.style.display = 'block';
            validAmount.style.display = 'none';
        }
        else {
            validAmount.style.display = 'block';
            emptyDeposit.style.display = 'none';
        }
    } else {
        const inputField = document.getElementById(inputId);
        const toNumberValue = parseFloat(inputField.value);
        const mainFonds = document.getElementById('mainAmount').innerText;
        if (toNumberValue <= mainFonds) {
            const inputField = document.getElementById(inputId);
            const toNumberValue = parseFloat(inputField.value);
            inputField.value = '';
            emptyFunds.style.display = 'none';
            return toNumberValue;
        }else{
            emptyFunds.style.display = 'block';
        }

    }
}
// Update Amount
function updateAmount(fieldId, amount, isWithdraw) {
    if (isWithdraw == false) {
        // const valueFromInput = getInputValue(fieldId);
        let field = document.getElementById(fieldId);
        const fieldText = field.innerText;
        let fieldTextToNumber = parseFloat(fieldText);
        field.innerText = fieldTextToNumber + amount;
    }
    else {
        let withdrawField = document.getElementById(fieldId);
        let MainBalance = document.getElementById('mainAmount');
        withdrawField.innerText = parseFloat(withdrawField.innerText) + amount;
        MainBalance.innerText = MainBalance.innerText - amount;
    }
}
// Deposit Button
document.getElementById('depositBtn').addEventListener('click', function () {
    const amount = getInputValue('depositInput', false);
    if (amount > 0) {
        updateAmount('mainAmount', amount, false);
        updateAmount('depositAmount', amount, false);
    }
});
// Withdraw Button
document.getElementById('withdrawBtn').addEventListener('click', function () {
    const amount = getInputValue('withdrawInput', true);
    if (amount > 0) {
        updateAmount('withdrawAmount', amount, true);
    }
});