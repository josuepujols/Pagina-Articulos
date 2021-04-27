
$(document).ready(() => {
    let estilos = $('#theme');
    $('#green').click(function() {
        estilos.attr("href", "css/green.css");
    });

    $('#red').click(function() {
        estilos.attr("href", "css/red.css");
    });

    $('#blue').click(function() {
        estilos.attr("href", "css/blue.css");
    });
});