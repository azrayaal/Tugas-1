let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let image = document.getElementById("input-blog-image").files;
  image = URL.createObjectURL(image[0]);
  // masukin data

  // technologies
  let technologies = [];

  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      technologies.push(item.value);
    }
  });

  console.log(technologies);

  let blog = {
    title,
    content,
    startDate,
    endDate,
    image,
    technologies,
    postAt: "augst",
    author: "Azra Yazid",
  };

  dataBlog.push(blog);

  console.log("ini datablog dari addblog", dataBlog);

  renderBlog();
}

// function render blog

function getItemdrclick() {
  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;

  let datadata = {
    title,
    content,
  };

  let databuatsimpen = JSON.stringify(datadata);
  localStorage.setItem("datasimpenanBlg", databuatsimpen);

  let dapetdata = JSON.parse(localStorage.getItem("datasimpenanBlg"));

  console.log("dapet nih?", dapetdata);
}

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log("inidatarenderblog", dataBlog[index]);

    document.getElementById("content").innerHTML += `

        <div class="blog-list-item">
          <div class="blog-image">
            <div class="img">
              <img class="img-blog" src="${dataBlog[index].image}" alt="" />
            </div>
          </div>
          <div class="blog-content">
            <div class="blog-letter">
              <a onclick="getItemdrclick()" class="blog-title" href="blog-detail.html" target="_blank"
                >${dataBlog[index].title}</a
              >
              <div class="detail-blog-content">${dataBlog[index].technologies} </div>
              <p>
              ${dataBlog[index].content}
              </p>
            </div>
            <div class="button-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-delete">Delete Post</button>
            </div>
          </div>
      </div>`;
  }
}

// function getItem
