# dermtools

- Description: A JavaScript/TypeScript library containing small tools 
potentially useful to Dermatologists. Currently created as a toy project, 
also serving the purpose of being a learning experience, therefore use with 
care.  
- My [notes while creating the library](notes/)
- Demo usage of the library can be found in the [consumer_examples](consumer_examples/) 
directory.  
- This has started out as a learning exercise for both TypeScript as well 
as for creating npm packages, so please be patient - the library is 
practically not very useful, yet.  

  ---

## [Emergency tools](src/emergency/)

- Glasgow Coma Scale
  - Adult: `gcs` inside [emergency/gcs.ts](src/emergency/gcs.ts)
  - Pediatric: `pgcs` inside [emergency/gcs.ts](src/emergency/gcs.ts)
- Shock Index
  - Adults: `si` inside [emergency/shock.ts](src/emergency/shock.ts)
  - Children: `sipa` inside [emergency/shock.ts](src/emergency/shock.ts)

## [Clinical tools](src/clinical/)

- PASI score for psoriasis: `pasi`, inside [clinical/psoriasis.ts](src/clinical/psoriasis.ts)

## [Cosmetic tools](src/cosmetic/)

- Botulinum toxin related
  - `brandUnits` inside [cosmetic/bonta.ts](src/cosmetic/bonta.ts)
  - `syringeUnits` inside [cosmetic/bonta.ts](src/cosmetic/bonta.ts)

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

<br><br>

---

## To Do

- Add more functionality (utilities, tools, calculators, etc)
- Convert any JavaScript src source code to TypeScript.
- Improve the source code as I get better at TypeScript.
