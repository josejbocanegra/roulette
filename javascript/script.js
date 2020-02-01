fetch(
  "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json"
)
  .then(response => {
    return response.json();
  })
  .then(response => {
    processJson(response);
  });

function processJson(response) {
  response.forEach((value, i) => {
    console.log("%d: %s", i, value.squirrel);
    let danger = value.squirrel == true ? "<tr class='table-danger'>" : "<tr>";

    let str = `${danger}<th scope="row">${i + 1}</th><td>${value.events.join(
      ", "
    )}</td><td>${value.squirrel}</td></tr>`;
    let element = document.getElementById("table");
    element.innerHTML += str;
  });
}
