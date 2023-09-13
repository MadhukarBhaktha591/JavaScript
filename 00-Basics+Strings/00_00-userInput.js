// a code used to throw a question and take input..(used in many further codes)
// this is a reference file to all such codes which  I use in future

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Put a question up here? ', (answer) => {
    
    r1.close();
});