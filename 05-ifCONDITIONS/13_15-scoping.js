//scooping gives us the ability to have some privacy in our code.

//entire program is in global scope

//child scopes can look out in the parent scope

let x = 17;

if (true) {         //curly braces create a local scope
    x *= 2;
    console.log('it was true!!');

    let fish = 'blub';
    console.log(fish);
}           //everything in the scope goes away as closed brace comes 

console.log(x);  // ERROR : x not defined... if x declared inside if...
// child scope multiplies x value by 2 and dies but it's effect on the program remain
//
//console.log(fish); //ERROR : fish is not defined..

//================================================
//another example for scoping..

let y = 14;

if (true) {
//    y /= 2;       ERROR : CANNOT ACCESS Y BEFORE INITIALIZATION.
    let y = 4;
    console.log(y);
}

console.log(y);
