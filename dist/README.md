# \@dtsaknakis/dermtools

## Info

A JavaScript/TypeScript library containing small tools potentially 
useful to Dermatologists.  
Currently created as a toy project, 
also serving the purpose of being a learning experience, therefore use with 
care and at your own risk - should you do so.  

Sample of the library's functions:  

- `brandUnits`: accepts one of three botulinum toxin brand names 
("botox", "dysport", "bocouture") and returns their units per vial  
- `syringeUnits`: accepts one of the above brand names, a dilution 
volume in mL (eg 2.5), and a syringe volume in mL (eg 0.5). It returns 
the total Units in the syringe, for that botulinum toxin brand with 
the specified dilution when preparing it.  
- `pasi`: accepts 4 arrays of 4 numbers each, an array for each body region 
(head/neck, arms, trunk, legs). Each array's first 3 numbers must be from 
0-4, representing severity of erythema, induration, and desquamation. The 
4th number must be from 0-6 and is the point(s) for the percentage of the 
area affected, for the respective body region. The function returns the 
total PASI score, a number (it may need rounding down the decimals, left 
to the library consumer to do if he wishes).  
- `parkland`: for burn injury patients, returns the approximate amount of 
fluids, in liters, that he/she needs in the first 24 hours, depending on his/her weight and the body surface area percentage injured (uses the Parkland Formula).

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
