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
  type: 'Mosnter , Water',
},
];


for (let i=0; i <pokemonList.length; i++)
{
  if (pokemonList[i].height >= 0.7) //if Pokemon is equal too or larger than 0.7
  document.write('<br>' + pokemonList[i].id + ' ' + pokemonList[i].name + ' height: ' + pokemonList[i].height + ' -  This one is the biggest! '); //for loop writing pokedex attributes.


  else if (pokemonList[i].height < 0.7) //if pokemon is smaller than 0.7
  document.write('<br>' + pokemonList[i].id + ' ' + pokemonList[i].name + ' height: ' + pokemonList[i].height);  //for loop writing pokedex attributes.
}
