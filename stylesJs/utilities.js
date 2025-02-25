function getValueByID(id){
const valueByID = document.getElementById(id).value;
return valueByID;
};
function convertInnerText (id){
    const currentText = document.getElementById(id).innerText;
    const currentTextNumber = parseFloat(currentText)
    return currentTextNumber;
}

function setInnerText (id,value){
document.getElementById(id).innerText=value;
}


function mobileNumberVerification(string){
    const mobileNumber = string.length;
    if(mobileNumber===11){
        for(let number of string){
            if(isNaN(number)){
                alert("Please Enter a Valid Account Number");
            }
            else{
                return true;
            }
        }
    }
    else{
        alert ("Please Enter a Valid Account Number");
    }
}