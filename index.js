export default class StrainsClient {
    constructor(key) {
        this.key = key;
    }

    static apiBaseUri = `strainapi.evanbusse.com/${this.key}/strains/`;

    static getAllStrains = async () => {
        const uri = `${this.apiBaseUri}search/all`;
        const response = await fetch(uri);
        console.log('getAllStrains response:', response.json());
        return response.json();
    }

    static getStrainsByRace = async (race) => {
        const uri = `${this.apiBaseUri}search/race/${race}`;
        const response = await fetch(uri);
        console.log('getStrainsByRace response:', response.json());
        return response.json();
    }

    static getStrainsByEffect = async (effect) => {
        console.log(`Getting strains with ${effect} effect`);
        const uri = `${this.apiBaseUri}search/effect/${effect}`;
        const response = await fetch(uri);
        return response.json();
    }

    static getStrainDetails = async (id) => {
        console.log('Getting details for strain:', id);

        const strainDescUri = `${this.apiBaseUri}data/desc/${id}`;
        const strainEffectsUri = `${this.apiBaseUri}data/effects/${id}`;
        const strainFlavors = `${this.apiBaseUri}data/flavors/${id}`;

        const strainDesc = await fetch(strainDescUri);
        const strainEffects = await fetch(strainEffectsUri);
        const strainFlavors = await fetch(strainFlavors);

        const strainDetails = {
            id,
            description: strainDesc,
            effects: strainEffects,
            flavors: strainFlavors
        };
        
        return strainDetails;
    }
}