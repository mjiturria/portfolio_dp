// Para que jQuery busque un elemento, usamos los mismos selectores que en CSS,
// poniendo el selector dentro de $()
// Ejemplo: $('.clase1'), $('nav'), $('body section')

// Para que funcione, todo el código de JavaScript,
// se debe ejecutar al cargar completamente el documento (cuando esta 'ready')
$(document).ready(function(){
  // Acá la página está totalmente cargada

  // Cuando hago click en un elemento de id services-link, ejecuta esta función
  $('#services-link').click(function() {

    // Dentro de la función digo que haga scroll hasta la section services
    $('.services').animatescroll({
      padding: 50 // Le agrego un padding respecto a donde va a parar, para que se vea bien
    });

    $('.navbar-toggle').click(); // Hago click en el boton del menu para esconderlo
  });

  // Hacer lo mismo para todos los links que se quiera scrollear automáticamente
});