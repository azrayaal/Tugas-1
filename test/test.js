function checkCheckbox(event) {
  event.preventDefault();
  let languages = [];

  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      languages.push(item.value);
    }
  });

  console.log(languages);
}

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let languages = [];

//   document.querySelectorAll('[type="checkbox"]').forEach((item) => {
//     if (item.checked === true) {
//       languages.push(item.value);
//     }
//   });

//   console.log(languages);
// });
