// В каком порядке будут выведены логи?

// TASK 1
//sync1
// console.log("A");
// //macroTask1
// setTimeout(() => {
//   console.log("B");
// });
// //marcoTask2
// setTimeout(() => {
//   //sync2
//   const promise = new Promise((resolve) => {
//     //sync3
//     console.log("C");
//     //microTask1
//     resolve("D");
//     //sync4
//     console.log("E");
//   });
//   //microTask1
//   promise.then((value) => {
//     //sync6
//     console.log(value);
//     //macroTask3
//     setTimeout(() => {
//       console.log("F");
//     });
//   });
//   //sync5
//   console.log("G");
// });

// // TASK 2
// //macroTask1
// setTimeout(() => {
//   //sync3
//   console.log("G");
//   //microTask1
//   Promise.resolve().then(() => console.log("H"));
// }, 0);
// //sync1
// new Promise(function (resolve) {
//   //sync2
//   console.log("I");
//   //macroTask2
//   setTimeout(function () {
//     //sync4
//     console.log("J");
//     //microTask2
//     resolve("K");
//   }, 0);

// }).then((res) => {
//   //sync5
//   console.log("L");
// //macroTask3
//   setTimeout(() => {
//     //sync6
//     console.log(res);
//   }, 0);
// });

// //I, G, H, J, L, K
// TASK 3

// //microTask1
// Promise.resolve().then(() => console.log(0));

// //microTask2
// Promise.resolve()
//   .then(() => console.log(1))
//   .then(() => console.log(2));

// //microTask3
// Promise.resolve()
//   .then(() => console.log(3))
//   .then(() => console.log(4))
//   .then(() => console.log(5));

// // 0, 1, 3, 2, 4, 5

// TASK 4
//macroTask1
// setTimeout(() => {
//   console.log("timeout");
// }, 0);

// //sync1
// const p = new Promise((resolve) => {
//   console.log("Promise creation"); //sync2
//   resolve(1); //microTask1
// });

// //sync3
// const p2 = new Promise(() => {
//   console.log(123); //sync7
// });

// //microTask1
// p.then(() => {
//   console.log("Promise resolving"); //sync 6
// });

// //sync4
// console.log("End");

// //sync5
// console.log("p2 =>>", p2);

// Promise creation, 123, End, p2==>> Promise,

// TASK 5

//sync1
console.log("script start");

//macroTask1
setTimeout(function () {
  console.log("setTimeout"); //sync5
}, 0);
//microTask1
Promise.resolve()
  .then(function () {
    console.log("promise1"); //sync3
  })
  .then(function () {
    console.log("promise2"); //sync4
  });
//sync2
console.log("script end");

// script start, script end, promise1, promise2, setTimeout
