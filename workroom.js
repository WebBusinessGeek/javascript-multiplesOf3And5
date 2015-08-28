//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.


//In order to pass the test we have to:
//	find the multiples of 3 or 5 below 1000
//	add those multiples up and return the sum



//method 1 findMultiplesWithinRange(rangeStart, rangeStop, multiples = []) should return an array containing all the multiples
	//it should return an error if integers not given as first argument
	//it should return an error if integer not given as second argument
	//it should return an error if first argument is greater than the second
	//it should return an error if array not given as third argument
	//it should return an array containing all the multiples within the range given
	//it should return an return an array of 3, 5, 6, 9 for a range of 0 to 10



function findMultiplesWithinRange(rangeStart, rangeStop, multiples) {
	if(!isZeroOrWholeNumber(rangeStart)) {
		return 'Invalid argument supplied for rangeStart - should be zero or a whole number';
	}	
	if(!isZeroOrWholeNumber(rangeStop)) {
		return 'Invalid argument supplied for rangeStop - should be zero or a whole number'
	}
	if(!isArray(multiples)) {
		return 'Invalid argument supplied for multiples - should be an array';
	}
	if(isGreaterThan(rangeStart, rangeStop)) {
		return 'Invalid arguments for rangeStart and rangeStop - rangeStart can not be greater than rangeStop';
	}
	
	//isAMultiple
}

/*
* Returns true if argument passed is either zero or a whole number.
* Returns false otherwise.
*/
function isZeroOrWholeNumber(valueToCheck) {
	if(valueToCheck == 0){
		return true;
	}
	if(valueToCheck >= 1 && valueToCheck % 1 === 0) {
		return true;
	}
	return false;
}

/*
* Returns true if first argument is greater than the second argument
* Returns false if the second argument is greater than the first. 
*/
function isGreaterThan(subjectToTest, valueToTestAgainst) {
	if(subjectToTest > valueToTestAgainst){
		return true;
	}
	return false;
}


/*
* Returns true if argument is an array.
* Returns false if argument is an object or not an array.
*/
function isArray(valueToTest) {
	if(valueToTest instanceof Array) {
		return true;
	}
	return false;
}

/*
* Returns true if first argument is a multiple of the second argument
* Returns false otherwise.
*/
function isAMultiple(valueToTest, multiple) {
	if(valueToTest % multiple === 0) {
		return true;
	}
	return false;
}







//method 2 addAllIntegerValuesInArray(array) should return an integer
//it should return an integer equal to the sum of all integers found in the array
//it should return an error if argument is not an array