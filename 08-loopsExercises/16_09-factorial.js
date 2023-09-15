//taking input function 
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number for which you need to calculate the factorial for? ', (answer) => {
// taking input (in string)
let input = answer

let multiplicationString = input;
let factorial = input;

// iterate from input till 2...(2 cuz inside i put i-1)
for(let i = input; i > 1 ; i--){
    //building string
    multiplicationString += `*${i-1}`;
    //calculating value
    factorial *= i-1
}
//final output string format and printing it out
finalString = `${input}! = ${multiplicationString} = ${factorial} `;
console.log(`${finalString}`);

//close input function
r1.close();
});
