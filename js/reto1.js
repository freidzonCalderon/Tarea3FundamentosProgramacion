const datos = {
	usuario: 'cenfo',
	clave: '123',
};

const entrar = () => {
	const usuarioInput = document.getElementById('usuario').value;
	const claveInput = document.getElementById('clave').value;

	if (validarDatos(usuarioInput, claveInput) == false) {
		return;
	}

	if (validarUsuario(usuarioInput, claveInput) == false) {
		return;
	} else {
		window.location.href = 'welcomePage.html';
	}
};

const borrar = () => {
	document.getElementById('usuario').value = '';
	document.getElementById('clave').value = '';
};

const cerrarSesion = () => {
	window.location.href = 'reto1.html';
};

const validarDatos = (input1, input2) => {
	if (!input1 || !input2) {
		if (!input1) {
			resaltarInputInvalido('usuario');
		} else {
			resaltarInputInvalido('clave');
		}
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};

const validarUsuario = (input1, input2) => {
	if (input1 !== datos.usuario ||  input2 !== datos.clave) {
		imprimirMsjError('El usuario y clave ingresados no coinciden');
		return false;
	}
};
