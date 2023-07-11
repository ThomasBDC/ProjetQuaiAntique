class Route {
    constructor(url, title, pathHtml, pathJS = "", pathCSS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.pathCSS = pathCSS;
    }
}

const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    LoadContentPage();
};


const route404 = new Route("404", "Page introuvable", "/pages/404.html");

const routes = [
    new Route("/", "Restaurant Quai Antique", "/pages/home.html"),
];

const getRouteByUrl = (url) => {
    let currentRoute = null;
    routes.forEach(element => {
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
    const html = await fetch(getRouteByUrl(path).pathHtml).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;

    //Ajout du js
    if(getRouteByUrl(path).pathJS != ""){
        var scriptTag = document.createElement('script');
        scriptTag.setAttribute("type","text/javascript");
        scriptTag.setAttribute("src", getRouteJS());
    
        document.querySelector("body").appendChild(scriptTag);
    }
};

window.onpopstate = LoadContentPage;
window.route = routeEvent;
LoadContentPage();
