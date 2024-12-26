// const p1 = new new Promise((resolve)=>{setTimeout(()=>{res(1),1000})}) => {
//   if (true) {
//     res(1);
//   }
// });
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// const p4 = Promise.resolve(4);
// Promise.all([p1, p2, p3, p4]).then((result) => {
//   console.log(result);
// });
// ========================================================

// const p1 = new Promise((resolve, rej) => {
//   setTimeout(() => {
//     resolve(1), 1000;
//   });
// });
// const p2 = new Promise((resolve, rej) => {
//   setTimeout(() => {
//     resolve(1), 2000;
//   });
// });
// const p3 = new Promise((resolve, rej) => {
//   setTimeout(() => {
//     resolve(1), 3000;
//   });
// });
// const p4 = new Promise((resolve, rej) => {
//   setTimeout(() => {
//     resolve(1), 4000;
//   });
// });
// Promise.race([p1, p2, p3, p4]).then((result) => {
//   result;
// });

//======================================================
// const p1 = Promise.resolve(3);
// const p2 = Promise.reject("error");
// Promise.allSettled([p1, p2]).then((result) => {
//   console.log(result);
// });
//=========================================================
// const p1 = Promise.reject("fail 1");
// const p3 = Promise.resolve(" ");
// const p2 = Promise.reject("Fail2");
// Promise.any([p1, p2])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//============================
const btns = document.querySelector(".btns");
const cards = document.querySelector(".cards");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
let loading = document.querySelector(".loading");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
// data = localStorage.setItem(JSON.stringify(todo));
// function loaderfunction(active) {
//   active ? (loading.style.display = "flex") : (loading.style.display = "none");
// }

const getDataFuncForFetch = async () => {
  // loaderfunction(true);
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
    console.log(params);

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
