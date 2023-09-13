//you can have loops within loops

//let's try and write the program that prints out the following
/*
a ===
a0
a1
a2
-----------------------
b ===
b0
b1
b2
-----------------------
c ===
c0 
c1
c2
-----------------------
*/

let chars = 'ab';
for (let i=0; i<2 ; i++){
    console.log(chars[i] , "===");
    for(let j=0; j<3; j++){
        console.log(chars[i],j);
    }
    console.log("-----------------------");
}

