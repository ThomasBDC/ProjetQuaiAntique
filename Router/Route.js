export default class Route {
    constructor(url, title, pathHtml, pathJS = "", pathCSS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.pathCSS = pathCSS;
    }
}