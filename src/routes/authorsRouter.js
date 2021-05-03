const express = require("express");
// router
const authorsRouter = express.Router();

// router function
function router(nav){

    // authors array
    var authors = [
        {
            author : "Dan Brown",
            book : "Origin",
            genre : "Thriller",
            img : "db.jfif",
            
        },
        {
            author : "J K Rowling",
            book : "Harry Potter",
            genre : "Fanstasy",
            img : "jk.jpg",
            
        },
        {
            author : "Basheer",
            book : "Pathummayude Aadu",
            genre : "Drama",
            img : "Basheer.jpg",
            
        }
    ]

    // authors page
    authorsRouter.get("/",(req,res)=>{
        res.render("authors",{
            nav,
            title : "Authors",
            authors
        });
    });

    // single author page
    authorsRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        res.render("author",{
            nav,
            title : "Author",
            author : authors[id]
        });
    });

    return authorsRouter;
}

// router function call
module.exports = router;