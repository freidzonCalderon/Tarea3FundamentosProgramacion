const selection = () => {
	let ciudad = document.getElementById("ciudad").value;

	switch (ciudad) {
		case "1":
			document.getElementById("paris").style.display = "block";
			document.getElementById("roma").style.display = "none";
			document.getElementById("barcelona").style.display = "none";
			break;
		case "2":
			document.getElementById("paris").style.display = "none";
			document.getElementById("roma").style.display = "block";
			document.getElementById("barcelona").style.display = "none";
			break;
		case "3":
			document.getElementById("paris").style.display = "none";
			document.getElementById("roma").style.display = "none";
			document.getElementById("barcelona").style.display = "block";
			break;
		default:
			break;
	}
};
