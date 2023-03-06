const formulario = () => {
	const lenguajes = [];

	const react = document.getElementById("react").checked;
	const angular = document.getElementById("angular").checked;
	const node = document.getElementById("node").checked;
	const vue = document.getElementById("vue").checked;

	if (validarDatos(react, angular, node, vue) == false) {
		return;
	}

	if (react) {
		lenguajes.push("React");
	}

	if (angular) {
		lenguajes.push("Angular");
	}

	if (node) {
		lenguajes.push("Node");
	}

	if (vue) {
		lenguajes.push("Vue");
	}

	lenguajes.forEach((lenguaje) => {
		let datos = `<li>${lenguaje}</li>`;
		let agregarDatos = document.createElement("li");
		agregarDatos.innerHTML = datos;
		document.getElementById("habilidades").appendChild(agregarDatos);
	});
};

const limpiar = () => {
	document.getElementById("react").checked = false;
	document.getElementById("angular").checked = false;
	document.getElementById("node").checked = false;
	document.getElementById("vue").checked = false;

	document.getElementById("habilidades").innerHTML = "";
};

const validarDatos = (input1, input2, input3, input4) => {
	if (!input1 && !input2 && !input3 && !input4) {
		imprimirMsjError("Debe marcar al menos una casilla");
		return false;
	}
};
