
$(document).ready(() => {
    //<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.3.26/jquery.form-validator.min.js"></script>

    $('#fecha').datepicker({
        dateFormat: 'dd/mm/yy'
    });

    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });

});

