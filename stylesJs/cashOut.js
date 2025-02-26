document.getElementById("cash-out-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const agentAccountNumber = getValueByID("agent-number-field");
    const validationAgentNumber = mobileNumberVerification(agentAccountNumber);
    const cashOutPinNumber = getValueByID("pin-number-to-cash-out-field");
    const ammountToCashOut = getValueByID("amount-to-cash-out-field");
    const converTedAmmountCashOut = parseFloat(ammountToCashOut);
    const converTedCurrentAmmount = convertInnerText("current-money");
    let cashOutCounter = 0;
    if (validationAgentNumber === true) {

        if (cashOutPinNumber === "1422") {
            if (converTedAmmountCashOut <= converTedCurrentAmmount) {
                let confirmation = confirm("Please confirm to  Cash Out");
                if (confirmation) {
                    const diff = converTedCurrentAmmount - converTedAmmountCashOut;
                    setInnerText("current-money", diff);
                    cashOutCounter++;
                    alert("Successful");


                    let div = document.createElement('div');
                    const now = new Date();
                    div.innerHTML = `
                <div class="childOfHistory bg-white rounded-lg flex items-center justify-between p-4">
                    <div class="flex items-center space-x-2">
                        <div class="rounded-full p-4 bg-slate-100 "><img src="assets/wallet1.png" alt=""></div>
                        <div>
                            <h1 class="text-lg font-semibold">Add Money</h1>
                            <p>Cash Out: <span>${agentAccountNumber}</span><br>Amount : <span class="text-red-600">${ammountToCashOut}</span></p>
                            <p>Time : <span>${now}</span></p>
                        </div>
                    </div>
                    <div class="mr-5"><i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
                
                `
                    document.getElementById("transaction-history").appendChild(div);

                }
            }
            else {
                alert("You haven't sufficient amount to cash out. Please try again.");
                document.getElementById('amount-to-cash-out-field').value = "";
            }
        }
        else {
            alert("Please Enter a Valid Pin Number");
            document.getElementById('pin-number-to-cash-out-field').value = "";
        }
    }
    else {
        document.getElementById('agent-number-field').value = "";
    }

    if (cashOutCounter >= 1) {
        document.getElementById('agent-number-field').value = "";
        document.getElementById('pin-number-to-cash-out-field').value = "";
        document.getElementById('amount-to-cash-out-field').value = "";
    }

})


