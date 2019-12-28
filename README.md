```js

import StrainsApiClient from 'strainsapi-client';

const client = new StrainsApiClient('API_KEY');

// Fetch all strains
client.getAllStrains();

// Fetch strains by race
client.getStrainsByRace('indica');

// Fetch strains by effect
client.getStrainsByEffect('Creative');

// Fetch strain details
client.getStrainDetails(id);

```
