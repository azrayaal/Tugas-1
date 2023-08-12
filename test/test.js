const technologies = [];

technologies.push("second");

// for (let i = 0; i < array.length; i++) {
//   switch (array[i]) {
//     case "first":
//       console.log("This is first");
//       break;
//     case "second":
//       console.log("This is second");
//       break;
//     case "third":
//       console.log("This is third");
//       break;
//     case "fourth":
//       console.log("This is fourth");
//       break;
//     default:
//       console.log("None");
//       break;
//   }
// }

technologies.forEach((currValue) => {
  switch (currValue) {
    case "first":
      console.log("This is first");
      break;
    case "second":
      console.log("This is second");
      break;
  }
});
