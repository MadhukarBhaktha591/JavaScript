//this program will , in a wierd will tell us whether we are big or small

//let's say the criteria for big is the following: you need to have a height of at least 80inches OR you must weight over 250lbs

const heightInInches = 60;
const weightInPounds = 150;

const isHeightBig = heightInInches >= 80;
const isWeightBig = weightInPounds >= 250;

console.log(`Height: ${heightInInches}/80 in, Weight: ${weightInPounds}/250 lbs`);

const iAmBig = isHeightBig || isWeightBig;
console.log(` BIG TEST : I am big: ${iAmBig}`)

//to figure out if we are small, we need BOTH our height to be < 40 AND our wwight to be < 100
const isHeightSmall = heightInInches < 40;
const isWeightSmall = weightInPounds < 100;

console.log('\n-----------------------\n');
console.log(`Height: ${heightInInches}/40 in, Weight: ${weightInPounds}/100 lbs`);

const iAmSmall = isHeightSmall && isWeightSmall;
console.log(`SMALL TEST: I am small: ${iAmSmall}`);