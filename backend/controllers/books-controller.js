const Book = require ("../model/Book");
const User = require ("../model/User")

/*//==================================================\\
        This will get all the books from the databse 
*/
const getAllBooks = async (req, res, next) =>{
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }

    if (!books) {
        return res.status(404).json({ message:"No book found" });
    }
    return res.status(200).json({ books });
};

/*//==================================================\\
    This will get all the book with Id as it its parapmeters 
        from the databse 
*/

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findById(id);
    } catch (err) {
        console.log(err);
    }

    if (!book) { 
        return res.status(404).json({ message:"No book found" });
    }
    return res.status(200).json({ book });
}

/*//==================================================\\
    This is the api which controlls what books get added to the database
*/
const addBook = async (req, res, next) => {
    const { name, author, description, price, createdBy } = req.body;
    let book; 
    try{
        book = new Book({
            name, 
            author,
            description,
            price,
            createdBy,
        });
        await book.save();
    }   catch (err) {
        console.log(err);
    }

    if (!book) {
        return res.status(500).json({ message:"No Book Found"});
    }
    return res.status(201).json({ book });
    
};

/*//==================================================\\
    This is the api which controlls what books gets updated to the database
*/
const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, status, createdBy } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name, 
            author,
            description,
            price,
            createdBy,
            status : status ? status:"waiting"
        });
        book = await book.save();
    } catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message:"Unavailiable To Update"});
    }
    return res.status(200).json({ book });
}

/*//==================================================\\
    This is the api which deletes the book from database
*/
const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndRemove(id);
    }  catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message:"Unavailiable To Delete"});
    }
    return res.status(200).json({ message:"Book Successfully Deleted" });
}


/*//==================================================\\
    These are all the exports for each of the function
*/
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.getAllBooks = getAllBooks;