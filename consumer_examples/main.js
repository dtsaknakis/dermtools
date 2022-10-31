// Demo ESM usage of @dtsaknakis/dermtools
// Run with 'npm start'

import { brandUnits, syringeUnits, gcs, pgcs, si, sipa, pasi, parkland } from "@dtsaknakis/dermtools";


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

// Add data received to HTML elements
const out1 = document.getElementById("output-1");
const out2 = document.getElementById("output-2");
out1.textContent = phrase1;
out2.innerHTML = phrase2;


// Initial PASI calc and HTML element update
const headAreaValues = [3, 4, 2, 6];
const armsAreaValues = [3, 3, 3, 6];
const trunkAreaValues = [3, 2, 3, 6];
const legsAreaValues = [4, 4, 4, 6];
const patientPASI = pasi(headAreaValues, armsAreaValues, trunkAreaValues, legsAreaValues).toFixed(2);
console.log("Total PASI:", patientPASI);
const out3 = document.getElementById("output-3");
out3.textContent = `Patient's total PASI: ${patientPASI}`;

// Parkland formula for burns
const fluids24h = parkland(80, 1005);
const phrase3 = `An 80kg patient with a 5% burn area requires: ${fluids24h}L of fluids the first 24h.`;
console.log(phrase3);

