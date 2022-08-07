const fs = require("fs");

fs.readdir("./", (err, files)=>{
    if(!err) console.log("errpr");
    else console.log(files);
});



//console.log(fs);
