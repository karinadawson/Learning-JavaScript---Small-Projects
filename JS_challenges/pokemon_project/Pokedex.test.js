const Pokedex = require('./Pokedex'); 

describe('add and list pikachu', () => {
    const pokedex = new Pokedex
    it('Pikachu listed when catch and all called', async () => {
      await pokedex.catch("pikachu")
      expect(pokedex.all()).toEqual([{
        name: 'pikachu',
        id: 25,
        height: 4,
        weight: 60,
        types: ["electric"]
    }]);
        
        });
});

describe('add and list 3 pokemons', () => {
    const pokedex = new Pokedex
    it('Pikachu, bulbasaur and jigglypuff listed when catch and all called', async () => {
      await pokedex.catch("pikachu")
      await pokedex.catch("bulbasaur")
      await pokedex.catch("jigglypuff")
      expect(pokedex.all()).toEqual([
        {
          name: 'bulbasaur',
          id: 1,
          height: 7,
          weight: 69,
          types: [ 'grass', 'poison' ]
        },
        {
          name: 'pikachu',
          id: 25,
          height: 4,
          weight: 60,
          types: [ 'electric' ]
        },
        {
          name: 'jigglypuff',
          id: 39,
          height: 5,
          weight: 55,
          types: [ 'normal', 'fairy' ]
        }
      ]);
        
        });
});