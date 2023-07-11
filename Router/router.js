import Route from "./Route.js";
import allRoutes from "./allRoutes.js";

const route404 = new Route("404", "Page introuvable", "/pages/404.html");

const getRouteByUrl = (url) => {
    let currentRoute = null;
    allRoutes.forEach(element => {
        if(element.url == url){
            currentRoute = element;
        }
    });
    if(currentRoute != null){
        return currentRoute;
    }
    else{
        return route404;
    }
}

const LoadContentPage = async () => {
    const path = window.location.pathname;
    //Ajout de l'html
    const actualRoute = getRouteByUrl(path);
    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    //Ajout du js
    if(actualRoute.pathJS != ""){
        var scriptTag = document.createElement('script');
        scriptTag.setAttribute("type","text/javascript");
        scriptTag.setAttribute("src", actualRoute.pathJS);
    
        document.querySelector("body").appendChild(scriptTag);
    }

    //Change Title
    document.title = actualRoute.title;
};

const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    LoadContentPage();
};

window.onpopstate = LoadContentPage;
window.route = routeEvent;
LoadContentPage();
