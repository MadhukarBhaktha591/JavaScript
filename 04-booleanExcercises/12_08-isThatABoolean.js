//write a program that tests 3 different variables / constants and prints out 
//wheter or not ther are a boolean...meaning if it is a boolean it should print out true,
//and if it is not a boolean it should print out false.
const givenThing1 = true;
let givenThing2 = 'true';
let givenThing3 = 45;

isBoolean = `${typeof(givenThing1)}` === "boolean";
console.log(`The given variable/constant is a boolean : ${isBoolean}`);

isBoolean = `${typeof(givenThing2)}` === "boolean";
console.log(`The given variable/constant is a boolean : ${isBoolean}`);

isBoolean = `${typeof(givenThing3)}` === "boolean";
console.log(`The given variable/constant is a boolean : ${isBoolean}`);