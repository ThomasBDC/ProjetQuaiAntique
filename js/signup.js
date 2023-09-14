const inputMail = document.getElementById('exampleInputEmail1');
inputMail.addEventListener("keyup", validateForm);

const inputPassword = document.getElementById('exampleInputPassword1');
inputPassword.addEventListener("keyup", validateForm);

const inputConfirmationPassword = document.getElementById('validPassword');
inputConfirmationPassword.addEventListener("keyup", validateForm);

const inputNom = document.getElementById('exampleInputNom');
inputNom.addEventListener("keyup", validateForm);

const inputPrenom = document.getElementById('exampleInputPreNom');
inputPrenom.addEventListener("keyup", validateForm);

const btnValidationForm = document.getElementById("btn-validation-inscription");
const formInscription = document.getElementById("formSignup");

function validateMail(){
    var validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

function validateRequired(input){
    if(input.value != ''){
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        return true;
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateForm(){
    const btn = document.getElementById("btn-validation-inscription");

    const mailOk = validateMail();
    const passwordOk = validationPassword();
    const confirmationPwOk = validateConfirmationPassword();
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    
    if(mailOk && passwordOk && confirmationPwOk && nomOk && prenomOk){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}

btnValidationForm.addEventListener("click", function(){
    let data = new FormData(formInscription);
    let email = data.get("email");
    let pwd = data.get("password");
    let nom = data.get("nom");
    let prenom = data.get("prenom");

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    let raw = JSON.stringify({
        "firstName": nom,
        "lastName": prenom,
        "email": email,
        "password": pwd
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://127.0.0.1:8000/api/registration", requestOptions)
    .then(response =>{
        if(response.status == 201){
            return response.json();
        }
        else{
            alert("Erreur lors de l'inscription");
            console.log(response);
        }
    })
    .then(result =>
    {
        alert("Vous êtes bien inscrit !");
        document.location.href="/login"; 
    })
    .catch(error => {
        alert("Erreur lors de l'inscription");
        console.log('error', error);
    });
});
