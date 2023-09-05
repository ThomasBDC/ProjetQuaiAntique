let srcFromAjax = '<img src=x onerror="window.location.replace(\'https://google.com\')">';

function recupImageTitre(){
    // This won't execute
    var div = document.querySelector('#titre-image-1');
    //div.innerHTML = '<script>alert("XSS Attack");</script>';

    // This WILL run
    //div.innerHTML = '<script deferred>alert("XSS Attack");</script>';

    // // This will, too
    div.innerHTML = sanitizeHTML(srcFromAjax);
}

recupImageTitre();