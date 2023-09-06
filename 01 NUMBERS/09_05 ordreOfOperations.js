//try this example
let math1 = 2 + 3 * 4;
console.log(math1);
// let math2 = 


/*
Assuming left to write evaluation
2 + 3 * 4 
5 * 4
20

but output is 14..
*/

//Suppose the computer ACUALLY reads from right to left
// console.log(' 1 + 2 = ' + 1 + 2) => 1 + 2 = 12
/*
'1 + 2 = ' + 1 + 2
'1 + 2 = ' + 3
'1 + 2 =  3'
...this isn't correct either
*/

/*multiplication and division take precedence over addition and substraction
//2 + 3 * 4
//2 + 12
//14
BUT, we can definitely force by using the parentheses...
*/

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);
