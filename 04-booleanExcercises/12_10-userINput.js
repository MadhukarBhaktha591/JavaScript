// https://nodejs.org/api/readline.html

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Tell me your favourite color: ', (answer) => {

    //check if user's favourite color is blue
    const isFavouriteColorBlue = answer.toLowerCase() === 'blue';

    console.log(`Your favourite color is blue: ${isFavouriteColorBlue}`);

    r1.close();
});