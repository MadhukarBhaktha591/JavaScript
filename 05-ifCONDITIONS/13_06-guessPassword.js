//write a program that tells the user "THAT'S NOT THE PASSWORD" if they guess the password wrong.
//however, if the user guesses the correct password, print out "ACCESS GRANTED"!!

//password
const password = '123456';

//guess 
const guess = '123456';

//check if not equal
if (guess !== password) {
    console.log('THAT\'S NOT THE PASSWORD');

}

//check for correct guess
if (guess === password) {
    console.log("ACCESS GRANTED");
}