console.log('DZ-6');
//Домашнее задание - Циклы

/*
Дан массив чисел const arr = [1, 40, -5, 10, 0]; Написать функцию, которая сортирует данный массив при помощи циклов.  подсказка: - нужно использовать 2 цикла, вложенных друг в друга, - нужно сравнивать и менять элементы
*/

function sortArray (arr) {
	let rez = arr;

	for (let i = 0; i < rez.length; i++) {
    for (let j = 0; j < rez.length - 1; j++) { 
      if (rez[j] > rez[j + 1]) {
        let temp = rez[j];
        rez[j] = rez[j + 1];
        rez[j + 1] = temp;
      }
    }
  }
	return rez;
}

console.log(sortArray([1, 40, -5, 10, 0]));
