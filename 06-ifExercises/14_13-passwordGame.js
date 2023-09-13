/*
1. 
the user is going to give you a string, and each user starts out with 0
points. if the string the user gave us starts with a ?, then we'll do some
more test to see how many points they'll win (based on the other things in their)
string. however, if the user's input DOES NOT start with a ? , then they lose 
instantly

2.
SO, suppose the user hasn't lost the game yet, if that's the case, we're going
to test the second number they gave you. if the second character is an !, give 2 points. otherwise, 
if the second character is a % sign , give the user 3 points . otherwise, the user just get's 1 point.

3. 
now, if the user gave a % in part 2 (above), award the user  a point for each character in their entire string

4. 
once finished, even if the user got no points, print out how many points they have
earned when the game is over
*/

// https://nodejs.org/api/readline.html
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`Bob has set a password`);
console.log(`We have been spying on Bob and understood that..`);
console.log(`His PASS starts with a "?" everytime`);
console.log(`he uses a lot of either ! or ? or % sign`);
console.log(`and poor him he thinks he's safe by only using SPECIAL CHARS(!@#$%^&*()?)`);

r1.question(`let's see with THESE HINTS how close was your guess to the actuel password :=) : `, (answer) => {

    
    let pointsEarned = 0
    if(answer.length >= 1 && answer[0] !== '?') {
        console.log(`GAME OVER!! I TOLD YA to start with a '?'... BETTER LUCK TRY NEXT TIME `);
        console.log(`You got a total of ${pointsEarned} points.!!`);
        console.log("Thanks for trying !!");
    }
    else if(answer.length >=2 && answer[1] === '!'){
        console.log("you won! +2");
        pointsEarned += 2;
        console.log(`You got a total of ${pointsEarned} points.!!`);
        console.log("Thanks for trying !!");
    }
    else if(answer.length >=2 && answer[1] === '%'){
        console.log("oh you cracked the code and won a lottery !! ");
        let extraPoints = answer.length;
        pointsEarned = 3 + extraPoints;
        console.log(`You got a total of ${pointsEarned} points.!!`);
        console.log("Thanks for trying !!");
    }
    else{
        console.log(`OOoo you didn't crack the pass man!!`);
        console.log(`You got a total of ${pointsEarned} points.!!`);
        console.log("Thanks for trying !!");
    }

    if(pointsEarned <= 20){
        console.log(`Your password was ${pointsEarned*5} % close..`);
    }
    





    r1.close();
});
