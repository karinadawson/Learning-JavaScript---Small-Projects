const fetchPokemon = require("./fetchPokemon.js");

describe('Fetch Pokemon', () => {
    it('returns a promise of the requesed poke data', (done) => {
      fetchPokemon("pikachu")
        .then((pokemon) => {
          expect(pokemon.name).toEqual('pikachu');
          done();
        });
    });
  });