let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

  function loadList() {
    showLoadMessage();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
      hideloadMessage();
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
      function showModal() {
  let modalContainer = document.querySelector('#modal-container');
modalContainer.innerHTML='';
  let  modal = document.createElement('div');
  modal.classList.add('modal');

        let closeButtonElement = document.createElement
        ('button');
        closeButtonElement.classList.add('modal-close');
        modalContainer.classList.add('is-visible');
        closeButtonElement.innerText = 'close'

       let  pokemonName=document.createElement('h1');
        titleElement.innerText = pokemon.name

        let contentElement =  document.createElement('p');
        contentElement.innerText = text;

          modal.appendChild(closeButtonElement);
           modal.appendChild(pokemonName);
          modal.appendChild(contentElement);
          modalContainer.appendChild(modal);

        modalContainer.classLIst.add('is-visible');

        document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal title', 'This is the modal content!');
});
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});
       modalContainer.addEventListener("click", (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });
  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

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
  loadMessage.scr='img/loading.gif';
  loadMessage.classList.add('load-message');
  document.querySelector('body').appendChild(loadMessage);
}

function hideLoadMessag() {
let loadMessage = document.querySelector('load-message');
  loadMessage.parentElemnt.removeChild(loadMessage);
}
