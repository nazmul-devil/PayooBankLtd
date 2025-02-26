function getValueByID(id) {
    const valueByID = document.getElementById(id).value;
    return valueByID;
};
function convertInnerText(id) {
    const currentText = document.getElementById(id).innerText;
    const currentTextNumber = parseFloat(currentText)
    return currentTextNumber;
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}


function mobileNumberVerification(string) {
    const mobileNumber = string.length;
    if (mobileNumber === 11) {
        for (let number of string) {
            if (isNaN(number)) {
                alert("Please Enter a Valid Account Number");
            }
            else {
                return true;
            }
        }
    }
    else {
        alert("Please Enter a Valid Account Number");
    }
}
function couponVerification(string) {
    const mobileNumber = string.length;
    let bonusMoney = [];
    if (!mobileNumber === 11) {
        alert("Please Enter a Valid Coupon Code.");
        return 0;
    }
    for (let n = 0; n < mobileNumber; n++) {
        if ( n < 4) {
            if (!isNaN(string[n])) {
                alert("Please Enter a Valid Coupon Code.");
                return 0;
            }
        }
        else if (3 < n && n <= 6) {
            if (isNaN(string[n])) {
                alert("Please Enter a Valid Coupon Code.");
                return 0;
            }
        }
        else if (n == 7) {
            if (!isNaN(string[n])) {
                alert("Please Enter a Valid Coupon Code.");
                return 0;
            }
        }
        else if (n > 7 && n < 11) {
            if (isNaN(string[n])) {
                alert("Please Enter a Valid Coupon Code.");
                return 0;
            }
            else {
                bonusMoney.push(string[n]);
            }

        }
       
    }
    return bonusMoney.join("");
}

