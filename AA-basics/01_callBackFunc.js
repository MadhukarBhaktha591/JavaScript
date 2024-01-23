/* call back function */
console.log('One');
setTimeout(()=>{
    console.log('Three');
},1000)
console.log('Two');

/*REST operator*/




/*spread operator - ES6*/
let array = [1,2,3,4];
let array2 = [5,4,3];
let array3 = [...array,...array2];
console.log(array3);
array3 = [array,array2];
console.log(array3);