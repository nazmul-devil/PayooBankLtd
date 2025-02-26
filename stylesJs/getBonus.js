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
    }
    else {
        alert("Please Enter a Valid Coupon Code.");
        document.getElementById("bonus-coupon-number-field").value = "";
    }

    if (redemCoupon >= 1) {
        document.getElementById("bonus-coupon-number-field").value = "";
    }
})


