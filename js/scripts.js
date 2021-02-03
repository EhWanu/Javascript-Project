let pokemonRepository = (function () {
  let pokemonList= [
  {
    id: 001,
  name: 'Bulbasaur',
  number: '1',
  height: 0.7,
  weight: '6.9kg',
  type: 'Grass',
},
{
  id:004,
  name: 'Charmander',
  number: '4',
  height: 0.6,
  weight: '8.5kg',
  type: 'Fire',
},
{
  id:'007',
  name: 'Squirtle',
  number: '7',
  height: 0.5,
  weight: '9kg',
  type: 'Water',
}
];

function add(pokemon) {
  pokemonList.push(pokemon);
}

function getAll() {
  return pokemonList;
}


  function showDetails(pokemon) {
    console.log(pokemon.name);
  }
  function addListItem(pokemon){
     let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');
    button.addEventListener('click', function(showDetails) {
      console.log(pokemon);
    });
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);

  }
return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,

};
})();

function showDetails(pokemon) {
  console.log(pokemon);
}
pokemonRepository.add({
  id:'025',
  name: 'Pikachu',
  number: '25',
  height: 0.5,
  weight: '6kg',
  type: 'Electric',})


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);

});
