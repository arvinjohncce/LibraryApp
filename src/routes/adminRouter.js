const express = require("express");
// router
const adminRouter = express.Router();
const Bookdata = require('../model/bookdata');

// router function
function router(nav){
    
    adminRouter.get("/",(req,res)=>{
        res.render("addbook",
        {
            nav,
            title : "Add Book",
        });
        
    });
    adminRouter.post("/add",(req,res)=>{
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        };
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
    });
    


    return adminRouter;
}

// router function call
module.exports = router;