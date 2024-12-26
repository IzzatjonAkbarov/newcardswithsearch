// var ztr = "ABBACC";
// var newztr = ztr.split("");
// for (let i = 0; i < newztr.length; i++) {
//   console.log(ztr[i], "first");

//   //   for (let j = 0; j < ztr.length; j++) {
//   //     const element = ztr[j];
//   //     console.log(element, "second", j - i);
//   //   }
// }
// console.log(newztr);

// const students = [
//   { name: "Alice", grade: 92, age: 20 },
//   { name: "Bob", grade: 85, age: 22 },
//   { name: "Charlie", grade: 78, age: 19 },
//   { name: "David", grade: 65, age: 21 },
//   { name: "Eve", grade: 55, age: 23 },
//   { name: "Frank", grade: 95, age: 18 },
//   { name: "Grace", grade: 89, age: 20 },
// ];
// let A = [];
// let B = [];
// let C = [];
// let D = [];
// let E = [];
// let F = [];
// students.forEach((element) => {
//   if (element.grade >= 90 && element.grade <= 100) {
//     A.push(element);
//   } else if (element.grade >= 80 && element.grade <= 90) {
//     B.push(element);
//   } else if (element.grade >= 70 && element.grade <= 80) {
//     C.push(element);
//   } else if (element.grade >= 60 && element.grade <= 70) {
//     D.push(element);
//   } else if (element.grade >= 0 && element.grade <= 50) {
//     F.push(element);
//   }
// });
// console.log({ A, B, C, D, f });

// // let A: [
// //   { name: "Frank", grade: 95, age: 18 },
// //   { name: "Alice", grade: 92, age: 20 }
// // ];
// // let B: [
// //   { name: "Grace", grade: 89, age: 20 },
// //   { name: "Bob", grade: 85, age: 22 }
// // ];
// // let C: [{ name: "Charlie", grade: 78, age: 19 }];
// // let D: [{ name: "David", grade: 65, age: 21 }];
// // let F: [{ name: "Eve", grade: 55, age: 23 }];
const sales = [
  { product: "Laptop", quantity: 5, price: 1000 },
  { product: "Phone", quantity: 3, price: 800 },
  { product: "Tablet", quantity: 2, price: 600 },
  { product: "Laptop", quantity: 3, price: 1000 },
  { product: "Phone", quantity: 5, price: 800 },
  { product: "Tablet", quantity: 1, price: 600 },
  { product: "Laptop", quantity: 4, price: 1000 },
];
// let lapquantity = 0;
// let lapprice = 0;
// let tabquantity = 0;
// let tabprice = 0;
// let Phonequantity = 0;
// let Phoneprice = 0;

let products = [];
sales.forEach((element) => {
  if (element.product.includes(products)) {
    products.push(element.product);
  }

  //   if (element.product == "Laptop") {
  //     lapquantity += element.quantity;
  //     lapprice = element.price;
  //   } else if (element.product == "Tablet") {
  //     tabquantity += element.quantity;
  //     tabprice = element.price;
  //   } else if (element.product == "Phone") {
  //     Phonequantity += element.quantity;
  //     Phoneprice = element.price;
  //   }
  //   if (element.product == "Phone") {
  //     quantity += element.quantity;
  //     console.log(quantity);
  //   }
  //   if (element.product == "Tablet") {
  //     quantity += element.quantity;
  //     console.log(quantity);
  //   }
  console.log(products);
});
// console.log(lapquantity, lapprice * lapquantity);
// console.log(tabquantity, tabprice * tabquantity);
// console.log(Phonequantity, Phoneprice * Phonequantity);
