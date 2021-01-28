function validateEmail(){
    var inputString = document.getElementById("emailInput").value;

    if (inputString.includes("@") && (inputString.endsWith(".com") || inputString.endsWith(".edu"))){
        document.getElementById("emailValidationMessage").innerHTML = "✅ Email successfully recorded!";
        document.getElementById("emailValidationMessage").style.backgroundColor = "#bbffbb";
    } else {
        document.getElementById("emailValidationMessage").innerHTML = "❌ Invalid email address.";
        document.getElementById("emailValidationMessage").style.backgroundColor = "#ffbbbb";
    }

    document.getElementById("emailValidationMessage").style.display = "block";
}