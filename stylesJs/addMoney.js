document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const selectABank = getValueByID("bank-select-field");
    const bankAccountNumber = getValueByID("account-number-field");
    const validationNumber = mobileNumberVerification(bankAccountNumber);
    const addMoneyPinNumber = getValueByID("pin-number-field");
    const ammountToAdd = getValueByID("amount-to-add-field");
    const converTedAmmount = parseFloat(ammountToAdd);
    const converTedCurrentAmmount = convertInnerText("current-money");
let addMoneyCounter = 0;
    if (validationNumber === true) {

        if (addMoneyPinNumber === "1422") {
           if(converTedAmmount>0){
            let confirmation = confirm("Please confirm to add money");
            if(confirmation){
                const sum = converTedAmmount + converTedCurrentAmmount;
                setInnerText("current-money", sum);
                addMoneyCounter++;
                alert("Successful");
                
                let div=document.createElement('div');
                const now=new Date();
                div.innerHTML=`
                <div class="childOfHistory bg-white rounded-lg flex items-center justify-between p-4">
                    <div class="flex items-center space-x-2">
                        <div class="rounded-full p-4 bg-slate-100 "><img src="assets/wallet1.png" alt=""></div>
                        <div>
                            <h1 class="text-lg font-semibold">Add Money</h1>
                            <p>${selectABank}<br>Account Number: <span>${bankAccountNumber}</span><br>Amount : <span class="text-green-600">${ammountToAdd}</span></p>
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
           else{
            alert("Please add a valid amount of money");
            document.getElementById('amount-to-add-field').value="";
           }
        }
        else{
            alert("Please Enter a Valid Pin Number");
            document.getElementById('pin-number-field').value="";
        }
    }
    else{
        document.getElementById('account-number-field').value="";
    } 
    
    
    if (addMoneyCounter >= 1){
        document.getElementById('account-number-field').value = "";
        document.getElementById('pin-number-field').value = "";
        document.getElementById('amount-to-add-field').value = "";
    }
})


