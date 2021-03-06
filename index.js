class StrainsClient {
    constructor(key) {
        this.key = key;
        this.apiBaseUri = `http://strainapi.evanbusse.com/${key}/`;
    }

    static getStrains() {
        const uri = `${this.apiBaseUri}strains/search/all`;

        const response = fetch(uri)
            .then((res) => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response;
    }

    static getStrainsByRace(race) {
        const uri = `${this.apiBaseUri}strains/search/race/${race}`;

        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data);
        return response;
    }

    static getStrainsByEffect(effect) {
        const uri = `${this.apiBaseUri}strains/search/effect/${effect}`;

        const response = fetch(uri)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err.message));
        return response.json();
    }

    getStrainDescription = (id) => {
        const uri = `${this.apiBaseUri}strains/data/desc/${id}`;

        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data.desc)
            .catch(err => console.error(err.message));
        return response;
    }

    getStrainFlavor = (id) => {
        const uri = `${this.apiBaseUri}strains/data/flavors/${id}`;
       
        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response; 
    }

    getStrainEffects(id) {
        const uri = `${this.apiBaseUri}strains/data/effects/${id}`;
       
        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response;      
    }

    static getStrainDetails = (id) => {
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

    static getEffects() {
        const uri = `${this.apiBaseUri}searchdata/effects`;

        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response;
    }

    static getFlavors() {
        const uri = `${this.apiBaseUri}searchdata/flavors`;

        const response = fetch(uri)
            .then(res => res.json())
            .then(data => data)
            .catch(err => console.error(err.message));
        return response;
    }
}

export default StrainsClient;