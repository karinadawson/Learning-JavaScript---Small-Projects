class Pokedex {

    constructor() {
        this.pokedex = []
    }

    catch = (pokemonName) => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => {
                if(response.ok) {
                return response.json();
                }
                else {
                    throw new Error('Error' + response.statusText);
                }
            })
            .then((data) => {
                const pokemonData = {
                    name: data.name,
                    id: data.id,
                    height: data.height,
                    weight: data.weight,
                    types: data.types.map(typeInfo => typeInfo.type.name)    
                };
                this.pokedex.push(pokemonData);
                console.log(pokedex)
        })
            .catch((error) => {
                console.log(error);
            });
    }

    all() {
        this.pokedex.sort((a, b) => a.id - b.id);
        return this.pokedex
    }
} 

const pokedex1 = new Pokedex();

Promise.all([
pokedex1.catch("pikachu"),
pokedex1.catch("bulbasaur"),
pokedex1.catch("jigglypuff")])
.then(() => {  
    console.log(pokedex1.all());
});

module.exports = Pokedex