const inputMail = document.getElementById('exampleInputEmail1');
inputMail.addEventListener("keyup", validateMail);

const inputPassword = document.getElementById('exampleInputPassword1');
inputPassword.addEventListener("keyup", validationPassword);

const inputConfirmationPassword = document.getElementById('validPassword');
inputConfirmationPassword.addEventListener("keyup", validateConfirmationPassword);

const btnValidationForm = document.getElementById("btn-validation-form");

function validateMail(e){
    let input = e.currentTarget;
    var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (input.value.match(validRegex)) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
}

function validationPassword(e){
    let input = e.currentTarget;
    var validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (input.value.match(validRegex)) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }
    validateConfirmationPassword();
}

function validateConfirmationPassword(){
    if(inputPassword.value != inputConfirmationPassword.value){
        inputConfirmationPassword.classList.add("is-invalid");
        inputConfirmationPassword.classList.remove("is-valid");
    }
    else{
        inputConfirmationPassword.classList.remove("is-invalid");
        inputConfirmationPassword.classList.add("is-valid");
    }
}