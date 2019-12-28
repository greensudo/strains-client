export default class StrainsApiClient {
    constructor(key) {
        this.key = key;
        this.apiBaseUri = `http://strainapi.evanbusse.com/${key}/strains/`;
    }

    getAllStrains = async () => {
        console.log('getAllStrains func');
        const uri = `${this.apiBaseUri}search/all`;
        console.log('getAllStrains uri:', this.apiBaseUri);
        const response = fetch(uri).then((res) => res.json())
        .then(data => {
            console.log('all strains from strainsapi:', data);
        })
        .catch(err => console.error(err.message));
        return response;
    }

    getStrainsByRace = async (race) => {
        const uri = `${this.apiBaseUri}search/race/${race}`;
        const response = await fetch(uri);
        console.log('getStrainsByRace response:', response.json());
        return response.json();
    }

    getStrainsByEffect = async (effect) => {
        console.log(`Getting strains with ${effect} effect`);
        const uri = `${this.apiBaseUri}search/effect/${effect}`;
        const response = await fetch(uri);
        return response.json();
    }

    getStrainDetails = async (id) => {
        console.log('Getting details for strain:', id);

        const strainDescUri = `${this.apiBaseUri}data/desc/${id}`;
        const strainEffectsUri = `${this.apiBaseUri}data/effects/${id}`;
        const strainFlavorsUri = `${this.apiBaseUri}data/flavors/${id}`;

        const strainDesc = await fetch(strainDescUri);
        const strainEffects = await fetch(strainEffectsUri);
        const strainFlavors = await fetch(strainFlavorsUri);

        const strainDetails = {
            id,
            description: strainDesc,
            effects: strainEffects,
            flavors: strainFlavors
        };
        console.log('strain details:', strainDetails);

        return strainDetails;
    }
}