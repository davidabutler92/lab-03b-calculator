import {add, subtract, multiply, divide} from '../mathUtils.js';


const test = QUnit.test;

// test('should take in 3 and 7 and return 10', (expected) => {
//   const argument1 = 3;
//   const argument2 = 7;
//   const expected = 10;
//   const actual = add(argument1, argument2);
//   expect.equal(actual, expected);
// });

// test('should take in 5 and 2 and return 3', (expect) => {
//   const argument1 = 5;
//   const argument2 =2;
//   const expected = 3;
//   const actual = subtract(argument1, argument2);
//   expect.equal(actual, expected); 
// });

// test('should take in 5 and 5 and return 25', (expect) => {
//   const argument1 = 5;
//   const argument2 =5;
//   const expected = 25;
//   const actual = multiply(argument1, argument2);
//   expect.equal(actual, expected); 
// });

test('should take in 25 and 5 and return 5', (expect) => {
  const argument1 = 25;
  const argument2 =5;
  const expected = 5;
  const actual = divide(argument1, argument2);
  expect.equal(actual, expected); 
});

