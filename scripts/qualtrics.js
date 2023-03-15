// encuesta caritas
var contenidoGenerado = document.getElementById("contenido-generado");
var mostrado = false;

function mostrarOcultarContenido() {
    // Mostrar el contenido generado si aún no se ha mostrado
    if (!mostrado) {
        contenidoGenerado.style.display = "block";
        mostrado = true;
        return;
    }
    
    // Alternar la propiedad "display" del div para mostrar u ocultar el contenido
    if (contenidoGenerado.style.display === "none") {
        contenidoGenerado.style.display = "block";
    } else {
        contenidoGenerado.style.display = "none";
    }
}

//encuesta inner (no hace falta el codigo de qualtrics en la web)
var contenidoVisible = false;

function mostrarEncuestaInner() {
    var encuestaContainer = document.getElementById("encuesta-container-inner");
    if (contenidoVisible) {
        encuestaContainer.innerHTML = "";
        contenidoVisible = false;
    } else {
        encuestaContainer.innerHTML = '<iframe src="https://aysa.qualtrics.com/jfe/form/SV_02155pALedYOBW6" width="50%" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando encuesta...</iframe>';
        contenidoVisible = true;
    }
}