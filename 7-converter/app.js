console.log('DZ-4');
//Домашнее задание - Функции

function converter (sum, currentCurrency, futureCurrency) {
	if (!(sum && currentCurrency && futureCurrency)){
		return null
	}
	
	let usdRub = 92;
	let usdEuro = 0.93;
	let euroUsd = 1.07;
	let euroRub = 98;

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
};

console.log(converter(100, 'euro', '$'));

