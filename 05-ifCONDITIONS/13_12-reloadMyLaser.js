//1.write a program that prints out "RELOAD" if we're out ou armo, 
//and otherwise just prints out however much arm we have left with..

//2. refactor our code to print out how much ammo is left out of the max ammo for when we have ammo remaining

//3. when we have to reload, fill up the laser back to the maximum ammo and tell user (however you want)

//4.Instead of relaoding the laser completely ..reload only to 
//half of the max ammo.

//ammo count
let ammo = 0 ;
const maxAmmo = 100;

//out of ammo test
if (ammo === 0) {
    console.log(" TIME TO RELOAD....");
    ammo  += maxAmmo / 2;
    console.log(`Laser refilled Current ammo: ${ammo}/ ${maxAmmo}`);
}
//some ammo left
else {
    console.log(`Ammo remaining: ${ammo} / ${maxAmmo}`);
}