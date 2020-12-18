function inicio() {
	var correo=document.getElementById("inputEmail4").value;
	var contraseña=document.getElementById("inputPassword4").value;
	if (correo=="danyrosas@gmail.com" && contraseña=="pato123") {
		location.href="index.html";
	}else{
		location.href="pv.html";
		alert("introduce la información solicitada")
	}
}
