console.log('DZ-10');

//Домашнее задание - Объекты
/*
Написать функцию, которая принимает объект query параметров и возвращает строку для вставки:
{
	search: 'Vasya',
	take: 10,
}

// seach=Vasya&take=10
*/

function queryStr (obj) {
	let array = Object.entries(obj);
	//чтобы получить КЛЮЧ + ЗНачение [key, value]
	console.log(array);
	let rez = '';

	for (let [key, value] of array) {
    if (value !== undefined) {
      rez += `${key}=${value}&`;
    }
  }
	return rez.slice(0, -1);
}

let queryStr_example = {
	search: 'Vasya',
	take: 10,
};

console.log(queryStr(queryStr_example));
