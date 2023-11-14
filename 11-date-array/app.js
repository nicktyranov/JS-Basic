console.log('DZ-8');
// /* Домашнее задание - Итерации в массивах

/*
['10-02-2022', 'xxxx', '11/12/2023', '00/13/2022', '41/12/2023']

удалить то, что нельзя превратить в дату + вернуть массив дат ("-")
*/
function dateArray(array) {
  let tempArr = [];
  let rez = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 10) {
      tempArr.push(array[i]);
    }
  }

  for (let el of tempArr) {
    el = el
		.replace(/[-\/]/g, '-')
		.split('-');

    if (
		!(el[0] < 0 || el[0] > 31) 
		&& 
		!(el[1] < 0 || el[1] > 12)
		) {
      	rez.push(el.join('-'));
    }
  }

  return rez;
}

console.log(dateArray(['10-02-2022', 'xxxx', '11/12/2023', '00/13/2022', '41/12/2023']));
