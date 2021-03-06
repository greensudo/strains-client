## strains-client

[![NPM Version](http://img.shields.io/npm/v/strains-client.svg?style=flat)](https://npmjs.org/package/strains-client)
[![Downloads Per Month](https://img.shields.io/npm/dm/strains-client.svg)](https://npmjs.org/package/strains-client)

### Install
```sh
npm install strains-client
```

```js

import StrainsClient from 'strains-client';

const client = new StrainsClient('API_KEY');

// Fetch all strains
client.getStrains();

// Fetch strains by race (sativa, indica, hybrid)
client.getStrainsByRace('indica');

// Fetch strains by effect
client.getStrainsByEffect('Creative');

// Fetch strains by flavor
client.getAllStrainFlavors();

// Fetch strain details pass id for strain
client.getStrainDetails(id);

```

### Effects
```javascript
{effect: "Relaxed", type: "positive"}
{effect: "Dizzy", type: "negative"}
{effect: "Hungry", type: "positive"}
{effect: "Euphoric", type: "positive"}
{effect: "Happy", type: "positive"}
{effect: "Depression", type: "medical"}
{effect: "Insomnia", type: "medical"}
{effect: "Pain", type: "medical"}
{effect: "Stress", type: "medical"}
{effect: "Cramps", type: "medical"}
{effect: "Creative", type: "positive"}
{effect: "Energetic", type: "positive"}
{effect: "Talkative", type: "positive"}
{effect: "Lack of Appetite", type: "medical"}
{effect: "Nausea", type: "medical"}
{effect: "Dry Mouth", type: "negative"}
{effect: "Headache", type: "medical"}
{effect: "Uplifted", type: "positive"}
{effect: "Tingly", type: "positive"}
{effect: "Paranoid", type: "negative"}
{effect: "Sleepy", type: "positive"}
{effect: "Fatigue", type: "medical"}
{effect: "Headaches", type: "medical"}
{effect: "Dry Eyes", type: "negative"}
{effect: "Focused", type: "positive"}
{effect: "Eye Pressure", type: "medical"}
{effect: "Anxious", type: "negative"}
{effect: "Giggly", type: "positive"}
{effect: "Aroused", type: "positive"}
{effect: "Inflammation", type: "medical"}
{effect: "Spasticity", type: "medical"}
{effect: "Seizures", type: "medical"}
{effect: "Muscle Spasms", type: "medical"}
```

### Flavors
```
"Earthy"
"Chemical"
"Pine"
"Spicy/Herbal"
"Pungent"
"Pepper"
"Flowery"
"Citrus"
"Orange"
"Sweet"
"Skunk"
"Grape"
"Minty"
"Woody"
"Cheese"
"Diesel"
"Tropical"
"Grapefruit"
"Nutty"
"Lemon"
"Berry"
"Blueberry"
"Ammonia"
"Apple"
"Rose"
"Butter"
"Honey"
"Tea"
"Lime"
"Lavender"
"Strawberry"
"Mint"
"Chestnut"
"Tree Fruit"
"Pear"
"Apricot"
"Peach"
"Blue Cheese"
"Menthol"
"Coffee"
"Tar"
"Mango"
"Pineapple"
"Sage"
"Vanilla"
"Plum"
"Tobacco"
"Violet"
```
