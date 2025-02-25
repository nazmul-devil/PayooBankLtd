document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const selectABank = getValueByID("bank-select-field");
    const bankAccountNumber = getValueByID("account-number-field");
    const validationNumber = mobileNumberVerification(bankAccountNumber);
    const addMoneyPinNumber = getValueByID("pin-number-field");
    const ammountToAdd = getValueByID("amount-to-add-field");
    const converTedAmmount = parseFloat(ammountToAdd);
    const converTedCurrentAmmount = convertInnerText("current-money");

    if (validationNumber === true) {

        if (addMoneyPinNumber === "1422") {
           if(converTedAmmount>0){
            let confirmation = confirm("Please confirm to add money");
            if(confirmation){
                const sum = converTedAmmount + converTedCurrentAmmount;
                setInnerText("current-money", sum);
            }
           }
           else{
            alert("Please add a valid amount of money");
           }
        }
        else{
            alert("Please Enter a Valid Pin Number");
        }
    }
    document.getElementById('account-number-field').value="";
    document.getElementById('pin-number-field').value="";
    document.getElementById('amount-to-add-field').value="";
    
})


