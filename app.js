const express = require("express");
const app = express();
const path = require("path");

//app.use(express.json());
//app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '/')))
app.set('view engine','html')

app.get("/", function(req,res){
  res.render(login)
})

app.listen(4000)
