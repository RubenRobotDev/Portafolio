let ani = document.querySelectorAll("header");

function ocultarPhoto()
{
	let scrollTop = document.documentElement.scrollTop;
	for (var i=0; i<2000; i++)
	{
		console.log("ya");
	}
	console.log(scrollTop);
}

window.addEventListener('scroll', ocultarPhoto)
