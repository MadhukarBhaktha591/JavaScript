/*
the user will give us a number like 3 , and we'll draw something like this
xxx
x x
xxx

xxxx
x  x
x  x
xxxx
*/


const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the dimension of required box : ', (answer) => {

    topLine = 1
    bottomLine = Number(answer)
    if(answer === 1){
        console.log(x);
    }
    else{
        for (let i = 1; i <= answer ;i++){
            if ((i === topLine) || (i === bottomLine)){
                console.log(`X`.repeat(answer))
            }
            else{
                string = `X`+` `.repeat(answer-2)+`X`
                console.log(string)
            }
        }
    }
    
r1.close();
});
