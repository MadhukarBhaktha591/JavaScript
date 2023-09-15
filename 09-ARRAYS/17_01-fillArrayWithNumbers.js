//1. create an array with the numbers 0 to 8 (inclusive) inside of it. only
// the whoel numbers
const arr1 = [];
for(let i=0;i<=8;++i){
    arr1.push(i);
}
console.log('Array 1: ' ,arr1);

//2. add elements in reverse order
const arr2 = [];
for(let i=0;i<=8;++i){
    arr2.unshift(i);
}
console.log('Array 2: ' ,arr2);

//3. remove all of the elements from array 1 using the remove from FRONT method,
//but also print out the array at each loop iteration
for(let i = 0; i <= 8; i++){
    elemFromFront = arr1.shift(i);
    console.log(`Element removed is ${elemFromFront}||`, `Array: ${arr1} `)
}

//4. remove all of the elements from array 2 using the remove from BACK method,
//but still print out the array at each loop iteration.
for(let i = 0; i <= 8; i++){
    elemFromBack = arr2.pop(i);
    console.log(`Element removed is ${elemFromBack}||`, `Array: ${arr2} `)
}