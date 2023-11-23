console.log('DZ-12');

//Домашнее задание - Document Object Model
// сделать калькулятор с 4-мя кнопками

function calc_add () {
	document.querySelector('.add').addEventListener('click', function () {
		const input1 = Number(document.querySelector('.input-1').value);
		const input2 = Number(document.querySelector('.input-2').value);

		let rez = input1 + input2;
		return document.querySelector('.result').innerText = `Result: ${rez}`;
	});
}

function calc_subtract () {
	// document.querySelector('.subtract').addEventListener('click', function () {
		const input1 = Number(document.querySelector('.input-1').value);
		const input2 = Number(document.querySelector('.input-2').value);

		let rez = input1 - input2;
		return document.querySelector('.result').innerText = `Result: ${rez}`;
	// });
}

function calc_multiply () {
	// document.querySelector('.multiply').addEventListener('click', function () {
		const input1 = Number(document.querySelector('.input-1').value);
		const input2 = Number(document.querySelector('.input-2').value);

		let rez = input1 * input2;
		return document.querySelector('.result').innerText = `Result: ${rez}`;
	// });
}

function calc_divide () {
	// document.querySelector('.divide').addEventListener('click', function () {
		const input1 = Number(document.querySelector('.input-1').value);
		const input2 = Number(document.querySelector('.input-2').value);
		let rez;
		if (input2 !== 0){
			rez = input1 / input2;
		} else {
			rez = `ошибка – нельзя делить на 0`;
		}
		
		return document.querySelector('.result').innerText = `Result: ${rez}`;
	// });
}