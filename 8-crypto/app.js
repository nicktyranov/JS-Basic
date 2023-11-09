console.log('DZ-5');
//Домашнее задание - Массивы


function createCrypto (password) {
	let tempArr = password.split('');
	tempArr.push(tempArr[0]);
	tempArr.shift(tempArr[0]);
	return passCrypto = tempArr.join('');

}
console.log(createCrypto('password'));
console.log(createCrypto('adoprssw'));


function checkCrypto(pass, passCrypto) {
  let tempArr = passCrypto.split('');
  tempArr.unshift(tempArr.pop()); 
  return tempArr.join('') === pass; 
}

console.log(checkCrypto('adoprssw', 'doprsswa'));
