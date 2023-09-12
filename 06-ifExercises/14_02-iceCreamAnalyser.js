
/*
    write a program that does the following:
    1. print out yum if favorite ice cream is chocolate or vanilla
    2.if your favorite ice cream flavor is strawberry , print out fruity
    3. if your favourite ice cream flavor is mint, print out how fresh...
    4. if your favourite ice cream flavor is coffee, print out disgusting
    5.otherwise , print out i didn't even know that was a flavor
 */

    // https://nodejs.org/api/readline.html

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Tell me your favourite cake flavor: ', (answer) => 
{
    //convert answer to lowercase to compare against flavors
    const lowecaseAnswer = answer.toLowerCase();

    //analyze ice cream flavors
    if (lowecaseAnswer === 'chocolate' || lowecaseAnswer === 'vanilla') {
        console.log(`YUM ${lowecaseAnswer} is a nice choice!!`);
    }
    else if (lowecaseAnswer === 'strawberry'){
        console.log(`Fruity`);
    }
    else if(lowecaseAnswer === `mint`){
        console.log (`How Fresh!`) ;
    }
    else if(lowecaseAnswer === `coffee`){
        console.log ('Disgusting!');
    }
    else{
        console.log(`EW I didn't knew you would say ${lowecaseAnswer}..!! Nevermind i didn't knew it was a flavor.... :) `);
    }    
    

    r1.close();
});