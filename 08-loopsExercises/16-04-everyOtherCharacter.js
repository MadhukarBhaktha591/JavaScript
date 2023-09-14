/*
suppose we have a string that user has given us (we can store this in a constant for now,
no need for input). iterate the string and grab every 3rd character. store each of these
characters in an output string using string concatenation. stop once you've collected 
15 characters.

*/

//(fake) user input
const input = 'elephant giraffe pony seabass anaconda china lettuce hamburger french';

//collect characters with this
let output = '';

//use this to mark where we should grab characters from in the string.
let i = 0;

//loop until we have 15 characters collected
while (output.length < 15) {
    //add on current character
    output += input[i];
    //move character index up by 3
    i += 3;
    console.log(output);
}
console.log(`Final string: ${output}`);

















