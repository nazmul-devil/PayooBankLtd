document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const selectABank = getValueByID("bank-select-field");
    const billerAccountNumber = getValueByID("biller-account-number-field");
    const validationBillerAccountNumber = mobileNumberVerification(billerAccountNumber);
    const payBillPinNumber = getValueByID("pay-bill-pin-number-field");
    const ammountToPay = getValueByID("amount-to-pay-bill-field");
    const converTedAmmountToPay = parseFloat(ammountToPay);
    const converTedCurrentAmmount = convertInnerText("current-money");
    let billerNumber = 0;
    if (validationBillerAccountNumber === true) {

        if (payBillPinNumber === "1422") {
            if (converTedAmmountToPay <= converTedCurrentAmmount) {
                let confirmation = confirm("Please confirm to pay bill");
                if (confirmation) {
                    const sum = converTedCurrentAmmount - converTedAmmountToPay;
                    setInnerText("current-money", sum);
                    billerNumber++;
                    alert("Successful");
                }
            }
            else {
                alert("You haven't sufficient balance to pay bill");
                document.getElementById('amount-to-pay-bill-field').value = "";
            }
        }
        else {
            alert("Please Enter a Valid Pin Number");
            document.getElementById('pay-bill-pin-number-field').value = "";
        }
    }
    else {
        document.getElementById('biller-account-number-field').value = "";
    }

    if (billerNumber >= 1){
        document.getElementById('biller-account-number-field').value = "";
        document.getElementById('pay-bill-pin-number-field').value = "";
        document.getElementById('amount-to-pay-bill-field').value = "";
    }
})


