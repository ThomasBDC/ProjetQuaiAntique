const btnConnexion = document.getElementById("validConnexionForm");
const formConnexion = document.getElementById("connexionFormulaire");
const inputMail = document.getElementById('exampleInputEmail1');
const inputPassword = document.getElementById('exampleInputPassword1');
btnConnexion.addEventListener("click", checkCredentials);

function checkCredentials(){
    //il faudra ici faire un vrai appel à l'api pour vérifier les credentials en base de données
    //en attendant, nous simulons une connexion avec une credential valide en dur
    var data = new FormData(formConnexion);
    let email = data.get("email");
    let pwd = data.get("password");
    if(email = "tony@stark.com" && pwd == "password123"){
        //La connexion est valide
        inputMail.classList.add("is-valid");
        inputPassword.classList.add("is-valid");
        
        //Imaginons un token 
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJRdWFpQW50aXF1ZSIsImlhdCI6MTY5MDQ1ODUxOCwiZXhwIjoxNzIxOTk0NTE4LCJhdWQiOiJ3d3cucXVhaWFudGlxdWUuY29tIiwic3ViIjoidGVzdEBtYWlsLmNvbSIsIkdpdmVuTmFtZSI6InRlc3QiLCJTdXJuYW1lIjoidGVzdCIsIkVtYWlsIjoidGVzdEBtYWlsLmNvbSIsIlJvbGUiOiJhZG1pbiJ9.7HeIgtKdbFkaG9tZ6hqvc_ODa_hm15KaFOsMx5z9jro";

        //TODO : Ne plus stocker cette information en cookie visible
        setCookie("accesstoken",token,7);
        setCookie("role","admin",7);
        window.location.replace("/");

    }
    else{
        //Connexion invalide
        inputMail.classList.add("is-invalid");
        inputPassword.classList.add("is-invalid");
    }
}
