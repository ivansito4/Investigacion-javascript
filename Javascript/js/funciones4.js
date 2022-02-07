let imagen="perro";
function cambiarImagen()
{
	if(imagen=="perro")
	{	imagen="gato";
		document.getElementById("foto").src="images/gato.jpg";
	}
	else
	{
		imagen="perro";
		document.getElementById("foto").src="images/perro.jpg";
	}
	
	
	
}