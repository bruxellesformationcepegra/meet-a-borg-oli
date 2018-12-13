// On initialise la variable source et on lui injecte le code issu de l'élément qui a l'ID entry-template
let source   = document.getElementById("entry-template").innerHTML;
// On crée une variable template, on applique les fonctionnalités issues des scripts d'Handlebars sur la source qu'on a capturé à la ligne précédente
let template = Handlebars.compile(source);
// On crée une variable html qui injecte les datas de Robots dans le résultat compilé à la ligne 4 par Handlebars.
let html = template(robots);
// On envoie le réusltat côté HTML dans l'élément qui porte la classe "robots"
$(".robots").append(html);

// Fait la liaison entre le data attribute du bouton et la valeur du data-gender des robots
$('.choice button').click(function(){
   let genre = $(this).data("filter");
   $('.robot').hide();
   $('[data-gender='+genre+']').show();
   if (genre == "All") {
    $('.robot').show();
   }
})

let hommes = $('[data-gender="Male"]').length;
let femmes = $('[data-gender="Female"]').length;

$('.hommes').prepend(hommes + " ");
$('.femmes').prepend(femmes + " ");