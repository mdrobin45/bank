// Error Message for wrong username or password
var ErrorMessage = document.getElementById('failedMessage');
ErrorMessage.style.display = 'none';
ErrorMessage.style.color = 'red';

// username required
var userRequired = document.getElementById('usernameRequired');
userRequired.style.color = 'red';
userRequired.style.display = 'none';

// password required
var passRequired = document.getElementById('pwdRequired');
passRequired.style.color = 'red';
passRequired.style.display = 'none';

// Login by button click
document.getElementById('loginBtn').addEventListener('click', function () {
    var emailInputValue = document.getElementById('userEmail').value;
    var pwdInputValue = document.getElementById('userPwd').value;
    const email = 'bank@gmail.com';
    const pwd = 'abc123';
    // Login Condition
    if (emailInputValue == email && pwdInputValue == pwd) {
        window.location.href = 'banking.html';
        ErrorMessage.style.display = 'none';
    }
    else {
        ErrorMessage.style.display = 'block';
    }

    // Email is Required
    if (emailInputValue == '') {
        userRequired.style.display = 'block';
        ErrorMessage.style.display = 'none';
    } else {
        userRequired.style.display = 'none';
    }

    // Password is Required
    if (pwdInputValue == '') {
        passRequired.style.display = 'block';
        ErrorMessage.style.display = 'none';
    } else {
        passRequired.style.display = 'none';
    }
});

// Login with keyboard Enter
document.getElementById('userEmail').addEventListener('keyup', function (enter) {
    var emailInputValue = document.getElementById('userEmail').value;
    var pwdInputValue = document.getElementById('userPwd').value;
    const email = 'bank@gmail.com';
    const pwd = 'abc123';
    // Login Condition
    if (enter.keyCode == 13) {
        document.getElementById('loginBtn').click(function () {
            if (emailInputValue == email && pwdInputValue == pwd) {
                window.location.href = 'banking.html';
                ErrorMessage.style.display = 'none';
            }
            else {
                ErrorMessage.style.display = 'block';
            }

            // Email is Required
            if (emailInputValue == '') {
                userRequired.style.display = 'block';
                ErrorMessage.style.display = 'none';
            } else {
                userRequired.style.display = 'none';
            }

            // Password is Required
            if (pwdInputValue == '') {
                passRequired.style.display = 'block';
                ErrorMessage.style.display = 'none';
            } else {
                passRequired.style.display = 'none';
            }
        });
    }
});
document.getElementById('userPwd').addEventListener('keyup', function (enter) {
    var emailInputValue = document.getElementById('userEmail').value;
    var pwdInputValue = document.getElementById('userPwd').value;
    var email = 'robin4500bd@gmail.com';
    var pwd = 'abc123';
    // Login Condition
    if (enter.keyCode == 13) {
        document.getElementById('loginBtn').click(function () {
            if (emailInputValue == email && pwdInputValue == pwd) {
                window.location.href = 'banking.html';
                ErrorMessage.style.display = 'none';
            }
            else {
                ErrorMessage.style.display = 'block';
            }

            // Email is Required
            if (emailInputValue == '') {
                userRequired.style.display = 'block';
                ErrorMessage.style.display = 'none';
            } else {
                userRequired.style.display = 'none';
            }

            // Password is Required
            if (pwdInputValue == '') {
                passRequired.style.display = 'block';
                ErrorMessage.style.display = 'none';
            } else {
                passRequired.style.display = 'none';
            }
        });
    }
});
