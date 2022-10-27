/* Run with 'node server.js' */

const { gcs, pgcs } = require("../dist/lib/es5");
const { si, sipa } = require("../dist/lib/es5");

console.log(gcs(0, 5, 6));
console.log(pgcs(1, 3, 4));
console.log(si(95, 120));
console.log(sipa(16, 105, 125));
