console.log('DZ-7');
/* Домашнее задание - Функции высшего порядка 

Напишите функцию, которая принимает:
-Массив чисел
-Функцию удаления элементов
И возвращает отфильтрованный массив. При этом функция удаления элементов принимает
число и возвращает true, если его надо удалить и false, если надо оставить 


Anton Larichev, [13 нояб. 2023 г., 10:39:21 (13 нояб. 2023 г., 10:41:51)]:
function filter([-1,2], myFunc) { ... }

Где myFunc = (a) => a > 0
*/

let myFunc = (el) => el < 0;
function arrayClean (array, myFunc) {
	let rez = [];

	for (let i = 0; i < array.length; i++) {
	if (myFunc(array[i])) {
		rez.push(array[i]);
	}
	}
	return rez;
}
console.log(arrayClean([-1,2], myFunc));
