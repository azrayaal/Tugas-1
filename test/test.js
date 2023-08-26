// const technologies = [];

// technologies.push("second");

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

// technologies.forEach((currValue) => {
//   switch (currValue) {
//     case "first":
//       console.log("This is first");
//       break;
//     case "second":
//       console.log("This is second");
//       break;
//   }
// });

// let cv = false;

// function clickbuton() {
//   let downloadCv = document.getElementById("download-cv");
//   if (!cv) {
//     downloadCv.style.display = "none";
//     cv = true;
//     alert("haha");
//   } else {
//   }
// }

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `the car is a ${this.make} ${this.model}`;
  }
}

// let car1 = new Car("Toyota", "Supra");

// console.log(car1.getInfo());

// inheritance

class ElectricCar extends Car {
  constructor(make, model, batteryCapacity) {
    super(make, model);
    this.batteryCapacity = batteryCapacity;
  }

  getInfo() {
    return `${super.getInfo()} it has a battery ${this.batteryCapacity} KWH`;
  }
}

let myElectric = new ElectricCar("tesla", "roster", "100");

console.log(myElectric.getInfo());

// polymorphism dapat membuat beberapa metode atau fungsi dengan nama yang sama, namun memiliki parameter yang berbeda.
// abstaction


console.log('azra');