# \@dtsaknakis/dermtools

- Last update: 2022-10-28

---

## Info

A JavaScript/TypeScript library containing small tools potentially 
useful to Dermatologists.  
So far it only has demo code:  

- `brandUnits`: accepts one of three botulinum toxin brand names 
  ("botox", "dysport", "bocouture") and returns their units per vial  
- `syringeUnits`: accepts one of the above brand names, a dilution 
  volume in mL (eg 2.5), and a syringe volume in mL (eg 0.5). It returns 
  the total Units in the syringe, for that botulinum toxin brand with 
  the specified dilution when preparing it.  

More utilities and calculators will be added in time.  

## Installing the library

```zsh
npm install @dtsaknakis/dermtools  # or npm i @dtsaknakis/dermtools

# Or as a dev dependency
npm install --save-dev @dtsaknakis/dermtools  # npm i -D @dtsaknakis/dermtools
```

## Example usage

Using CommonJS:

```js
const { brandUnits, syringeUnits } = require("@dtsaknakis/dermtools");

const botoxUnits = brandUnits("botox"); // 100
const mySyringeUnits = syringeUnits("dysport", 2.0, 0.5); // 125
```

Using ES6 imports:

```js
import { brandUnits, syringeUnits } from "@dtsaknakis/dermtools";

const botoxUnits = brandUnits("botox"); // 100
const mySyringeUnits = syringeUnits("dysport", 2.0, 0.5); // 125
```

