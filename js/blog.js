let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  // DATE //////////////////////////////////////
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;

  // IMAGE //////////////////////////////////////
  // let image = document.getElementById("input-blog-image").files;
  // image = URL.createObjectURL(image[0]);

  // DURATION ///////////////////////////////////
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);
  const time = date2 - date1;
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));
  let duration = days;

  /////////////////////////////////////////////

  // TECHNOLOGIES /////////////////////////////
  let technologies = [];
  document.querySelectorAll('[type="checkbox"]').forEach((item) => {
    if (item.checked === true) {
      technologies.push(item.value);
    }
  });
  // Technologies 1 value
  function ubahLogo() {
    if (technologies == "NodeJs") {
      return `<i class="fa-brands fa-node-js fa-xl" style="margin-right: 5px"></i>`;
    } else if (technologies == "ReactJs") {
      return `<i class="fa-brands fa-react fa-xl" style="margin-right: 5px"></i>`;
    } else if (technologies == "Go") {
      return `<i class="fa-brands fa-golang fa-xl" style="margin-right: 5px"></i>`;
    }
    // node dan react
    // if ((technologies == "NodeJs" && "ReactJs") || ("ReactJs" && "NodeJs")) {
    //   return `<i class="fa-brands fa-react fa-xl" style="margin-right: 5px"></i>
    //   <i class="fa-brands fa-node-js fa-xl" style="margin-right: 5px"></i>`;
    // }
    // // node dan golang
    // if (technologies == ("NodeJs" && "Go") || ("Go" && "NodeJs")) {
    //   return `<i class="fa-brands fa-golang fa-xl" style="margin-right: 5px"></i>
    //   <i class="fa-brands fa-node-js fa-xl" style="margin-right: 5px"></i>`;
    // }
  }
  /////////////////////////

  let blog = {
    title,
    content,
    duration,
    // image,
    // logoTechnologies: ubahLogo(),
    technologies: ubahLogo(),
    postAt: new Date(),
    author: "Azra Yazid",
  };

  dataBlog.push(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("blog-list").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log("inidatarenderblog", dataBlog[index].technologies);

    document.getElementById("blog-list").innerHTML += `
    <div class="blog-list-item">
      <div class="blog-image">
        <div class="img">
          <img class="img-blog" src="${dataBlog[index].image}" alt="" />
        </div>
      </div>
      <div class="blog-content">
        <div class="blog-letter">
          <a class="blog-title" href="blog-detail.html" target="_blank">
          ${dataBlog[index].title}
          </a>
          <div class="info-info">
            <div class="duration">Duration: ${
              dataBlog[index].duration
            } days</div>

            <div class="datepost">${getRealTime(dataBlog[index].postAt)}</div>
          </div>
          <p class="content-letter">
          ${dataBlog[index].content}
          </p>
          <div class="detail-blog-content">
            <div class="logos">
            ${dataBlog[index].technologies}
            </div>
            <div class="postTime">${getDistanceTime(
              dataBlog[index].postAt
            )}</div>
          </div>
        </div>
        <div class="button-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-delete">Delete Post</button>
        </div>
      </div>
  </div>`;
  }
}

function getRealTime(time) {
  let namaBulan = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  let date = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();

  console.log(`${date} ${namaBulan[month]} ${year} ${hours}:${minutes} WIB`);
  return `${date} ${namaBulan[month]} ${year}`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;
  let distanceTime = timeNow - timePost;

  let distanceDay = Math.floor(distanceTime / (1000 * 3600 * 24));
  let distanceHour = Math.floor(distanceTime / (1000 * 60 * 60));
  let distanceMinute = Math.floor(distanceTime / (1000 * 60));
  let distanceSecond = Math.floor(distanceTime / 1000);

  if (
    distanceDay ||
    distanceHour ||
    distanceMinute ||
    distanceSecond == false
  ) {
    return `... Ago`;
  } else if (distanceDay > 0) {
    return `${distanceDay} days ago`;
  } else if (distanceHour > 0) {
    return `${distanceHour} hour ago`;
  } else if (distanceMinute > 0) {
    return `${distanceMinute} minute ago`;
  } else if (distanceSecond > 0) {
    return `${distanceSecond} second ago`;
  }
}

function ubahLogo(technologies) {
  for (let i = 0; i < technologies.length; i++) {
    switch (technologies) {
      case "NodeJs":
        return `<i class="fa-brands fa-node-js fa-xl" style="margin-right: 5px"></i>`;
      case "ReactJs":
        return `<i class="fa-brands fa-react fa-xl" style="margin-right: 5px"></i>`;
      case "Go":
        return `<i class="fa-brands fa-golang fa-xl" style="margin-right: 5px"></i>`;
      default:
        console.log("None");
        break;
    }
  }
}

// function technology() {
//   let technologies = [];
//   document.querySelectorAll('[type="checkbox"]').forEach((item) => {
//     if (item.checked === true) {
//       technologies.push(item.value);
//     }
//   });

//   technologies.forEach((value) => {
//     switch (value) {
//       case "NodeJs":
//         return `hahah`;
//         console.log("This is first");
//         break;
//       case "second":
//         console.log("This is second");
//         break;
//     }
//   });
// }

setInterval(function () {
  renderBlog();
}, 3000);
