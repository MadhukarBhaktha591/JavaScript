//write a program that skips even numbers when counting from 0 to 6
/*
1
3
5
*/

for (let i = 0; i < 6; i++ ){
    const isEven = i % 2 === 0;

    if (isEven) {
        continue;
    }

    console.log(i);
}
/*
i = 4
isEven = true
______________
1
3

*/


