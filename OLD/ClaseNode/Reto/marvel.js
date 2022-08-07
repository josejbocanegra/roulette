let fs = require("fs");
let axios = require("axios");
let http = require("http");

let url = "http://gateway.marvel.com/v1/public/characters?ts=20190222&apikey=23ff8988cbade81d9f4b9e25069f539a&hash=0cc291ae29d17490d389ab990686d6b5";

axios.get(url).then(response=>{ 
    console.log(response.data.data.results);
}).catch(err=>{
    console.log(err);
});

