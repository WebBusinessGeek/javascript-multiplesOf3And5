/*
* Returns sum of all numbers from rangeStart to rangeStop that were multiples of integers passed in the multiples array.
*/
function findSumOfMultiplesWithinRange(rangeStart, rangeStop, multiples, preventDuplicates) {
	multiplesWithinRange = findMultiplesWithinRange(rangeStart, rangeStop, multiples);
	if(preventDuplicates == undefined || preventDuplicates == false) {
		return addAllIntegerValuesInArray(multiplesWithinRange);
	}
	if(preventDuplicates == true) {
		multiplesWithinRangeWithoutDuplicates = removeDuplicatesFromArray(multiplesWithinRange);
		return addAllIntegerValuesInArray(multiplesWithinRangeWithoutDuplicates);
	}
}

/*
* Returns an array containing all numbers from rangeStart to rangeStop that are multiples of the values passed as multiples array
* Returns error if rangeStart or rangeStop is not zero or a whole number
* Returns error if rangeStart is greater than rangeStop
* Returns error if multiples is not an array
*/
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
	results = [];
	
	while(rangeStart <= rangeStop) {
		for(arrayCounter = 0; arrayCounter < multiples.length; arrayCounter++) {
			ifMultiple = (isAMultiple(rangeStart, multiples[arrayCounter])) ? results.push(rangeStart) : 'not a multiple' ;
		}
		rangeStart++;
	}
	return results;
}

/*
* Returns the sum of the array passed as an arrayToSum argument
* Returns error message if arrayToSum arguments is not an array
*/
function addAllIntegerValuesInArray(arrayToSum) {
	if(!isArray(arrayToSum)) {
		return 'Invalid argument supplied for arrayToSum - must be an array';
	}
	return arrayToSum.reduce(function(a,b) {
		return a + b;
	});
	
}

/*
* Removes duplicate values from an array
*/
function removeDuplicatesFromArray(arrayToRemoveDuplicatesFrom) {
	if(!isArray(arrayToRemoveDuplicatesFrom))
	{
		return 'Invalid argument supplied for arrayToRemoveDuplicatesFrom - must be an array';
	}
	arrayToReturn = [];
	for(var counter = 0; counter < arrayToRemoveDuplicatesFrom.length; counter++) {
		valueToPushIfNotPresent = arrayToRemoveDuplicatesFrom[counter];
		if(arrayToReturn.indexOf(valueToPushIfNotPresent) == -1) {
			arrayToReturn.push(valueToPushIfNotPresent);
		}
	}
	return arrayToReturn;
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
	if(valueToTest % multiple === 0 && valueToTest != 0) {
		return true;
	}
	return false;
}

