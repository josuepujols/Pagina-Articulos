
$(document).ready(() => {
    setInterval(() => {
        let reloj = moment().format("h:mm:ss");
        $('#reloj').html(reloj);
    }, 1000);
});
