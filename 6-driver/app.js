console.log('DZ-3');

let hasLicence = true;
let isDrunk = false;


function canDrive (age) {
	if (age >= 18 && hasLicence && !isDrunk){
		return "может";
	} else {
		return "не может";
	}
};

console.log(canDrive(20));

