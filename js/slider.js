//Plugin para el slider = https://bxslider.com/examples/
$(document).ready(() => {

    //slider
    
    if (window.location.href.indexOf('index') > -1) {

        $('#galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: true
        });

    }

});