const items = [
  {
    title: "Total repair balm",
    description: "Бальзам для губ увлажнающий",
    price: 700,
    img: "img/бальзам для губ.png",
  },
  {
    title: "Lip gloss care intense",
    description: "Блеск для губ",
    price: 750,
    img: "img/блеск для губ.png",
  },
  {
    title: "Lip pencil",
    description: "Карандаш для губ",
    price: 890,
    img: "img/карандаш для губ.png",
  },
  {
    title: "Perfect concealer",
    description: "Консилер для лица",
    price: 1390,
    img: "img/консилер для лица.png",
  },
  {
    title: "Eyebrow liner",
    description: "Лайнер для бровей",
    price: 990,
    img: "img/лайнер для бровей.png",
  },
  {
    title: "Glow perfect powder",
    description: "Запеченная пудра для лица",
    price: 3100,
    img: "img/пудра для лица.png",
  },
  {
    title: "Blash melange",
    description: "Румяна запеченные",
    price: 2500,
    img: "img/румяна запеченные.png",
  },
  {
    title: "Perfect liquid blash",
    description: "Румяна кремовые",
    price: 630,
    img: "img/Румяна кремовые.png",
  },
  {
    title: "Liquid eyeshadow",
    description: "Жидкие тени для век",
    price: 1200,
    img: "img/тени для век.png",
  },
  {
    title: "Single eyeshadow",
    description: "Тени спаркл",
    price: 900,
    img: "img/тени спаркл.png",
  },
  {
    title: "Skin impression foundation",
    description: "Увлажняющий тональный крем",
    price: 1990,
    img: "img/тональный крем.png",
  },
  {
    title: "Eyelash mascara",
    description: "Тушь для ресниц",
    price: 550,
    img: "img/тушь для ресниц.png",
  },
];

let currentState = [...items];

const itemsContainer = document.querySelector("#shop-items");
const itemTemplate = document.querySelector("#item-template");
const nothingFound = document.querySelector("#nothing-found");


function renderItems(arr) {
  nothingFound.textContent = "";
  itemsContainer.innerHTML = "";
  arr.forEach((item) => {
    itemsContainer.append(prepareShopItem(item));
  });
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}

function sortByAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

function prepareShopItem(shopItem) {
  const { title, description, img, price } = shopItem;
  const item = itemTemplate.content.cloneNode(true);
  item.querySelector("h1").textContent = title;
  item.querySelector("p").textContent = description;
  item.querySelector("img").src = img;
  item.querySelector(".price").textContent = `${price}P`;

    return item;
}

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
  const searchString = searchInput.value.trim().toLowerCase();

  currentState = items.filter((el) =>
    el.description.toLowerCase().includes(searchString)
  );
  currentState.sort((a, b) => sortByAlphabet(a, b));
  renderItems(currentState);
  sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);




