document.getElementById("transfer-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const userAccountNumber = getValueByID("User-account-number-field");
    const validationUserNumber = mobileNumberVerification(userAccountNumber);
    const transferMoneyPinNumber = getValueByID("pin-number-to-transfer-money-field");
    const ammountToTransfer = getValueByID("amount-to-transfer-out-field");
    const converTedAmmountTransfer = parseFloat(ammountToTransfer);
    const converTedCurrentAmmount = convertInnerText("current-money");

    if (validationUserNumber === true) {

        if (transferMoneyPinNumber === "1422") {
            if (converTedAmmountTransfer<=converTedCurrentAmmount) {
                let confirmation = confirm("Please confirm to  Transfer Money");
                if (confirmation) {
                    const transMoney = converTedCurrentAmmount - converTedAmmountTransfer;
                    setInnerText("current-money", transMoney);
                    alert("Successful");
                }
            }
            else {
                alert("Please enter a valid amount to transfer money and try again.");
                document.getElementById('amount-to-transfer-out-field').value = "";
            }
        }
        else {
            alert("Please Enter a Valid Pin Number");
            document.getElementById('pin-number-to-transfer-money-field').value = "";
        }
    }
    else{
        document.getElementById('User-account-number-field').value = "";
    }
})


