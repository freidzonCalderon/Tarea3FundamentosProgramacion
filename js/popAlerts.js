const imprimirMsjError = (msj) => {
	Swal.fire({
		title: "Error!",
		text: msj,
		icon: "error",
		confirmButtonText: "Ok",
	});
};

const imprimirMsj = (title, msj) => {
	Swal.fire({
		title: title,
		text: msj,
		icon: "info",
		confirmButtonText: "Ok",
	});
};

const imprimirConfirmacion = (title, msj) => {
	Swal.fire({
		title: title,
		text: msj,
		icon: "success",
		confirmButtonText: "Ok",
	});
};

const resaltarInputInvalido = (iID) => {
	var obj = document.getElementById(iID);
	var orig = obj.style;
	obj.style = "border: 1px solid red;";

	setTimeout(function () {
		obj.style = orig;
	}, 2000);
};
