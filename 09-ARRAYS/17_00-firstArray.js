//array allow us to store multiple pieces of data. in javascipt, you can store 
//whatever you want in an array , and an array can store multiple types. 
//however, in other languages, it's often the case that you CAN'T mix types
const arr = [17, false, `some string about my aunt john`];
console.log(arr);
console.log(`Length: ${arr.length}`);

//very often , we need to manipulate the values in an array .
//suppose you want to change at a specific index...let's say index 1
arr[1] = `batman`;
console.log(arr);
console.log(`Length : ${arr.length}`);

//you can add an element to an array, either at the front or in the back 
//back
arr.push(14 - 2);
console.log(arr);
console.log(`Length ${arr.length}`);
//front
arr.unshift('zach');
console.log(arr);
console.log(`Length: ${arr.length}`);
console.log(`---------------------------`);

//we can remove elements from arrays using pop() which removes last item added (from end)
const oldLastElement = arr.pop();
console.log(arr, `Removed ${oldLastElement}`); //notice how length has changed? because one value was removed!   

//front
const oldFirstElement = arr.shift();
console.log(arr, `${oldFirstElement} was removed.`); //prints zach because he is first person on line!
 console.log(`Length:${arr.length}`);