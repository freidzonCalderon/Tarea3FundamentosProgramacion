const calcular = () => {
	let modelo = document.getElementById("modelo").value;
	let version = document.getElementById("version").value;

	console.log(modelo);
	console.log(version);

	if (validarDatos(modelo, version) === false) {
		return;
	}

	let precio = "";

	if (version == "LT") {
		precio = "44 000";
	} else if (version == "LTZ") {
		precio = "53 000";
	} else if (version == "RST") {
		precio = "80 000";
	} else if (version == "ZR2") {
		precio = "89 000";
	}

	document.getElementById("precio").style.display = "block";

	let precioPantalla = `<h4>El precio aproximado es: $<strong>${precio}</strong></h4>`;
	let agregarDatos = document.createElement("div");
	agregarDatos.innerHTML = precioPantalla;
	document.getElementById("precio").appendChild(agregarDatos);
};

const limpiar = () => {
	document.getElementById("precio").style.display = "none";
	document.getElementById("silverado").style.display = "none";
	document.getElementById("colorado").style.display = "none";

	document.getElementById("modelo").value = "0";
	document.getElementById("version").value = "0";
	window.location.reload();
};

const imgUpdate = () => {
	let datos1 = "";
	let datos2 = "";
	let modelo = document.getElementById("modelo").value;

	if (modelo === "1") {
		document.getElementById("colorado").style.display = "block";
		document.getElementById("silverado").style.display = "none";

		datos1 = `<option value="1">LT</option>`;
		datos2 = `<option value="2">LTZ</option>`;
	} else if (modelo === "2") {
		document.getElementById("silverado").style.display = "block";
		document.getElementById("colorado").style.display = "none";

		datos1 = `<option value="1"> RST</option>`;
		datos2 = `<option value="2"> ZR2</option>`;
	}

	let agregarDatos1 = document.createElement("option");
	let agregarDatos2 = document.createElement("option");
	agregarDatos1.innerHTML = datos1;
	agregarDatos2.innerHTML = datos2;
	document.getElementById("version").appendChild(agregarDatos1);
	document.getElementById("version").appendChild(agregarDatos2);
};

const validarDatos = (input1, input2) => {
	console.log("entro");
	if (input1 == "0" || input2 == "0") {
		if (input1 == 0) {
			resaltarInputInvalido("modelo");
		} else {
			resaltarInputInvalido("version");
		}
		imprimirMsjError("No debe dejar campos vacios");
		return false;
	}
};
