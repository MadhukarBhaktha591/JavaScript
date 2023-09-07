//dragon has some health and we can shoot them 3 times.
// we want to see if we can defeat the dragon.
//dragon stats
const dragonHealth = 100;

//bazooka stats
const shot1Damage = 25;
const shot2Damage = 50;
const shot3Damage = 17;
const totalDamage = shot1Damage + shot2Damage + shot3Damage;

/**
 * tracing logic down here
 * this is an approach to do each shot and then calculate the health after each shot
 * dragon 100
 *              -25
 * dragon 75
 *              -50
 * dragon 25
 *              -17
 * dragon 8
 * 
 * we could also just some up the damage from each shot and then subtraact the starting health
 * dragon 100
 *              -25
 *              -50
 *              -17
 * =====================
 *              -92
 * dragon 100 - 92 = 8
 */
console.log(`The leftover health is ${dragonHealth - totalDamage} hp `);
console.log(`The dragon was beaten: ${dragonHealth - totalDamage <= 0}`);