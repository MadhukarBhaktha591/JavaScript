//this program will print out a specific number of staircases, each with the same height
/*
3 stair cases, height of 4 each
-
--
---
----
-
--
---
----
-
--
---
----
*/

for ( let i = 0; i < 3 ; i ++){
    //this will be the staircase we've created so far
    ////let staircaseSoFar = '-';
    //add a staircase incrementally for this staircase
    for(let j = 1; j <= 4; j++){
        //printout current staircase
        console.log(`-`.repeat(j));
        //add 1 stair for next iteration
        ////staircaseSoFar += '-';
    }
    
    //add a staircase incrementally for this staircase
    for(let j = 4; -1 < j; j--){
        //printout current staircase
        console.log(`-`.repeat(j));
        //add 1 stair for next iteration
        ////staircaseSoFar += '-';    
    }
}