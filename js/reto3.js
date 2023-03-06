const selection = () => {
	let cine = document.getElementById("cine").value;

	switch (cine) {
		case "0":
			window.location.href = "reto3.html";
			break;
		case "1":
			window.location.href = "cineSanJose.html";
			break;
		case "2":
			window.location.href = "cineCartago.html";
			break;
		case "3":
			window.location.href = "cineHeredia.html";
			break;
		default:
			window.location.href = "reto3.html";
			break;
	}
};
