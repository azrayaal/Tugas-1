function checkCheckbox() {
  var nodeJs = document.getElementById("nodeJs");
  var reactJs = document.getElementById("reactJs");

  //   let technologies = [document.getElementsByClassName("input-tech")];

  if (nodeJs.checked == false && reactJs.checked == false) {
    return console.log("check salah satu");
  } else if (nodeJs.checked == true && reactJs.checked == true) {
    // nodeJs.value;
    // reactJs.value;
    // technologies.push(nodeJs.value, reactJs.value);
    console.log("initech", technologies);
    return console.log(nodeJs.value, reactJs.value);
  } else if (nodeJs.checked == true) {
    nodeJs.value;
    return console.log(nodeJs.value);
  } else if (reactJs.checked) {
    reactJs.value;
    return console.log(reactJs.value);
  } else {
  }
  let data = {};

  let allTechnologies = [];

  allTechnologies.push(technologies);

  console.log("alltech", allTechnologies);
}
