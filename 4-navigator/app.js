console.log('DZ-1');

function navigator (addressLat, addressLong, positionLat, positionLong) {
	let rez = 0;
	//d = √((x2 - x1)² + (y2 - y1)²)
	rez= Math.sqrt((addressLat - positionLat)**2 + (addressLong - positionLong)**2);

	return rez;
}

console.log(navigator(4, 6, 1, 2));