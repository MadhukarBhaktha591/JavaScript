//write me a program that says "YUM" if your favorite ice cream flavor is
//chocolate or vanilla or say "EW" otherwis
// https://nodejs.org/api/readline.html

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Tell me your favourite cake flavor: ', (answer) => {
    const lowecaseAnswer = answer.toLowerCase();
    //check if user's favourite color is either chocolate or vanilla
    const isChocolateorVanilla = (lowecaseAnswer === 'chocolate' )|| (lowecaseAnswer === 'vanilla');

    if (isChocolateorVanilla) {
        console.log(`YUM ${lowecaseAnswer} is a nice choice!!`);
    }
    else{
        console.log(`EW I didn't expect you would say ${lowecaseAnswer}..thought it were Chocolate or Vanilla!! Nevermind.... :) `);
    }    
    

    r1.close();
});