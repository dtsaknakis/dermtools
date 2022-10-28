# dermtools

- Description: A JavaScript/TypeScript library containing small tools 
  potentially useful to Dermatologists.
- [Useful links](notes/_useful_links.md)
- My [notes while creating the library](notes/)
- Demo usage of the library can be found in the [consumer_examples](consumer_examples/)  
  directory.  
- This has started out as a learning exercise for both TypeScript as well 
  as for creating npm packages, so please be patient - the library is 
  practically not very useful, yet.  

  ---

## [Cosmetic tools](src/cosmetic/)

- Botulinum toxin related
  - `brandUnits` from [cosmetic/bonta.ts](src/cosmetic/bonta.ts)
  - `syringeUnits` from [cosmetic/bonta.ts](src/cosmetic/bonta.ts)

## [Emergency tools](src/emergency/)

- Glasgow Coma Scale
  - Adult: `gcs` from [emergency/gcs.ts](src/emergency/gcs.ts)
  - Pediatric: `pgcs` from [emergency/gcs.ts](src/emergency/gcs.ts)
- Shock Index
  - Adults: `si` from [emergency/shock.ts](src/emergency/shock.ts)
  - Children: `sipa` from [emergency/shock.ts](src/emergency/shock.ts)


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

- Convert any JavaScript src source code to TypeScript.
