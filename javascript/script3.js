function getData() {
    const url = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";

    fetch(url)
        .then(result => {
            return result.json();
        }).then(resultJson => {
            console.log(resultJson);
        });
}

function handleForm(event) {
    event.preventDefault();
}

let boton = document.getElementById("boton");
boton.addEventListener("click", getData);

let form = document.getElementById("myForm");
form.addEventListener('submit', handleForm);