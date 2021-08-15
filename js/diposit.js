// Deposit input field validation
var emptyDeposit = document.getElementById('depositRequired');
emptyDeposit.style.color = 'red';
emptyDeposit.style.display = 'none';

// Deposit and Main Balance
document.getElementById('depositBtn').addEventListener('click', function () {
    let inputValue =document.getElementById('depositInput').value;
    if ( inputValue !== '') {
        // Deposit Balance Count
        var userDepositAmount = document.getElementById('depositInput').value;
        var lastDeposit = document.getElementById('depositAmount');
        lastDeposit.innerText = Number(userDepositAmount);

        // Main Balance Count
        var mainBalance = document.getElementById('mainAmount');
        mainBalance.innerText = Number(mainBalance.innerText) + Number(lastDeposit.innerText);

        // Clear user input
        document.getElementById('depositInput').value = '';
        emptyDeposit.style.display = 'none';
    }
    else {
        emptyDeposit.style.display = 'block';
    }
});
