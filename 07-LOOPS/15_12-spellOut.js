
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Put any string I say: ', (answer) => {
    for(let i = 0; i < answer.length; i++){
        let char = answer[i];

        if (char == ' ') {
            break;
        }
        console.log(`The character at position ${i} is "${answer[i]}"`);
    }
    console.log('done');

    r1.close();
});