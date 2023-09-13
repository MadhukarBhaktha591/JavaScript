/*
we're going to ask the user for a type of fish . if the user gives us one of the
special fish , they'll get some points . however, if the user gives us the
SUPER SPECIAL fish , which is still a special fish, they'll get even more points.
*/

// https://nodejs.org/api/readline.html
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//ask user for string
r1.question('Please give me a fish: ', (fish) => {
    
//start user no prize
    let prize = 'nothing';
    lowercaseFish = fish.toLowerCase();

    //declare speical fish
    const superSpecialFish = 'whale';
    const specialFish = `swordfish octopus squid shark ${superSpecialFish}`;

    //check aginst special fish
    if (specialFish.includes(lowercaseFish)) {
        prize = `(NICE but used) shoelace `;

        //compare against super special fish
        if (superSpecialFish.includes(lowercaseFish)) {
            prize += `AND (NEW) sandwich`;
        }
    }

    console.log(`This is what you've won for your fish (${fish}): ${prize}`);
    
    r1.close();
});