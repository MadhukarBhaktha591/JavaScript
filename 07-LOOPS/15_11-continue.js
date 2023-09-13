//write a program that counts from 0 to 7 BUT it skips all 
//the numbers between [3,5] (3,4,5)

for (let i = 0; i <= 7; i++){
    if(3  <= i && i <= 5) continue;
    console.log(i);
}