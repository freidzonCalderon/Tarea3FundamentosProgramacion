const autos = () => {
	document.getElementById('autos').style.display = 'block';
	document.getElementById('suvs').style.display = 'none';
	document.getElementById('pickups').style.display = 'none';
	document.getElementById('deportivos').style.display = 'none';
};

const suvs = () => {
	document.getElementById('autos').style.display = 'none';
	document.getElementById('suvs').style.display = 'block';
	document.getElementById('pickups').style.display = 'none';
	document.getElementById('deportivos').style.display = 'none';
};

const pickups = () => {
	document.getElementById('autos').style.display = 'none';
	document.getElementById('suvs').style.display = 'none';
	document.getElementById('pickups').style.display = 'block';
	document.getElementById('deportivos').style.display = 'none';
};

const deportivos = () => {
	document.getElementById('autos').style.display = 'none';
	document.getElementById('suvs').style.display = 'none';
	document.getElementById('pickups').style.display = 'none';
	document.getElementById('deportivos').style.display = 'block';
};
