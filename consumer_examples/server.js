// Demo of CommonJS usage of @dtsaknakis/dermtools
// Run with 'node server.js'

const { brandUnits, syringeUnits, gcs, pgcs, si, sipa } = require("@dtsaknakis/dermtools");

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

