/**
 * reminder:
   true && true && true => true
   true && ture && false => false

   false || false || fasle => false
   fasle || false || true => true

   ()
   !
   &&
   ||
 */

const example1 = (false || true) && false;
//true && fasle
//false
console.log(example1);

const example2 = true || (false && true || false);
//true || (false || false)
//true || false
//true
console.log(example2);

const example3 = false || (true && !(false || true)) && false;
//false || (true && !true) && false;
//false || (true && fasle) && false;
//false || fasle && false;
//false || false
//false
console.log(example3);

