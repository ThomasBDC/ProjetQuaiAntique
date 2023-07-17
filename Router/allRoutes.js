import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html", "/js/galerie.js"),
    new Route("/login", "Connexion", "/pages/connexion.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/account", "Mon compte", "/pages/account.html"),
    new Route("/allBook", "Les réservation", "/pages/book/allBook.html"),
    new Route("/book", "Réserver", "/pages/book/book.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
