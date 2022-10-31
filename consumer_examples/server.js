// Demo of CommonJS usage of @dtsaknakis/dermtools
// Run with 'node server.js'

const { brandUnits, syringeUnits, gcs, pgcs, si, sipa, pasi, parkland } = require("@dtsaknakis/dermtools");


const dysportUnits = brandUnits("   dysPORt  ");
const phrase1 = `A Dysport vial has ${dysportUnits} Units.`;
console.log(phrase1);

const mySyringeUnits = syringeUnits("dysport", 2.5, 0.5);
const phrase2 = `A 0.5mL syringe contains ${mySyringeUnits}U of Dysport diluted with 2.5mL.`;
console.log(phrase2);

console.log(" ");
console.log(gcs(0, 5, 6));        // Glasgow Coma Scale calculation
console.log(pgcs(1, 3, 4));       // pediatric Glasgow Coma Scale calculation
console.log(si(95, 120));         // adult shock index score
console.log(sipa(16, 105, 125));  // children's shock index score


const pasiScore = pasi([3, 4, 4, 6], [4, 4, 4, 6], [4, 4, 4, 6], [4, 4, 4, 6]);
console.log("Total PASI:", pasiScore.toFixed(2));

// Parkland formula for burns
const fluids24h = parkland(80, 5);
const phrase3 = `An 80kg patient with a 5% burn area requires: ${fluids24h}L of fluids the first 24h.`;
console.log(phrase3);

