const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

var items = [];
var workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
 
app.get("/", (req,res)=>{
    var date = new Date();
    var options = {day: "numeric", weekday: "long", month: "long"};
    var currentDate = date.toLocaleDateString("en-US", options);

    res.render("list", {listTitle: currentDate, items: items, route: "/"});
}); 

app.post("/", (req,res)=>{
    var newItem = req.body.newItem;
    items.push(newItem);

    res.redirect("/");
});


app.get("/work", (req,res)=>{
    res.render("list", {listTitle: "Work", items: workItems, route: "/work"});
});

app.post("/work", (req,res)=>{
    var newItem = req.body.newItem;
    workItems.push(newItem);

    res.redirect("/work");
});

app.get("/about", (req,res)=>{
    res.render("about");
});

app.listen(PORT, ()=>{
    console.log("todolist-v1 server is listening to " + PORT);
});