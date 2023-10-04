// encuesta caritas
var contenidoGenerado = document.getElementById("contenido-generado");
var mostrado = false;
contenidoGenerado.style.display = "none";
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

// encuesta precargada (no hace falta el codigo de qualtrics en la web)
var contenidoGeneradoEncuesta = document.getElementById("contenido-generado-encuesta");
contenidoGeneradoEncuesta.innerHTML = '<iframe src="https://aysa.qualtrics.com/jfe/form/SV_02155pALedYOBW6" width="50%" height="700" frameborder="0" marginheight="0" marginwidth="0">Cargando encuesta...</iframe>';
var mostrado2 = false;
contenidoGeneradoEncuesta.style.display = "none";
function mostrarOcultarEncuesta() {
    // Mostrar el contenido generado si aún no se ha mostrado
    if (!mostrado2) {
        contenidoGeneradoEncuesta.style.display = "block";
        mostrado2 = true;
        return;
    }
    // Alternar la propiedad "display" del div para mostrar u ocultar el contenido
    if (contenidoGeneradoEncuesta.style.display === "none") {
        contenidoGeneradoEncuesta.style.display = "block";
    } else {
        contenidoGeneradoEncuesta.style.display = "none";
    }
}

function enviar() {
    var dato = document.getElementById("dato").value;
    var resultado = document.getElementById("resultado");
            
    resultado.innerHTML = "Dato ingresado: " + dato;
}

usuario_js = "MateoSV"
password_js = "secre12"