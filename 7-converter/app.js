console.log('DZ-4');
//Домашнее задание - Функции

function converter (sum, currentCurrency, futureCurrency) {
	let usdRub = 92;
	let usdEuro = 0.93;
	let euroUsd = 1.07;
	let euroRub = 98;

	if (sum && currentCurrency && futureCurrency) {
		switch (true) {
			case (currentCurrency === '$' && futureCurrency === 'руб'): 
			return sum * 92;

			case (currentCurrency === '$' && futureCurrency === 'euro'): 
			return sum * 0.93;

			case (currentCurrency === 'euro' && futureCurrency === '$'): 
			return sum * 1.07;

			case (currentCurrency === 'euro' && futureCurrency === 'руб'): 
			return sum * 98;

			case (currentCurrency === 'руб' && futureCurrency === 'euro'): 
			return sum * 98;

			case (currentCurrency === 'руб' && futureCurrency === '$'): 
			return sum * 92;
		}
		return null
	}
};

console.log(converter(100, 'euro', '$'));

