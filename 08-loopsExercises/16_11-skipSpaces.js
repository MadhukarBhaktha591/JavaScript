//write a program that , assuming you have some user's input as a string, will
// create a version of that string that has no space in it. do this using 
// iteration, and use 'continue' whenver the current character you're observing 
//is a space..also the program should stop after 20 characters collected

userFakeInput = "The black brown fox jumps over the lazy dog.";
outputString = '';

for (let i = 0 ; userFakeInput.length; i++) {
    if(userFakeInput[i] === ' ')continue;
    outputString += userFakeInput[i];
    if(outputString.length === 20) break;
}
console.log(outputString);
