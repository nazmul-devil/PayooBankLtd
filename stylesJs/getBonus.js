const converTedCurrentAmmount = convertInnerText("current-money");
let redemCoupon = 0;

document.getElementById("get-bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const couponNumberInInput = document.getElementById("bonus-coupon-number-field").value;
    const bonusCouponCode = couponVerification(couponNumberInInput);
    if (typeof bonusCouponCode === "string") {
        const bonusCouponCodeValue = parseInt(bonusCouponCode);
        const diff = converTedCurrentAmmount + bonusCouponCodeValue;

        setInnerText("current-money", diff);
        redemCoupon++;
        alert("Coupon Code Redeem Successful");


        let div = document.createElement('div');
        const now = new Date();
        div.innerHTML = `
    <div class=" childOfHistory bg-white rounded-lg flex items-center justify-between p-4">
        <div class="flex items-center space-x-2">
            <div class="rounded-full p-4 bg-slate-100 "><img src="assets/wallet1.png" alt=""></div>
            <div>
                <h1 class="text-lg font-semibold">Coupon Redemption</h1>
                <p>Amount : <span class="text-green-600">${bonusCouponCodeValue}</span></p>
                <p>Time : <span>${now}</span></p>
            </div>
        </div>
        <div class="mr-5"><i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>
    
    `
        document.getElementById("transaction-history").appendChild(div);

    }
    else {
        alert("Please Enter a Valid Coupon Code.");
        document.getElementById("bonus-coupon-number-field").value = "";
    }

    if (redemCoupon >= 1) {
        document.getElementById("bonus-coupon-number-field").value = "";
    }
})


