const BookController = require('../controllers/book.controller')

module.exports = app => {
    app.get('/api/books', BookController.getAllBooks)
    app.get('/api/books/:id', BookController.getOneBook)
    app.post('/api/books/', BookController.createNewBook)
    app.put('/api/books/:id', BookController.updateBook)
    app.delete('/api/books/:id', BookController.deleteBook)
}