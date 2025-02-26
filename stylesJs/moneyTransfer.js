document.getElementById("transfer-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const userAccountNumber = getValueByID("User-account-number-field");
    const validationUserNumber = mobileNumberVerification(userAccountNumber);
    const transferMoneyPinNumber = getValueByID("pin-number-to-transfer-money-field");
    const ammountToTransfer = getValueByID("amount-to-transfer-out-field");
    const converTedAmmountTransfer = parseFloat(ammountToTransfer);
    const converTedCurrentAmmount = convertInnerText("current-money");
let transferCounter = 0;
    if (validationUserNumber === true) {

        if (transferMoneyPinNumber === "1422") {
            if (converTedAmmountTransfer <= converTedCurrentAmmount) {
                let confirmation = confirm("Please confirm to  Transfer Money");
                if (confirmation) {
                    const transMoney = converTedCurrentAmmount - converTedAmmountTransfer;
                    setInnerText("current-money", transMoney);
                    transferCounter++;
                    alert("Successful");
                    


                    let div = document.createElement('div');
                    const now = new Date();
                    div.innerHTML = `
                <div class="childOfHistory bg-white rounded-lg flex items-center justify-between p-4">
                    <div class="flex items-center space-x-2">
                        <div class="rounded-full p-4 bg-slate-100 "><img src="assets/wallet1.png" alt=""></div>
                        <div>
                            <h1 class="text-lg font-semibold">Transfer Money</h1>
                            <p>Cash Out: <span>${userAccountNumber}</span><br>Amount : <span class="text-red-600">${ammountToTransfer}</span></p>
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
                alert("Sorry,you haven't sufficient amount to transfer money. Please add money and try again.");
                document.getElementById('amount-to-transfer-out-field').value = "";
            }
        }
        else {
            alert("Please Enter a Valid Pin Number");
            document.getElementById('pin-number-to-transfer-money-field').value = "";
        }
    }
    else {
        document.getElementById('User-account-number-field').value = "";
    }
    if (transferCounter >= 1) {
        document.getElementById('User-account-number-field').value = "";
        document.getElementById('pin-number-to-transfer-money-field').value = "";
        document.getElementById('amount-to-transfer-out-field').value = "";
    }

})


