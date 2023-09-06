//this kingdom has 2 peasants
const peasant1 = 'Madz'.toUpperCase();
const peasant2 = 'Balz'.toUpperCase();

/*
Suppose a kingdom has a problem with dragons. they need somebody to call out when dragons are going to attack the castle.
 */

console.log(`\n${peasant1 } : SIRE!! Dragons are attacking the castle.`);

//somebody else says how many dragons there are 
const dragonCount = 10
console.log(`\n${peasant2 } : I see ${dragonCount} dragons approaching ... what should we do?`);

/**
 * the peasant like to fight dragons with bazookas, but bazookas don't come cheap. bazookas cost a certain amount per bazooka, and each dragon requires two bazookas to be taken down.
 */
const gold = 5000;
const costPerBazooka = 400;
const bazookaNeededFor1Dragon = 2;
console.log(`\n${peasant1} : Well, the kingdom has ${gold}g. `);
console.log(`\n${peasant2} : Bazookas cost ${costPerBazooka}g today.`);

//how can we figure it out how many bazookas do we need to take out all the dragons?

//5000g / 400g per bazooka
const bazookaAllowance = gold / costPerBazooka;
console.log(`\n${peasant2} : We can afford ${bazookaAllowance} bazookas to fight off the dragons.`)

//10 dragons...12.5 bazookas in total, but each dragon requires 2 bazookas
//12.25 / 2 < 10
const slayableDragonCount = bazookaAllowance / bazookaNeededFor1Dragon;
console.log(`\n${peasant1} : With that, we can slay ${slayableDragonCount} dragons.`);

//king walks in and does some quick maths
const kingName = 'Abhi'.toLowerCase();
console.log(`\n***KING ${kingName} walks in to perform agile mathematics. ***`);
const dragonsRemaining = dragonCount - slayableDragonCount;
console.log(`\nKING ${kingName} : Dear me, there will be ${dragonsRemaining} BEASTS leftover. We're doomed !!.`);

console.log()