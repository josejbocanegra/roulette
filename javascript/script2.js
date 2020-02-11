fetch(
  "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json"
)
  .then(response => {
    return response.json();
  })
  .then(response => {
    createTableEvents(response);
    createTableCorrelations(response);
  });

function createTableCorrelations(response) {
  let array = createArrayCorrelations(response);

  array.forEach((value, i) => {
    let str = `<tr><th scope="row">${i + 1}</th><td>${value.event}</td><td>${value.correlation}</td></tr>`;
    let element = document.getElementById("tableCorrelation");
    element.innerHTML += str;
  });
}

function createArrayCorrelations(response) {
  let finalResponse = [];
  let arrayEvents = getEventsArray(response);
  arrayEvents.forEach(event => {
    let correlation = phi(tableFor(event, response))
    let data = { "event": event, "correlation": correlation };
    finalResponse.push(data);
  });
  return finalResponse.sort((a, b) => parseFloat(b.correlation) - parseFloat(a.correlation));
  //console.log(finalResponse.sort((a, b) => parseFloat(b.correlation) - parseFloat(a.correlation)));
}

function createTableEvents(response) {
  response.forEach((value, i) => {

    let danger = value.squirrel == true ? "<tr class='table-danger'>" : "<tr>";

    let str = `${danger}<th scope="row">${i + 1}</th><td>${value.events.join(
      ", "
    )}</td><td>${value.squirrel}</td></tr>`;
    let element = document.getElementById("tableEvents");
    element.innerHTML += str;
  });
}

function getEventsArray(response) {
  let tp = 0, tn = 0, fp = 0, fn = 0;
  let eventsArray = [];
  response.forEach(e => {
    e.events.forEach(event => {
      if (!eventsArray.includes(event)) {
        eventsArray.push(event);
      }
    })
  });
  return eventsArray;
}

function tableFor(event, response) {
  let table = [0, 0, 0, 0];
  response.forEach(e => {
    let index = 0;
    if (e.events.includes(event)) index += 1;
    if (e.squirrel) index += 2;
    table[index] += 1;
  })
  return table;
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2]));
}
