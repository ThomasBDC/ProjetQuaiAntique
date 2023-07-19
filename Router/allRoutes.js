import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/login", "Connexion", "/pages/connexion.html", ["disconnected"], "js/connexion.js"),
    new Route("/signup", "Inscription", "/pages/signup.html", ["disconnected"],"js/signup.js"),
    new Route("/account", "Mon compte", "/pages/account.html", ["client", "admin"]),
    new Route("/allBook", "Les réservation", "/pages/book/allBook.html", ["client", "admin"]),
    new Route("/book", "Réserver", "/pages/book/book.html", ["client", "admin"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
