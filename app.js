const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/public/local_packages/date");

const app = express();

const PORT = process.env.PORT || 3000;

let items = [];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
 
app.get("/", (req,res)=>{
    const currentDate = date.getDay();

    res.render("list", {listTitle: currentDate, items: items, route: "/"});
}); 



app.post("/", (req,res)=>{
    if(req.body.list === "/work") {
        const newItem = req.body.newItem;
        workItems.push(newItem);
    } else {
        const newItem = req.body.newItem;
        items.push(newItem);
    }

    res.redirect("/");
});

// in case a post request can be sent from route, route must be passed for POST request to be processed accordingly 

app.get("/work", (req,res)=>{
    res.render("list", {listTitle: "Work", items: workItems, route: "/work"});
});

app.get("/about", (req,res)=>{
    res.render("about");
});

app.listen(PORT, ()=>{
    console.log("todolist-v1 server is listening to " + PORT);
});