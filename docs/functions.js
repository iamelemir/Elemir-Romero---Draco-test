
$(document).ready(function () {
    $('#boton-back').click(function (event) {
        var url = window.location.href;

        var ficheroActual = url.substring(url.lastIndexOf('/') + 1)

        switch (ficheroActual) {
            case 'yellow.html':
                urlFinal = url.replace(url.substring(url.lastIndexOf('/') + 1), 'index.html')
                window.location.replace(urlFinal);
                break;
            case 'blue.html':
                urlFinal = url.replace(url.substring(url.lastIndexOf('/') + 1), 'yellow.html')
                window.location.replace(urlFinal);
                break;
            case 'red.html':
                urlFinal = url.replace(url.substring(url.lastIndexOf('/') + 1), 'blue.html')
                window.location.replace(urlFinal);
                break;
        }
    });

    $('#boton-next').click(function (event) {
        var url = window.location.href;

        var ficheroActual = url.substring(url.lastIndexOf('/') + 1)

        switch (ficheroActual) {
            case 'index.html':
                urlFinal = url.replace(url.substring(url.lastIndexOf('/') + 1), 'yellow.html')
                window.location.replace(urlFinal);
                break;
            case 'yellow.html':
                urlFinal = url.replace(url.substring(url.lastIndexOf('/') + 1), 'blue.html')
                window.location.replace(urlFinal);
                break;
            case 'blue.html':
                urlFinal = url.replace(url.substring(url.lastIndexOf('/') + 1), 'red.html')
                window.location.replace(urlFinal);
                break;
        }
    });
});

function show() {
    var botonBack = document.getElementById("boton-back");
    botonBack.disabled = true;
}
