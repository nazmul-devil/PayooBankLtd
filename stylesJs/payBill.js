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




                    let div = document.createElement('div');
                    const now = new Date();
                    div.innerHTML = `
                    <div class=" childOfHistory bg-white rounded-lg flex items-center justify-between p-4">
                        <div class="flex items-center space-x-2">
                            <div class="rounded-full p-4 bg-slate-100 "><img src="assets/wallet1.png" alt=""></div>
                            <div>
                                <h1 class="text-lg font-semibold">Pay Bill</h1>
                                <p>${selectABank}<br>Biller Account Number: <span>${billerAccountNumber}</span><br>Amount : <span class="text-red-600">${ammountToPay}</span></p>
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

    if (billerNumber >= 1) {
        document.getElementById('biller-account-number-field').value = "";
        document.getElementById('pay-bill-pin-number-field').value = "";
        document.getElementById('amount-to-pay-bill-field').value = "";
    }
})


