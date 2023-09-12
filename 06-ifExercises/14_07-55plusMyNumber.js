//write a program that takes in a user's number input and adds 55 to it
//(show them the result)

// https://nodejs.org/api/readline.html

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a number which you want to add to 55 : ', (answer) => 
{
    numberAnswer = Number(answer);
    console.log(`The sum after adding your number ${answer} to 55 is  = ${numberAnswer + 55}`);
    r1.close();
});
    
    