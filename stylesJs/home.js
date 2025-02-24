document.getElementById('logIn-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const logInMobileNumber = document.getElementById('login-mobile-number').value;
    const logIn4DigitPin = document.getElementById('login-4-digit-pin').value;
    if (logInMobileNumber.length === 11) {

        for(let num of logInMobileNumber){
            if(isNaN(num)){
                alert("Please Enter Valid Mobile Number");
            }
        }

        if (logIn4DigitPin.length === 4) {
                window.location.href="home.html"
            }
            else {
                alert("Please Enter 4 Digit Valid Pin");
            }
    }
    else {
        alert("Please Enter Valid Mobile Number");
    }
})
