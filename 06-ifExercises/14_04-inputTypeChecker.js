/*
write a program that tests the TYPE of the data we get from user input
ensure we wanto to ensure that is a string
 
*/

// https://nodejs.org/api/readline.html

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Tell me your favourite cake flavor: ', (answer) => 
{
    console.log(`Answer's type : ${typeof(answer)}`);
    r1.close();
});
