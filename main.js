const btns = document.querySelector(".btns");
const cards = document.querySelector(".cards");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
let loading = document.querySelector(".loading");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

const getDataFuncForFetch = async () => {
  const request = await fetch("https://fakestoreapi.com/products");
  const response = await request.json();
  return response;
};
getDataFuncForFetch().then((data) => {
  getdatauseui(data);
  searchdata(data);
  category(data);
});

function category(data) {
  btns.addEventListener("click", (event) => {
    if (event.target.id !== "" && event.target.id !== "all") {
      const categorydata = data.filter((value) => {
        return value.category === event.target.id;
      });
      cards.innerHTML = "";
      getdatauseui(categorydata);
    } else if (event.target.id === "all") {
      cards.innerHTML = "";
      getdatauseui(data);
    }
  });
}

function searchdata(data) {
  form.addEventListener("keyup", (e) => {
    e.preventDefault();
    const search = input.value;
    const searchdata = data.filter((value) => {
      let kichckina = value.title.toLowerCase().trim();
      return kichckina.includes(search.toLowerCase().trim());
    });
    cards.innerHTML = "";
    if (searchdata.length !== 0) {
      getdatauseui(searchdata);
    } else {
      document.querySelector(
        ".container"
      ).innerHTML = `<h1 class="notfound">Item Not found <i class="fa-solid fa-link-slash"></i></h1>`;
    }
  });
}
function getdatauseui(data) {
  function data_i(params) {
    const i = `<i class="fa-solid gold fa-star"></i>`;
    const i2 = `<i class="fa-solid gray fa-star"></i>`;

    return i.repeat(params) + i2.repeat(5 - params);
  }
  data.forEach((value) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
     <div class="card_img">
        <img src=${value.image} alt="" />
      </div>
      <div class="card_title">
        <h2 class="multi-line">${value.title}</h2>
        <p class="multi-line">${value.description}</p>
        <div class="card_rating">
        <p>${data_i(Math.round(value.rating.rate))} ${Math.round(
      value.rating.rate
    )}</p>

<p>${value.rating.count}<span class="pcs"> pcs</span></p>
        </div>
      </div>
      <div class="card_price">
        <p class="price">${value.price} $</p>
        <button class="btn">Add to cart</button></div>`;
    cards.append(card);
  });
}

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const signout = document.querySelector(".signout");
signout.addEventListener("click", (e) => {
  localStorage.removeItem("access_token");
  window.location.href = "./index.html";
});
function addsmth() {
  if (!localStorage.getItem("access_token")) {
    window.location.href = "./index.html";
  }
}
addsmth();
