const enviar = () => {
	let preg1 = document.querySelectorAll("input.preg1");
	let preg2 = document.querySelectorAll("input.preg2");
	let preg3 = document.querySelectorAll("input.preg3");

	let textPreg1 = "";
	let textPreg2 = "";
	let textPreg3 = "";

	preg1.forEach((preg) => {
		if (preg.checked === true) {
			if (preg.id === "radio1") {
				textPreg1 = "El sabor de la comida es: Muy Bueno";
			} else if (preg.id === "radio2") {
				textPreg1 = "El sabor de la comida es: Bueno";
			} else if (preg.id === "radio3") {
				textPreg1 = "El sabor de la comida es: Regular";
			} else if (preg.id === "radio4") {
				textPreg1 = "El sabor de la comida es: Malo";
			} else if (preg.id === "radio5") {
				textPreg1 = "El sabor de la comida es: Muy Malo";
			}
		}
	});

	preg2.forEach((preg) => {
		if (preg.checked === true) {
			if (preg.id === "radio6") {
				textPreg2 = "La temperatura de la comida es: Muy Bueno";
			} else if (preg.id === "radio7") {
				textPreg2 = "La temperatura de la comida es: Bueno";
			} else if (preg.id === "radio8") {
				textPreg2 = "La temperatura de la comida es: Regular";
			} else if (preg.id === "radio9") {
				textPreg2 = "La temperatura de la comida es: Malo";
			} else if (preg.id === "radio10") {
				textPreg2 = "La temperatura de la comida es: Muy Malo";
			}
		}
	});

	preg3.forEach((preg) => {
		if (preg.checked === true) {
			if (preg.id === "radio11") {
				textPreg3 = "La rapidez del servicio es: Muy Bueno";
			} else if (preg.id === "radio12") {
				textPreg3 = "La rapidez del servicio es: Bueno";
			} else if (preg.id === "radio13") {
				textPreg3 = "La rapidez del servicio es: Regular";
			} else if (preg.id === "radio14") {
				textPreg3 = "La rapidez del servicio es: Malo";
			} else if (preg.id === "radio15") {
				textPreg3 = "La rapidez del servicio es: Muy Malo";
			}
		}
	});

	let title = "Se envió con éxito su encuesta";
	let text = `${textPreg1} || ${textPreg2} || ${textPreg3}`;

	imprimirConfirmacion(title, text);
};
