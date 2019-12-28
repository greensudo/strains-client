export default class StrainsClient {
    constructor(key) {
        this.key = key;
        this.apiBaseUri = `http://strainapi.evanbusse.com/${key}/`;
    }

    getStrains = async () => {
        const uri = `${this.apiBaseUri}strains/search/all`;

        const response = fetch(uri)
            .then((res) => res.json())
            .then(data => console.log('strains:', data))
            .catch(err => console.error(err.message));
        return response;
    }

    getStrainsByRace = async (race) => {
        const uri = `${this.apiBaseUri}strains/search/race/${race}`;
        const response = await fetch(uri);
        console.log('getStrainsByRace response:', response.json());
        return response.json();
    }

    getStrainsByEffect = async (effect) => {
        const uri = `${this.apiBaseUri}strains/search/effect/${effect}`;
        const response = await fetch(uri)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err.message));
        return response.json();
    }

    getStrainDescription = async (id) => {
        const uri = `${this.apiBaseUri}strains/data/desc/${id}`;

        const response = await fetch(uri)
            .then(res => res.json())
            .then(data => data.desc)
            .catch(err => console.error(err.message));
        return response;
    }

    getStrainFlavor = async (id) => {
        const uri = `${this.apiBaseUri}strains/data/flavors/${id}`;
       
        const response = await fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response; 
    }

    getStrainEffects = async (id) => {
        const uri = `${this.apiBaseUri}strains/data/effects/${id}`;
       
        const response = await fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response;      
    }

    getStrainDetails = async (id) => {
        console.log('getStrainDeets');
        const description = this.getStrainDescription(id);
        const flavors = this.getStrainFlavor(id);
        const effects = this.getStrainEffects(id);       
        const strainDetails = {
            id,
            description,
            flavors,
            effects
        };

        return strainDetails;
    }

    getEffects = async () => {
        const uri = `${this.apiBaseUri}searchdata/effects`;
        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response;
    }

    getFlavors = async () => {
        const uri = `${this.apiBaseUri}searchdata/flavors`;
        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
            console.log('response:', response);
        return response;
    }
}