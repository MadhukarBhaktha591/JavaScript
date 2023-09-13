// write a program that counts by 3 from [0,20)
for(let i = 0; i < 20; i += 3){
    if (i == 9 || i==15 ) continue;
    console.log("i is " + i); // prints out: 'i is 0', then 'i is 3' and so
}

/*
i  = 21
------------------
0
3
6
9
12
15
18
*/