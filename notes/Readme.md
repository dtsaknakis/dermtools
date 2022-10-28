# My notes while creating this library

## Project setup

### Folder structure

Created this repo's directory (dermtools). In it I created a 
[src](../src/) directory for all the TypeScript source code, a 
[dist](../dist/) directory for the library's transpiled code, and a 
[consumer_examples](../consumer_examples/) directory for demoing the 
library's functionality.  

### Initial source code

In [src](../src/):  

- I created a [cosmetic](../src/cosmetic/) directory and in it a 
  [bonta.ts](../src/cosmetic/bonta.ts) file which exports two TypeScript 
  functions; one named `bontaUnits` that returns a botulinum toxin's Units
  per vial depending on its brand name, and a second one named 
  `syringeUnits` which returns a syringe size's units of a given botulinum 
  toxin product diluted with a given volume.  
- I created an [emergency](../src/emergency/) directory which has 
  [shock.ts](../src/emergency/shock.ts) and [gcs.ts](../src/emergency/gcs.ts) 
  files in it with some sample code (the idea is to start developing mini 
  tools and calculators for dermatological emergency situations.  
- I created an [index.ts](../src/index.ts) file as a main entry point to 
  the library, which exports the functions in the above two directories. 
  This is what will be available to the end user/consumer of the library.  

### Git project

I initialized a local Git project via `git init`, added a '\.gitignore' 
file. It excludes the node_modules dir (created below) completely, and 
from the dist dir it allows only the library's [dist/package.json](../dist/package.json) 
file and the library's [dist/README.md](../dist/README.md) file 
(both created below).  

Created a GitHub repo with the same 'dermtools' name as the local Git 
repo, connected the two via `git remote add origin`.  

### npm project, TypeScript install and configuration

Started an npm project of the main project (from the root folder of the 
project) via `npm init`, modified the resulting [package.json](../package.json) 
"name" field to 'dermtools', added a descritpion.  

Installed TypeScript as a dev dependency via `npm i -D typescript`.  
Added a "compile" script in the [package.json](../package.json) 
file, which first removes any previous content in the dist/lib directory, 
(created via config settings below) then uses `tsc` to compile to both a 
dist/lib/es6 and a dist/lib/es5 directories, via configurations from 
[tsconfig.json](../tsconfig.json) and [tsconfig.es5.json](../tsconfig.es5.json) 
(created below).  

Created the [tsconfig.json](../tsconfig.json) file with settings for 
compiling the TypeScript code from the src directory to 
ES6 module syntax JavaScript inside the dist/lib/es6 directory. The 
"declaration" prop is also set to true so that `tsc` can generate the 
TypeScript types in the library (important for TypeScript developers 
using the library).  
This is what it looks like currently:

```json
{
    "compilerOptions": {
        "module": "ES6",
        "target": "ES5",
        "lib": ["ES2020", "DOM"],
        "declaration": true,
        "outDir": "./dist/lib/es6",
        "moduleResolution": "node"
    },
    "include": ["src/**/*"]
}
```

Created the [tsconfig.es5.json](../tsconfig.es5.json) file with settings for 
compiling the TypeScript code from the src directory to 
ES5 (CommonJS) syntax JavaScript inside the dist/lib/es5 directory. Again, 
the "declaration" prop is set to true.  

```json
{
    "compilerOptions": {
        "module": "CommonJS",
        "target": "ES5",
        "lib": ["ES2020", "DOM"],
        "declaration": true,
        "outDir": "./dist/lib/es5",
        "moduleResolution": "node"
    },
    "include": ["src/**/*"]
}
```

### The library package.json file

The [dist](../dist/) directory is the library's directory, which is the 
one that will be published to npm (the rest is the GitHub project's as 
a whole),  

I created a [dist/package.json](../dist/package.json) for the library 
itself. It sets the library's name, scoped under my npmjs username as 
its scoped namespace. It sets a version, the URL of the/this GitHub repo, 
where bugs/issues can be opened, a description, a homepage, the author, 
some keywords.  
Very important fields in it are "main" (pointing to the lib/es5/index.js 
file) and "module" (pointing to the lib/es6/index.js file) so that the 
library user can use both CommonJS and ESModules if he wants to.  
Also, "files" tells npm what files/folders to include when publishing 
the library.  
This is what it looks like currently:  

```json
{
    "name": "@dtsaknakis/dermtools",
    "version": "0.0.1",
    "description": "A JavaScript/TypeScript library containing small tools potentially useful to Dermatologists.",
    "main": "lib/es5/index.js",
    "module": "lib/es6/index.js",
    "sideEffects": false,
    "repository": {
        "type": "git",
        "url": "git+https://github.com/dtsaknakis/dermtools.git"
    },
    "files": [
        "lib",
        "CHANGELOG.md",
        "LICENSE",
        "package.json",
        "README.md"
    ],
    "keywords": [
        "dermatology",
        "medical",
        "medicine",
        "dermatology calculators",
        "medical calculators"
    ],
    "author": "Dimitris Tsaknakis",
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/dtsaknakis/dermtools/issues"
    },
    "homepage": "https://github.com/dtsaknakis/dermtools#readme"
}
```
 
## Compiling the TypeScript source code to library JavaScript

Having installed TypeScript and configuring the transpilation process 
via the tsconfig files and the main [package.json](../package.json)'s 
"compile" script, I used it in order to transpile the code inside the 
dist/lib directory:  

```zsh
cd dermtools  # inside the top-level project folder (not the dist)

npm run compile  # transpile TS to JS inside dist/lib/es5 and dist/lib/es6
```

## Publishing the library to npm

**From inside the [dist](../dist/) directory** I logged into my npm 
account, via `npm login` (check via `npm whoami`).  
After logging in, I published the library via the npm publish command:

```zsh
npm publish --access=public
```

After publishing, it's available in [npmjs.com](https://www.npmjs.com/).  

### Making changes and publishing

After making changes to the library, npm has a version patch command 
that can automatically update the package.json "version" field, before 
publishing again to npm:  

```zsh
# After making changes to the source code and compiling the lib code
cd dist  # navigate to the library's directory
npm version patch  # updates the package.json version
npm publish --access=public  # publish the updated lib version

# Commit and push the updated version to GitHub too
cd dermtools
git add -A
git commit -m "Some message here"
git push origin master
```

## Demo library usage

The [consumer_examples](../consumer_examples/) directory is where the 
library demo is. That's where both CommonJS is used, along with Node, 
and where the ES6 syntax is also used along with an index.html file 
and Parcel.  

I initialized an npm project in it (`npm init`), installed [Parcel](https://parceljs.org/) 
(`npm i -D parcel`), installed TypeScript (`npm i -D typescript`), and 
of course my library (`npm i -D @dtsaknakis/dermtools`).  

In [consumer_examples/package.json](../consumer_examples/package.json) I created a 
"start" script that starts a development server via Parcel and loads 
the [index.html](../consumer_examples/index.html) file to 
[http://localhost:1234](http://localhost:1234).  

### CommonJS demo using Node

I created a [server.js](../consumer_examples/server.js) file, and in it 
I get the library's functions and use them. This is what it looks like:  

```js
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
```

The file can be run via the `node` command, for example:

```zsh
cd consumer_examples
node server.js  # demoing the library
```

### ESM demo using Parcel

I created a [consumer_examples/main.js](../consumer_examples/main.js) 
and a [consumer_examples/index.html](../consumer_examples/index.html) 
that links to it via a script tag with `type="module"`.  
The [main.js](../consumer_examples/main.js) file does the same things, 
but this time it gets the library's functions via `import`. This is what 
it looks like:  

```js
import { brandUnits, syringeUnits, gcs, pgcs, si, sipa } from "@dtsaknakis/dermtools";

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
```

The local dev server can be run with Parcel via `npm start`, automatically 
opening the default browser to [http://localhost:1234](http://localhost:1234).  
To close the local development server, press <kbd>Ctrl</kbd>-<kbd>C</kbd> 
in the terminal.  

