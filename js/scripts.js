let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector('#modal-container');

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
      showDetails(pokemon);
    });
  }

  function showModal (pokemon) {

modalContainer.innerHTML='';
let modal = document.createElement('div');
modal.classList.add('modal');

let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'close'
closeButtonElement.addEventListener('click', hideModal);

let titleElement = document.createElement('h1');
titleElement.innerText = pokemon.name;

        let idElement = document.createElement('h2');
idElement.innerText = pokemon.id;

let heightElement = document.createElement('p');
heightElement.innerText = pokemon.height;


 let typesElement = document.createElement('p');
typesElement.innerText = "Types: " + pokemon.types;

 let pokemonImage = document.createElement("img");
 pokemonImage.classList.add("modal-img");
 pokemonImage.setAttribute("src", pokemon.imageUrl);



modal.appendChild(closeButtonElement);
modal.appendChild(titleElement);
modal.appendChild(idElement);
modal.appendChild(heightElement);
modal.appendChild(typesElement)
modalContainer.appendChild(modal);
modal.appendChild(pokemonImage);


modalContainer.classList.add('is-visible');

    function hideModal() {
 modalContainer.classList.remove('is-visible');
} // Close button

  window.addEventListener('keydown', (e) => {

  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();


  }
});

modalContainer.addEventListener('click', (e) => {
  let target = e.target;
  if(target === modalContainer) {
    hideModal();
  };

});

}




  function loadList() {
    showLoadMessage();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    })
      .then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
      hideLoadMessage();
    })
  };

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.id = details.id;
      item.types = [];
      details.types.forEach(function (pokemonType) {
          item.types.push(pokemonType.type.name);
        });
    })
      .catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }



  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

function showLoadMessage() {
let loadMessage = document.createElement('img');
  loadMessage.src='img/loading.gif';
  loadMessage.classList.add('load-message');
  document.querySelector('body').appendChild(loadMessage);
}

function hideLoadMessage() {
let loadMessage = document.querySelector('load-message');
  loadMessage.parentElement.removeChild(loadMessage);
}
