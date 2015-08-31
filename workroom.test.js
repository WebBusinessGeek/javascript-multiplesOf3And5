/*
* Test Suite for findSumOfMultiplesWithinRange function
*/
describe("findSumOfMultiplesWithinRange", function () {
	it("should return 23 if arguments are 0, 9, [3,5]", function() {
		expect(findSumOfMultiplesWithinRange(0, 9, [3,5])).toBe(23);
	});
	it("should return 20 if arguments are  0, 9, and [2]", function() {
		expect(findSumOfMultiplesWithinRange(0, 9, [2])).toBe(20);
	});
	it("should return 630 if arguments are 0, 60, and [3]", function() {
		expect(findSumOfMultiplesWithinRange(0, 60, [3])).toBe(630);
	});
	it("should return 3150 if arguments are 0, 300, [15]", function() {
		expect(findSumOfMultiplesWithinRange(0, 300, [15])).toBe(3150);
	});
	it("should return 18300 if arguments are 0, 300, [3,15]", function() {
		expect(findSumOfMultiplesWithinRange(0, 300, [3,15])).toBe(18300);
	});
	it("should return ??? if arguments are 0, 999, [3,5]", function() {
		expect(findSumOfMultiplesWithinRange(0, 999, [3,5])).toBe(266333);
	});
	it("should return 233168 if agruments are 0, 999, [3,5], true", function() {
		expect(findSumOfMultiplesWithinRange(0, 999, [3,5], true)).toBe(233168);
	});
	
});


/*
* Test Suite for findMultiplesWithinRange function
*/
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
	it("should return an array that contains 3, 5, 6, and 9 when passing 0, 10, and [3,5] as arguments", function() {
		result = findMultiplesWithinRange(0, 10, [3,5]);
		expect(result[0]).toBe(3);
		expect(result[1]).toBe(5);
		expect(result[2]).toBe(6);
		expect(result[3]).toBe(9);
	});
	it("should return an array that contains 2, 4, 6, 8 when passed 0, 9, and [2] as arguments", function() {
		result = findMultiplesWithinRange(0, 9, [2]);
		expect(result[0]).toBe(2);
		expect(result[1]).toBe(4);
		expect(result[2]).toBe(6);
		expect(result[3]).toBe(8);
	});
	
});

/*
* Test Suite for addAllIntegerValuesInArray
*/
describe("addAllIntegerValuesInArray", function() {
	it("should return an error if argument is 1", function() {
		expect(addAllIntegerValuesInArray(1)).toBe('Invalid argument supplied for arrayToSum - must be an array');
	});
	it("should return an error if argument is 'string'", function() {
		expect(addAllIntegerValuesInArray('string')).toBe('Invalid argument supplied for arrayToSum - must be an array');
	});
	it("should return 3 if argument is [1,1,1]", function() {
		expect(addAllIntegerValuesInArray([1,1,1])).toBe(3);
	});
	it("should return 8 if argument is [1,2,5,0]", function() {
		expect(addAllIntegerValuesInArray([1,2,5,0])).toBe(8);
	});
});


/*
* Test Suite for removeDuplicatesFromArray function
*/
describe("removeDuplicatesFromArray", function() {
	it("should return an error if argument is not an array", function() {
		expect(removeDuplicatesFromArray(1)).toBe('Invalid argument supplied for arrayToRemoveDuplicatesFrom - must be an array');
	});
	it("should return an array equal to [1,2,3,4] if argument is [1,1,2,2,3,3,4,4]", function() {
		result = removeDuplicatesFromArray([1,1,2,2,3,3,4,4]);
		expect(result[0]).toBe(1);
		expect(result[1]).toBe(2);
		expect(result[2]).toBe(3);
		expect(result[3]).toBe(4);
	});
})



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



