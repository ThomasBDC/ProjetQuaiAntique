function setToken(token){
    setCookie("accesstoken", token, 7);
}

function getToken(){
    return getCookie("accesstoken");
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function logout(){
    eraseCookie("accesstoken");
    eraseCookie("role");
    window.location.replace("/");
}

function isConnected(){
    if(getToken() == null || getToken() == undefined)
    {
        return false;
    }
    else{
        return true;
    }
}

function getRole(){
    return getCookie("role");
}

function showAndHideElementsOnConnexion(){
    let userConnected = isConnected();
    let role = getRole();
    
    let allElements = document.querySelectorAll('[data-show]');

    allElements.forEach(element => {
        switch (element.dataset.show) {
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || role != "client"){
                    element.classList.add("d-none");
                }
                break;
            }
    });
}

var sanitizeHTML = function (str) {
	var temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
};


function setCookieJWT(value) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (7*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = "JWT=" + (value || "")  + expires + "; path=/; HttpOnly; Secure ";
}