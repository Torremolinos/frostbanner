
const formulario = document.getElementById("formulario");

const mostrarDatosIf = () => {
    const seleccionado = formulario.informacion.value;
    if (seleccionado) {
        alert(seleccionado);
    } else {
        alert("Ninguna opción seleccionada");
    }
}
 
const mostrarDatosTernario = () => {
    formulario.london.value && alert(formulario.london.value)
}

 
const mostrarDatosFor = () => {
    formulario.london.forEach(london => {
        if (london.checked) { alert(london.value) }
    })
}
 
const mostrarDatosForTernario = () => {
    formulario.informacion.forEach(solicitud =>
        solicitud.checked ? alert(solicitud.value) : null
    )
}
 