const facturar = () => {
	const nombre = document.getElementById('nombre').value;
	const articulo = document.getElementById('articulo').value;
	const precio = document.getElementById('precio').value;
	const cantidad = document.getElementById('cantidad').value;

	if (validarDatos(nombre, articulo, precio, cantidad) === false) {
		return;
	}

	const subTot = +precio * +cantidad;
	const iva = 0.13 * subTot;
	const servicio = 0.05 * subTot;
	const total = subTot + iva + servicio;

	document.getElementById('factura').style.display = 'block';

	let datos = `
		<p><strong>Nombre del cliente: </strong> ${nombre}</p>
		<p><strong>Articulo comprado: </strong> ${articulo}</p>
		<p><strong>Cantidad comprada: </strong> ${cantidad}</p>
		<p><strong>Precio unitario: </strong> ${precio}</p>

		<p><strong>Subtotal: </strong> ${subTot}</p>
		<p><strong>IVA 13%: </strong> ${iva}</p>
		<p><strong>Servicio 5%: </strong> ${servicio}</p>
		<p><strong>Total a pagar: </strong> ${total}</p>

	`;

	let agregarDatos = document.createElement('div');
	agregarDatos.innerHTML = datos;
	document.getElementById('factura').appendChild(agregarDatos);
};

const limpiar = () => {
	document.getElementById('nombre').value = '';
	document.getElementById('articulo').value = '';
	document.getElementById('precio').value = '';
	document.getElementById('cantidad').value = '';

	document.getElementById('factura').style.display = 'none';
	document.getElementById('factura').innerHTML = '';
};

const validarDatos = (input1, input2, input3, input4) => {
	if (!input1 || !input2 || !input3 || !input4) {
		if (!input1) {
			resaltarInputInvalido('nombre');
		} else if (!input2) {
			resaltarInputInvalido('articulo');
		} else if (!input3) {
			resaltarInputInvalido('precio');
		} else if (!input4) {
			resaltarInputInvalido('cantidad');
		}
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
