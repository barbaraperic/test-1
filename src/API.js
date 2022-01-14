const pkmnURL = "https://pokeapi.co/api/v2/pokemon/ditto";

const createPkmnCard = (imgURL, name) => {
  const parent = document.createElement("figure");
  const pkmnImg = document.createElement("img");
  const pkmnName = document.createElement("figcaption");

  pkmnImg.src = imgURL;
  pkmnName.innerText = name;

  parent.appendChild(pkmnImg);
  parent.appendChild(pkmnName);

  document.querySelector(".tasks").appendChild(parent);
};

const displayPkmnCard = () => {
  fetch(pkmnURL)
    .then((response) => response.json())
    .then((data) => createPkmnCard(data.sprites.front_default, data.name));
};

export default displayPkmnCard;
