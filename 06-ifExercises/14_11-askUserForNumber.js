// this program should ask user to input a number, if their input 
// IS NOT a number, tell them

// https://nodejs.org/api/readline.html
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter a number :=) : ', (answer) => {
    isNumber = Number(answer)/Number(answer) === 1
    console.log(isNumber? 'Thanks for the number' : 'Not a number :/');

    
let susInput = isNaN(answer) 
console.log(susInput ? `Meh ${answer} is not a number :\ ` : `Thannk you for the number : ${answer}`);

    r1.close();
});

/*
my logic here is ..isNumber = true if someNumber / someNumber will be === 1
else NaN / NaN !== 1; 

the only way i thought i can differentiate this NaN or a number
as typeof(NaN) gave 'number' 
*/
