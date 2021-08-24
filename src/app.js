const express = require("express");
const path = require("path")
require("./db/conn");
const User = require("./models/usermessage");
const hbs = require("hbs");
const { registerPartials } = require("hbs")


const app = express()
const port = process.env.port || 3000

//setting the path
const staticpath = path.join(__dirname , "../public");
const tamplatepath = path.join(__dirname , "../templates/views");
const partialspath = path.join(__dirname , "../templates/partials");

//middleware
app.use('/css' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/css")))
app.use('/js' , express.static(path.join(__dirname , "../node_modules/bootstrap/dist/js")))
app.use('/jq' , express.static(path.join(__dirname , "../node_modules/jquery/dist")))

app.use(express.urlencoded({extended : false}))
app.use(express.static(staticpath))
app.set("view engine" , "hbs")
app.set("views" , tamplatepath)
hbs.registerPartials(partialspath)

//routing
//app.get(path , callback)
app.get("/" , (req , res) => {
    res.render("index1");
})
app.get("/contact" , (req , res) => {
    res.render("Good_Earth");
})

app.get("/signin" , (req , res) => {
    res.render("index");
})

app.post("/contact" , async(req , res) => {
    try {
        //res.send(req.body);
        const userData = new User(req.body)
        await userData.save()
        res.status(201).render("Good_Earth");
    } catch (error) {
        res.status(500).send(error); 
    }
})

//server create
app.listen(port , () => {
    console.log(`Server is running at port no ${port}`);
})