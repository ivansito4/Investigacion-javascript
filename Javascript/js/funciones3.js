function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="verde")
		{document.getElementById("parrafo_lorem").className="rojo"}
	else
		{document.getElementById("parrafo_lorem").className="verde"}
	
}