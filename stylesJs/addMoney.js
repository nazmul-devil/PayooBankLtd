document.getElementById("log-out-btn").addEventListener("click",function(event){
    event.preventDefault();
    const confirmLogOut=confirm("Are you sure to want Log Out?")
    if(confirmLogOut){
        window.location.href="index.html";
    }
})