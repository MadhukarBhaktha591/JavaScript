/**
 * reminder:
   true && true && true => true
   true && ture && false => false

   false || false || fasle => false
   fasle || false || true => true

 */

const example1 = false || true;
console.log(example1);

const example2 = true && true || false;
console.log(example2);

const example3 = false || false || false && true;
console.log(example3);

const example4 = true && false || true || false && true;
console.log(example4);

/**
 * true && false || true || false && true;
   false || true || fasle && true
   false || true || false
   true || false
   true
 */