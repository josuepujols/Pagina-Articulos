
$(document).ready(() => {

    $('#formulario').submit(() => {
        let name = $('#nombre').val();
        localStorage.setItem("name", name);
    });

    let got_name = localStorage.getItem("name");

    if (got_name != null && got_name != "undefined") {
        let parrafo =  $('#about p');
        parrafo.html("<strong>Bienvenido, " + got_name + ".</strong>");
        parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");
        $("#loggin").hide();

        $('#logout').click(() => {
            $("#loggin").show();
            localStorage.clear();
            location.reload();
        });
    }   
});


