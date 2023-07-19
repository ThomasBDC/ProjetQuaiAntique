const inputMail = document.getElementById('exampleInputEmail1');
inputMail.addEventListener("keyup", validateForm);

const inputPassword = document.getElementById('exampleInputPassword1');
inputPassword.addEventListener("keyup", validateForm);

const inputConfirmationPassword = document.getElementById('validPassword');
inputConfirmationPassword.addEventListener("keyup", validateForm);

const btnValidationForm = document.getElementById("btn-validation-form");

function validateMail(){
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (inputMail.value.match(validRegex)) {
        inputMail.classList.remove("is-invalid");
        inputMail.classList.add("is-valid");
        return true;
    } else {
        inputMail.classList.add("is-invalid");
        inputMail.classList.remove("is-valid");
        return false;
    }
}

function validationPassword(){
    var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (inputPassword.value.match(validRegex)) {
        inputPassword.classList.remove("is-invalid");
        inputPassword.classList.add("is-valid");
        return true;
    } else {
        inputPassword.classList.add("is-invalid");
        inputPassword.classList.remove("is-valid");
        return false;
    }
}

function validateConfirmationPassword(){
    if((inputPassword.value == inputConfirmationPassword.value)){
        inputConfirmationPassword.classList.remove("is-invalid");
        inputConfirmationPassword.classList.add("is-valid");
        return true;
    }
    else{
        inputConfirmationPassword.classList.add("is-invalid");
        inputConfirmationPassword.classList.remove("is-valid");
        return false;
    }
}

function validateForm(){
    const btn = document.getElementById("btn-validation-inscription");

    const mailOk = validateMail();
    const passwordOk = validationPassword();
    const confirmationPwOk = validateConfirmationPassword();
    
    if(mailOk && passwordOk && confirmationPwOk){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
    
}