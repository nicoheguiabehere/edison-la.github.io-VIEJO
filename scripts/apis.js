function getRequest(url) {
    fetch(url)
        .then(response => {
            console.log("Status respuesta: " + response.status);
            return response.text();
        })
        .then(result => {
            document.getElementById('respuesta').innerText = result;
        })
        .catch(error => console.log('error', error));
}
function limpiar() {
    document.getElementById('respuesta').innerText = "";
}

function getRequestYDescargar(url) {
    let file_text = "";
    fetch(url)
        .then((response) => response.json())
        .then((resp) => {
            file_text = jsonToCSV(resp);
            console.log(file_text);
            download("test.csv", file_text);
        })
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function jsonToCSV(json) {
    // funciona solamente para un arreglo de objetos planos
    var fields = Object.keys(json[0])
    var replacer = function (key, value) { return value === null ? '' : value }
    var csv = json.map(function (row) {
        return fields.map(function (fieldName) {
            return JSON.stringify(row[fieldName], replacer)
        }).join(',')
    })
    csv.unshift(fields.join(',')) // add header column
    csv = csv.join('\r\n');
    return csv;
}