
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number till where you need to find the sum of all whole number from 0(inclusive of number) ', (answer) => {
    
    //upper bound
    const max = answer;

    //sum
    let sum = 0;
    
    //loop until we pass the max
    for (let curr = 0; curr <= max; curr++ ){
        //add onto sum
        sum += curr;
        
        // output sum so far
        console.log(`current number: ${curr} , sum (so far): ${sum}`);
        
    }    
    console.log(`-----------------`);
    console.log(`Final sum from numbers between 0 to ${max} (inclusive): ${sum} `);
    
    r1.close();
}); 
        






