const express = require("express");
// router
const booksRouter = express.Router();
const Bookdata= require('../model/bookdata');

// router function
function router(nav){
    
    // books array
    // var books = [
    //     {
    //         title : "Origins",
    //         author : "Dan Brown",
    //         genre : "Thriller",
    //         img : "origin.jpg",
            
    //     },
    //     {
    //         title : "Harry Potter",
    //         author : "J K Rowling",
    //         genre : "Fantasy",
    //         img : "unnamed.jpg",
            
    //     },
    //     {
    //         title : "Pathummayude Aadu",
    //         author : "Basheer",
    //         genre : "Drama",
    //         img : "pathu.jpg",
    //         about : "Pathummayude Aadu is a humorous novel by Vaikom Muhammad Basheer. The characters of the novel are members of his family and the action takes place at his home in Thalayolaparambu. The goat in the story belongs to his sister Pathumma. Basheer begins the novel with an alternative title for the book, Pennungalude Buddhi."
    //     }
    // ]
    
    // books page
    booksRouter.get("/",(req,res)=>{
        Bookdata.find()
        .then(function(books)
        {
            res.render("books",
            {
                nav,
                title : "Books",
                books
            });
        });

    });
    
    // single book page
    booksRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title : "Book",
                book 
            });
        })

    });

    return booksRouter;
}

// router function call
module.exports = router;