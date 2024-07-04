const items = [
  {
    title: "Бальзам для губ",
    description: "Total repair balm",
    price: 700,
    img: "img/бальзам для губ.png",
  },
  {
    title: "Блеск для губ",
    description: "Lip gloss care intense",
    price: 750,
    img: "img/блеск для губ.png",
  },
  {
    title: "Карандаш для губ",
    description: "Lip pencil",
    price: 890,
    img: "img/карандаш для губ.png",
  },
  {
    title: "Консилер для лица",
    description: "Perfect concealer",
    price: 1390,
    img: "img/консилер для лица.png",
  },
  {
    title: "Лайнер для бровей",
    description: "Eyebrow liner",
    price: 990,
    img: "img/лайнер для бровей.png",
  },
  {
    title: "Пудра для лица",
    description: "Glow perfect powder",
    price: 3100,
    img: "img/пудра для лица.png",
  },
  {
    title: "Румяна запеченные",
    description: "Blash melange",
    price: 2500,
    img: "img/румяна запеченные.png",
  },
  {
    title: "Румяна кремовые",
    description: "Perfect liquid blash",
    price: 630,
    img: "img/Румяна кремовые.png",
  },
  {
    title: "Жидкие тени для век",
    description: "Liquid eyeshadow",
    price: 1200,
    img: "img/тени для век.png",
  },
  {
    title: "Тени спаркл",
    description: "Single eyeshadow",
    price: 900,
    img: "img/тени спаркл.png",
  },
  {
    title: "Тональный крем",
    description: "Skin impression foundation",
    price: 1990,
    img: "img/тональный крем.png",
  },
  {
    title: "Тушь для ресниц",
    description: "Eyelash mascara",
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
    el.title.toLowerCase().includes(searchString)
  );
  currentState.sort((a, b) => sortByAlphabet(a, b));
  renderItems(currentState);
  sortControl.selectedIndex = 0;
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);

const sortControl = document.querySelector("#sort");
sortControl.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case "expensive": {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case "alphabet": {
      currentState.sort((a, b) => sortByAlphabet(a, b));
      break;
    }
  }
  renderItems(currentState);
});


