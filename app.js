console.log("Library App Port No. :- 9999");

const express = require("express");
const app = new express();
const port = process.env.PORT || 9999;

const nav = [

    {
        link : "/books",
        name : "Books"
    },
    {
        link : "/authors",
        name : "Authors"
    },
    {
        link : "/signup",
        name : "SignUp/LogIn"
    },
    {
        link : "/",
        name : "LogOut"
    }
]

// imports Routers
const booksRouter = require("./src/routes/booksRouter")(nav);
const authorsRouter = require("./src/routes/authorsRouter")(nav);
const signupRouter = require("./src/routes/signupRouter")(nav);
const loginRouter = require("./src/routes/loginRouter")(nav);



app.use(express.static("./public"));

app.set("view engine","ejs");

app.set("views","./src/views");
// router
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/signup",signupRouter);
app.use("/login",loginRouter);


// review array
const reviews = []

// library page
app.get("/",(req,res)=>{
    res.render("index",
    {
        nav,
        title : "Library App",
        reviews
    });
});

app.listen(port,()=>{
    console.log("Server is ready at " + port);
});
