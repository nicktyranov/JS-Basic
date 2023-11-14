console.log('DZ-2');

function hello (lang) {
	switch(lang) {
		case 'en':
			return 'Good afternoon!';
		case 'ru':
			return 'Добрый день!';
		case 'ge':
			return 'Guten tag!';
			
		default:
			return 'No country code';
	}
}

console.log(hello('qq'));