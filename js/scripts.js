let pokemonRepository = (function () {
  let pokemonList= [
  {
    id: 001,
  name: 'Bulbasaur',
  number: '1',
  height: 0.7,
  weight: '6.9kg',
  type: 'Monster, Grass',
},
{
  id:004,
  name: 'Charmander',
  number: '4',
  height: 0.6,
  weight: '8.5kg',
  type: 'Monster , Dragon',
},
{
  id:'007',
  name: 'Squirtle',
  number: '7',
  height: 0.5,
  weight: '9kg',
  type: 'Monster , Water',
}
];

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}

return {
  add: add,
  getAll: getAll
};
})();

pokemonRepository.getAll().forEach(function(pokemon) {
document.write('<p>' + pokemon.name + ' ' + pokemon.height + ' ' + pokemon.weight)
});
