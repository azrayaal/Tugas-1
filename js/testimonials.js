// OOP
// class Testimonial {
//   // buat private
//   #quote = "";
//   #image = "";
//   #rating = "";

//   constructor(image, quote, rating) {
//     this.#quote = quote;
//     this.#image = image;
//     this.#rating = rating;
//   }

//   get image() {
//     return this.#image;
//   }
//   get quote() {
//     return this.#quote;
//   }

//   get rating() {
//     return this.#rating;
//   }

//   get author() {
//     throw new Error("getAuthor() method must be implemented.");
//   }

//   get testimonialUbahHtml() {
//     return `
//     <div class="main-content-card" id="testimonials">
//           <img src="${this.image}" alt="" />
//           <div class="testimonial-content">
//             <p>
//               "${this.quote}"
//             </p>
//           </div>
//           <div class="testimonial-author">
//             <p>${this.rating}</p>
//           </div>
//           <div class="testimonial-author">
//             <p>"${this.author}"</p>
//           </div>
//         </div>
//     `;
//   }
// }

// class AuthorTestimonial extends Testimonial {
//   #author = "";

//   constructor(author, image, rating, quote) {
//     super(image, quote, rating);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// data testimonial

// const testimonial1 = new AuthorTestimonial(
//   "Iron Tounge Tian",
//   "/img/iron-tongue-tian-card.png",
//   "4",
//   "Kerja bagus!"
// );
// const testimonial2 = new AuthorTestimonial(
//   "Nunu",
//   "/img/chang-the-ninth-card.png",
//   "1",
//   "Ini adalah sebuah mahakarya"
// );
// const testimonial3 = new AuthorTestimonial(
//   "Cateryn",
//   "/img/katheryne-card.png",
//   "3",
//   "Developernya ganteng banget!!!"
// );
// const testimonial4 = new AuthorTestimonial(
//   "Chef Junni",
//   "/img/chef-mao-card.png",
//   "2",
//   "Developer terbaik se ASEAN!!"
// );
// const testimonial5 = new AuthorTestimonial(
//   "Liben",
//   "/img/liben-card.png",
//   "4",
//   "Keren banget MAS BRO!!!"
// );

// let testimonialData = [
//   testimonial1,
//   testimonial2,
//   testimonial3,
//   testimonial4,
//   testimonial5,
// ];

// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialUbahHtml;
// }

// const testimonialDatas = [
//   {
//     author: "Pak Yan",
//     rating: 4,
//     quote: "Kerja Bagus",
//     image: "/img/iron-tongue-tian-card.png",
//   },
//   {
//     author: "Pak Jajang",
//     rating: 1,
//     quote: "Ini adalah sebuah mahakarya",
//     image: "/img/chang-the-ninth-card.png",
//   },
//   {
//     author: "Mbak Yanti",
//     rating: 4,
//     quote: "Developernya ganteng banget!!!",
//     image: "/img/katheryne-card.png",
//   },
//   {
//     author: "Pak Burhan",
//     rating: 3,
//     quote: "Kerja Bagus",
//     image: "/img/chef-mao-card.png",
//   },
//   {
//     author: "Ujang Kribo",
//     rating: 2,
//     quote: "Kerja Bagus",
//     image: "/img/liben-card.png",
//   },
// ];

// allTestimonial = () => {
//   let testimonialHTML = "";

//   testimonialDatas.forEach(function (item) {
//     testimonialHTML += `
//     <div class="main-content-card" id="testimonials">
//              <img src="${item.image}" alt="" />
//              <div class="testimonial-content">
//                <p>
//                  "${item.quote}"
//                </p>
//           </div>
//             <div class="testimonial-author">
//               <p>${item.rating}</p>
//             </div>
//             <div class="testimonial-author">
//               <p>"${item.author}"</p>
//             </div>
//            </div>
//     `;

//     document.getElementById("testimonials").innerHTML = testimonialHTML;
//   });

//   console.log(testimonialDatas);
// };

// function filterTestimonial(rating) {
//   let testimonialHTML = "";

//   const testimonialFiltered = testimonialDatas.filter(function (item) {
//     return item.rating === rating;
//   });

//   if (testimonialFiltered.length === 0) {
//     testimonialHTML = `  <h1>Data not found</h1>`;
//   } else {
//     testimonialFiltered.forEach(function (item) {
//       testimonialHTML += `
//       <div class="main-content-card" id="testimonials">
//       <img src="${item.image}" alt="" />
//       <div class="testimonial-content">
//         <p>
//           "${item.quote}"
//         </p>
//    </div>
//      <div class="testimonial-author">
//        <p>${item.rating}</p>
//      </div>
//      <div class="testimonial-author">
//        <p>"${item.author}"</p>
//      </div>
//     </div>
//       `;
//     });
//   }
//   console.log(testimonialFiltered);
//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }

// allTestimonial();

// const testimonialAjax = new Promise((resolve, reject) => {
//   const xhttp = new XMLHttpRequest();

//   xhttp.open("GET", "https://www.npoint.io/docs/bdbfd0b9662b1bd1ed4a", true);

//   xhttp.onload = function () {
//     if (xhttp.status == 200) {
//       resolve(JSON.parse(xhttp.response));
//       console.log("ajax: ", xhttp);
//     } else {
//       reject("Error Loading Data");
//     }
//   };
// });

// /////////////////////

const testimonial = new Promise((resolve, reject) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "https://api.npoint.io/bdbfd0b9662b1bd1ed4a", true); // http method, URL Address, Async status

  xhttp.onload = function () {
    if (xhttp.status == 200) {
      resolve(
        JSON.parse(xhttp.response),
        console.log("data keambil:", JSON.parse(xhttp.response))
      );
    } else {
      reject(console.log("error bos"), "Error Loading Data");
    }
  };

  xhttp.onerror = function () {
    reject("Network Error");
  };

  xhttp.send();
});

async function allTestimonial() {
  try {
    const response = await testimonial;
    console.log(response);

    let testimonialForHtml = "";

    response.forEach((item) => {
      testimonialForHtml += `
      <div class="main-content-card" id="testimonials">
             <img src="${item.image}" alt="" />
             <div class="testimonial-content">
               <p>
                 "${item.quote}"
               </p>
          </div>
            <div class="testimonial-author">
              <p>${item.rating}</p>
            </div>
            <div class="testimonial-author">
              <p>"${item.author}"</p>
            </div>
           </div>
    `;
    });

    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
allTestimonial();

async function filterTestimonial(rating) {
  try {
    const response = await testimonial;
    let testimonialForHtml = "";

    const dataFiltered = response.filter(function (data) {
      return data.rating === rating;
    });

    if (dataFiltered.length === 0) {
      testimonialForHtml = `<h3>Data not found ! </h3>`;
    } else {
      dataFiltered.forEach((item) => {
        testimonialForHtml += `
        <div class="main-content-card" id="testimonials">
               <img src="${item.image}" alt="" />
               <div class="testimonial-content">
                 <p>
                   "${item.quote}"
                 </p>
            </div>
              <div class="testimonial-author">
                <p>${item.rating}</p>
              </div>
              <div class="testimonial-author">
                <p>"${item.author}"</p>
              </div>
             </div>
          `;
      });
    }

    document.getElementById("testimonials").innerHTML = testimonialForHtml;
  } catch (err) {
    console.log(err);
  }
}
