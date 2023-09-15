//write me a program that sums up all the whole numbers between 0 and 
//whatever number greeater than 0 you want. sometimes you'll see this 
//problem being read as 'sum all the numbers between 0 and n, where n is some arbitrary whole
//number greater than 0 ' make this an inclusive sum, meaning include 0 and the upper bound number.

// a code used to throw a question and take input..(used in many further codes)
// this is a reference file to all such codes which  I use in future

const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Enter the number till where you need to find the sum of all whole number from 0(inclusive of number) ', (answer) => {
    
    let curr = 0;
    //thiswill be the current number we have to add

    
    //upper bound
    const max = answer;
    
    //sum
    let sum = 0; 
    
    //loop until we pass the max
    while (curr <= max){
        //add onto sum
        sum += curr;
    
        // output sum so far
        console.log(`current number: ${curr} , sum (so far): ${sum}`);
        
        //increment to 1) get next number and 2) prevent infinte loop
        curr++;
    
    }    
    console.log(`-----------------`);
    console.log(`Final sum from numbers between 0 to ${max} (inclusive): ${sum} `);

    r1.close();
});


