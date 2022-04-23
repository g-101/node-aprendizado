const url = require("url"); //  módulo url serve para decompor a url
const address = "https://www.meusite.com.br/catalog?produtos=cadeira";
// url identifica e localiza o recurso
// todas as URLs são URIs
// Nem todas URIs são URLs
// URLs não são URNs
const parsedURL = new url.URL(address);
console.log(parsedURL.host);
console.log(parsedURL.pathname);
console.log(parsedURL.protocol);
console.log(parsedURL.search);
console.log(parsedURL.searchParams);
