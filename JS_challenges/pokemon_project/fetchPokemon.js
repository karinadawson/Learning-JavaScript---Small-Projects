
// const fetchPokemon = (pokemonName) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });
// }
// console.log("End of file.")


// updated below to include promise:

const fetchPokemon = (pokemonName) => {
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
            }
            return pokemonData
        console.log(pokemonData);
    })
        .catch((error) => {
            console.log(error);
        });
}

console.log("End of file.")

module.exports = fetchPokemon