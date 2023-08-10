let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let technologies =
    document.getElementsByClassName("input-technologies").checked;
  // let image = document.getElementById("input-blog-image").files;

  // image = URL.createObjectURL(image[0]);

  let blog = {
    title,
    content,
    // image,
    technologies,
    postAt: "10",
    author: "10",
  };

  // let dataBlog = []

  dataBlog.push(blog);

  console.log("ini datablog dari addblog", dataBlog);

  // renderBlog();
}

// function render blog

// function renderBlog() {
//   document.getElementById("content").innerHTML = "";

//   for (let index = 0; index < dataBlog.length; index++) {
//     console.log("inidatarenderblog", dataBlog[index]);

//     document.getElementById("content").innerHTML += `
//     <div id="content" class="blog-list">
//     <div class="blog-list-item">
//       <div class="blog-image">
//         <div class="img">
//           <img class="img-blog" src="${dataBlog[0].image}" alt="" />
//         </div>
//       </div>
//       <div class="blog-content">
//         <div class="blog-letter">
//           <a class="blog-title" href="blog-detail.html" target="_blank"
//             >${dataBlog[0].title}</a
//           >
//           <div class="detail-blog-content">Technologies</div>
//           <p>
//           ${dataBlog[0].content}
//           </p>
//         </div>
//         <div class="button-group">
//           <button class="btn-edit">Edit Post</button>
//           <button class="btn-delete">Delete Post</button>
//         </div>
//       </div>
//     </div>
//   </div>`;
//   }
// }
