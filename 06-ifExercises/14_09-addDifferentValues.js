//write a program that takes in a user's number input and adds 55 to it
//(show them the result)

//refactor this program to add 55 to the user's number if it's even 
// and 100 to the user's input if it is odd.
// https://nodejs.org/api/readline.html

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a number which you want to add to 55 : ', (answer) => 
{
    //convert user's input to a number
    numberAnswer = Number(answer);
    // check if number is even
    const isAnswerEven = numberAnswer % 2 === 0;

    //calculate the sum
    const sum = numberAnswer +  (isAnswerEven ? 55 : 100);

    console.log(`sum = ${sum}`);
    r1.close();
});
    
 
    
    