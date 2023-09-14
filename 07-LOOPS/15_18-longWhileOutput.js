//we are going to write out a program that will print out number 
//in this way
/*
  0, 1, 2, 3, 4, 5, 6, 7, ...
*/
//but it shall stop getting new numbers once 
//they will reach exceed 100 characters

let charactersLimit = 10;
let i = 0;
let output = '';
while ( output.length < charactersLimit) {
    output += i++ + ', ';
}
console.log(output);
console.log(`Length: ${output.length}`);