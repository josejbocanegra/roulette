let fs = require("fs");
let http = require("http");
let axios = require("axios");

let url = "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json";

axios.get(url).then(response=>{
    return response.data;
}).then((response)=>{
    let archivo = "";
    for(let rs of response){
        archivo += "<tr>";
        archivo += "<td>" + rs.idproveedor + "</td>";
        archivo += "<td>" + rs.nombrecompania + "</td>";
        archivo += "<td>" + rs.nombrecontacto + "</td>";
        archivo += "</tr>";
    }
    return archivo;
}).then((response)=>{
    http.createServer((req,res)=>{
        let file = fs.readFileSync("page1.html", "utf-8");
        file = file.replace("{{reemplazar}}", response);
        file = fs.writeFileSync("page1.html", file);

        fs.readFile("page1.html", (err, data)=>{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data.toString());
            return res.end();
        });
    }).listen(8081);
});