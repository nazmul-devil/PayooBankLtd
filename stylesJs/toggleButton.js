document.getElementById("log-out-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const confirmLogOut = confirm("Are you sure to want Log Out?")
    if (confirmLogOut) {
        window.location.href = "index.html";
    }
})

document.getElementById("add-money-section").style.display = "none";
document.getElementById("cash-out-section").style.display = "none";
document.getElementById("money-transfer-section").style.display = "none";
document.getElementById("get-bonus-section").style.display = "none";
document.getElementById("pay-bill-section").style.display = "none";
document.getElementById("transaction-section").style.display = "none";


document.getElementById("home-button").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("latest-payment-section").style.display = "block";

    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("money-transfer-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";

});



document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("latest-payment-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("money-transfer-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
});



document.getElementById("cash-out").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cash-out-section").style.display = "block";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("latest-payment-section").style.display = "none";
    document.getElementById("money-transfer-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("transfer-money").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("money-transfer-section").style.display = "block";
    document.getElementById("latest-payment-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("get-bonus").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("get-bonus-section").style.display = "block";
    document.getElementById("latest-payment-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("money-transfer-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("pay-bill").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("pay-bill-section").style.display = "block";
    document.getElementById("latest-payment-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("money-transfer-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "none";
});
document.getElementById("transaction-money").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("transaction-section").style.display = "block";
    document.getElementById("latest-payment-section").style.display = "none";
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("money-transfer-section").style.display = "none";
    document.getElementById("get-bonus-section").style.display = "none";
    document.getElementById("pay-bill-section").style.display = "none";
});