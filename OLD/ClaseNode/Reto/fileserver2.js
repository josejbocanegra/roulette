let fs = require("fs");
let http = require("http");
let axios = require("axios");

let url = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/67eb74de1851e0dbace1ed0d749b6f01ac7d2d46/productos.json";

axios.get(url).then(response=>{
    return response.data;
}).then((response)=>{
    let archivo = "";
    for(let rs of response){
        archivo += "<tr><td>";
        archivo += rs.nombreProducto;
        archivo += "</td></tr>";
    }
    return archivo;
}).then((response)=>{
    http.createServer((req,res)=>{
        fs.readFile("page1.html", (err, data)=>{
            let file = data.toString().replace("{{reemplazar}}", response);
            fs.writeFile("page1.html", file, (err)=>{
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data.toString());
                return res.end();
            });
        });
    }).listen(8081);
});



