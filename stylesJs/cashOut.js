document.getElementById("cash-out-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const agentAccountNumber = getValueByID("agent-number-field");
    const validationAgentNumber = mobileNumberVerification(agentAccountNumber);
    const cashOutPinNumber = getValueByID("pin-number-to-cash-out-field");
    const ammountToCashOut = getValueByID("amount-to-cash-out-field");
    const converTedAmmountCashOut = parseFloat(ammountToCashOut);
    const converTedCurrentAmmount = convertInnerText("current-money");

    if (validationAgentNumber === true) {

        if (cashOutPinNumber === "1422") {
           if(converTedAmmountCashOut<=converTedCurrentAmmount){
            let confirmation = confirm("Please confirm to  Cash Out");
            if(confirmation){
                const diff =converTedCurrentAmmount-converTedAmmountCashOut;
                setInnerText("current-money", diff);
            }
           }
           else{
            alert("You haven't sufficient amount to cash out. Please try again.");
           }
        }
        else{
            alert("Please Enter a Valid Pin Number");
        }
    }
    document.getElementById('agent-number-field').value="";
    document.getElementById('pin-number-to-cash-out-field').value="";
    document.getElementById('amount-to-cash-out-field').value="";
    
})


