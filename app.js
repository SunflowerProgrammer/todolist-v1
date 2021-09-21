const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req,res)=>{
    var date = new Date();
    var options = {day: "numeric", weekday: "long", month: "long"};
    var currentDate = date.toLocaleDateString("en-US", options);

    res.render("list", {date: currentDate, items: items});
}); 

app.post("/", (req,res)=>{
    var item = req.body.item;
    items.push(item);

    res.redirect("/");
});

app.listen(PORT, ()=>{
    console.log("todolist-v1 server is listening to " + PORT);
});