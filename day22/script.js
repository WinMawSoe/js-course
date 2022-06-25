// async & await
const getTodos = async () => {
  const response = await fetch("todos/luigi.json");

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await response.json();
  return data;
};

// console.log(1);
// console.log(2);

getTodos()
  .then((data) => console.log("resolved:", data))
  .catch((err) => console.log("rejected:", err.message));

// console.log(3);
// console.log(4);

// fetch api

fetch("todos/luigi.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json")
//   .then((data) => {
//     console.log("promise 1 resolved:", data);
//     return getTodos("todos/mario.json");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved:", data);
//     return getTodos("todos/shaun.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved:", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected:", err);
//   });
