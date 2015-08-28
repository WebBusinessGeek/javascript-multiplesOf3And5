//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.


//In order to pass the test we have to:
//	find the multiples of 3 or 5 below 1000
//	add those multiples up and return the sum



//method 1 findMultiplesWithinRange(rangeStart, rangeStop, multiples = []) should return an array containing all the multiples
	//it should return an array containing all the multiples within the range given
	//it should return an error if first argument is greater than the second
	//it should return an return an array of 3, 5, 6, 9 for a range of 0 to 10


describe("findMultiplesWithinRange", function() {
	beforeEach(function() {
		validMuliplesArray = [3,5];
	});
	it("should return an error message if -1 given as first argument", function() {
		expect(findMultiplesWithinRange(-1, 10, validMuliplesArray)).toBe('Invalid argument supplied for rangeStart - should be zero or a whole number');
	});
	it("should return an error message if -1 given as second argument", function() {
		expect(findMultiplesWithinRange(10, -1, validMuliplesArray)).toBe('Invalid argument supplied for rangeStop - should be zero or a whole number');
	});
	it("should return an error if 4 is given as third argument", function() {
		expect(findMultiplesWithinRange(1, 10, 4)).toBe('Invalid argument supplied for multiples - should be an array');
	});
	it("should return an error if 10 is given as first argument and 5 is given as second argument", function() {
		expect(findMultiplesWithinRange(10, 5, validMuliplesArray)).toBe('Invalid arguments for rangeStart and rangeStop - rangeStart can not be greater than rangeStop');
	});
	
});

/*
* Test Suite for isZeroOrWholeNumber function
*/
describe("isZeroOrWholeNumber", function() {
	it("should return true if argument is zero", function() {
		expect(isZeroOrWholeNumber(0)).toBe(true);
	});
	it("should return true if argument is 1", function() {
		expect(isZeroOrWholeNumber(1)).toBe(true);
	});
	it("should return true if argument is 45", function() {
		expect(isZeroOrWholeNumber(45)).toBe(true);
	});
	it("should return false if argument is 1.5", function() {
		expect(isZeroOrWholeNumber(1.5)).toBe(false);
	});
	it("should return false if argument is 20.1", function() {
		expect(isZeroOrWholeNumber(20.1)).toBe(false);
	});
	it("should return false if argument is 'string'", function() {
		expect(isZeroOrWholeNumber('string')).toBe(false);
	});
	
});

/*
* Test Suite for isGreaterThan function
*/
describe("isGreaterThan", function() {
	it("should return true if 5 is the first argument and 1 is the second", function() {
		expect(isGreaterThan(5, 1)).toBe(true);
	});
	it("should return true if 10 is the first argument and 5 is the second", function() {
		expect(isGreaterThan(10, 5)).toBe(true);
	});
	it("should return false if 1 is the first argument and 5 is the second", function() {
		expect(isGreaterThan(1, 5)).toBe(false);
	});
	it("should return false if 5 is the first argument and 10 is the second", function() {
		expect(isGreaterThan(5, 10)).toBe(false);
	});
});

/*
* Test Suite for function isArray
*/
describe("isArray", function() {
	beforeEach(function() {
		validArray = [
			'someValue',
			'someValue'
		];
		
		inValidArray = 'not an array';
		
		object = {
			'property': 'someValue',
			'property2': 'someValue',
		};
		
	});
	it("should return true if argument is an Array", function() {
		expect(isArray(validArray)).toBe(true);
	});
	it("should return false if argument is not an array", function() {
		expect(isArray(inValidArray)).toBe(false);
	});
	it("should return false if argument is an object", function() {
		expect(isArray(object)).toBe(false);
	});
	
});

/*
* Test Suite for function isAMultiple
*/
describe("isAMultiple", function() {
	it("should return true if 9 is the first parameter and 3 is the second parameter", function() {
		expect(isAMultiple(9, 3)).toBe(true);
	});
	it("should return true if 10 is the first parameter and 5 is the second parameter", function() {
		expect(isAMultiple(10, 5)).toBe(true);
	});
	it("should return false if 11 is the first parameter and 3 is the second parameter", function() {
		expect(isAMultiple(11, 3)).toBe(false);
	});
	it("should return false if 24 is the first parameter and 25 is the second parameter", function() {
		expect(isAMultiple(24, 25)).toBe(false);
	});
});





//method 2 addAllIntegerValuesInArray(array) should return an integer
	//it should return an integer equal to the sum of all integers found in the array
	//it should return an error if argument is not an array
describe("addAllIntegerValuesInArray", function() {
	
});