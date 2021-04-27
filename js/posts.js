

$(document).ready(() => {
    let formulario = $('#form-container');

    if (window.location.href.indexOf('index') > -1) {

        //Posts 
        var articulos = [

        {
            title: "Articulo 1",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY") + ".",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed turpis a erat fermentum euismod. Curabitur tincidunt nulla posuere, interdum ante in, elementum est. Aenean egestas id mauris non viverra. Cras ac massa facilisis, mollis sapien sed, consectetur dolor. Donec elementum sem sed nulla ullamcorper euismod. Vivamus molestie ante sit amet nunc auctor, vel consequat augue blandit. Sed quis cursus eros."
        },
        {
            title: "Articulo 2",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY") + ".",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed turpis a erat fermentum euismod. Curabitur tincidunt nulla posuere, interdum ante in, elementum est. Aenean egestas id mauris non viverra. Cras ac massa facilisis, mollis sapien sed, consectetur dolor. Donec elementum sem sed nulla ullamcorper euismod. Vivamus molestie ante sit amet nunc auctor, vel consequat augue blandit. Sed quis cursus eros."
        },
        {
            title: "Articulo 3",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY") + ".",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed turpis a erat fermentum euismod. Curabitur tincidunt nulla posuere, interdum ante in, elementum est. Aenean egestas id mauris non viverra. Cras ac massa facilisis, mollis sapien sed, consectetur dolor. Donec elementum sem sed nulla ullamcorper euismod. Vivamus molestie ante sit amet nunc auctor, vel consequat augue blandit. Sed quis cursus eros."
        },
        {
            title: "Articulo 4",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY") + ".",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed turpis a erat fermentum euismod. Curabitur tincidunt nulla posuere, interdum ante in, elementum est. Aenean egestas id mauris non viverra. Cras ac massa facilisis, mollis sapien sed, consectetur dolor. Donec elementum sem sed nulla ullamcorper euismod. Vivamus molestie ante sit amet nunc auctor, vel consequat augue blandit. Sed quis cursus eros."
        },
        {
            title: "Articulo 5",
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY") + ".",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed turpis a erat fermentum euismod. Curabitur tincidunt nulla posuere, interdum ante in, elementum est. Aenean egestas id mauris non viverra. Cras ac massa facilisis, mollis sapien sed, consectetur dolor. Donec elementum sem sed nulla ullamcorper euismod. Vivamus molestie ante sit amet nunc auctor, vel consequat augue blandit. Sed quis cursus eros."
        }
        ];

        $('.boton-toggle').click(() => {
            formulario.slideDown('slow');
        });

        $('#segundo').click(() => {
            formulario.slideUp('slow');

            return false;
        });

        $('#primero').click(() => {
            
            try {
                let titulo = $('#titulo').val();
                let articulo = $('#contenido-articulo').val();

                let objeto = {
                    title: titulo,
                    date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del año " + moment().format("YYYY") + ".",
                    content: articulo
                };

                let dato = `
                    <article class="contenido">
                        <h2>${objeto.title}</h2>
                        <span class="date">${objeto.date}</span>

                        <p>
                            ${objeto.content}
                        </p>
                        <a href="#" class="boton">Leer mas</a>
                    </article>
                `;

                $('#post').prepend(dato);

                $('#titulo').val("");
                $('#contenido-articulo').val("");
                formulario.slideUp('slow');
            }
            catch (error) {
                console.log(error);
            }

            return false;

        });

        agregar_articulo(articulos);

    }
    
    
});

function agregar_articulo(articulos) {
    for (let i = 0; i <  articulos.length; i++) {
        let post = `
        <article class="contenido">
            <h2>${articulos[i].title}</h2>
            <span class="date">${articulos[i].date}</span>

            <p>
                ${articulos[i].content}
            </p>
            <a href="#" class="boton">Leer mas</a>
        </article>
        `;

        $('#post').append(post);
    }
}


