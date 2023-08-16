class Testimonial {
  // buat private
  #quote = "";
  #image = "";

  constructor(image, quote) {
    this.#quote = quote;
    this.#image = image;
  }

  get image() {
    return this.#image;
  }
  get quote() {
    return this.#quote;
  }

  get author() {
    throw new Error("getAuthor() method must be implemented.");
  }

  get testimonialUbahHtml() {
    return `
    <div class="main-content-card" id="testimonials">
          <img src="${this.image}" alt="" />
          <div class="testimonial-content">
            <p>
              "${this.quote}"
            </p>
          </div>
          <div class="testimonial-author">
            <p>"${this.author}"</p>
          </div>
        </div>
    `;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, image, quote) {
    super(image, quote);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

// const testi = new Testimonials("Tesla", "Model Y");

const testimonial1 = new AuthorTestimonial(
  "Iron Tounge Tian",
  "/img/iron-tongue-tian-card.png",
  "Kerja bagus!"
);
const testimonial2 = new AuthorTestimonial(
  "Nunu",
  "/img/chang-the-ninth-card.png",
  "Ini adalah sebuah mahakarya"
);
const testimonial3 = new AuthorTestimonial(
  "Cateryn",
  "/img/katheryne-card.png",
  "Developernya ganteng banget!!!"
);
const testimonial4 = new AuthorTestimonial(
  "Chef Junni",
  "/img/chef-mao-card.png",
  "Developer terbaik se ASEAN!!"
);
const testimonial5 = new AuthorTestimonial(
  "Liben",
  "/img/liben-card.png",
  "Keren banget MAS BRO!!!"
);

let testimonialData = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];

let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialUbahHtml;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;

console.log(testimonialData);
