document.getElementById('mensaje').addEventListener('input', function() {
  var mensaje = this.value.toLowerCase();
  var tipoSolicitud = document.getElementById('tipoSolicitud');

  if (mensaje.includes('comprar')) {
    tipoSolicitud.value = 'compra';
  } else if (mensaje.includes('venta') || mensaje.includes('vender')) {
    tipoSolicitud.value = 'venta';
  }
});

function validar(){

	// Validamos los campos de input text
	camposTexto = document.getElementById("formulario").elements; 

	for (x=0; x < camposTexto.length; x++) {
		if (camposTexto[x].value == '' && camposTexto[x].type=='text'){
			alert("El campo " + camposTexto[x].id + " está vacio y es OBLIGATORIO");
			return false;
    	}    
   }
  alert("formulario correcto") 

}