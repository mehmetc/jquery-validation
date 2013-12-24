jQuery.validator.addMethod("socialsecurityBE", function(value, element){
	var ss = value;
	ss = ss.replace(/ /g, '');

	if (this.optional(element)) {
		return true;
	}

// stop if not all are numbers
	if (!(/^\d*$/.test(ss))){
		return false;
	}
// should be 11 characters
	if (value.length !== 11) {
		return false;	
	}

	var checkdigit = parseInt(ss.substring(9,11), 10);

// born before 2000
	var calc_checkdigit = 97 - (parseInt(ss.substring(0,9), 10) % 97);
// born in 2000 or later	
	var calc_checkdigit2 = 97 - (parseInt('2' + ss.substring(0,9), 10) % 97);

	return ((calc_checkdigit === checkdigit) || (calc_checkdigit2 === checkdigit));		
}, 'Please enter a valid "social security" number');
