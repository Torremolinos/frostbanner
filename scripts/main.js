const mostrarDatosIf = () => {
    const seleccionado = formulario.informacion.value;
    if (seleccionado) {
        alert(seleccionado);
    } else {
        alert("Ninguna opción seleccionada");
    }
}
 
const mostrarDatosTernario = () => {
    formulario.informacion.value && alert(formulario.informacion.value)
}
 
const mostrarDatosFor = () => {
    formulario.informacion.forEach(solicitud => {
        if (solicitud.checked) { alert(solicitud.value) }
    })
}
 
const mostrarDatosForTernario = () => {
    formulario.informacion.forEach(solicitud =>
        solicitud.checked ? alert(solicitud.value) : null
    )
}
 