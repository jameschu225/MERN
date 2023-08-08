const AuthorsController = require('../Controller/AuthorsController')

module.exports = (app) => {

    app.get('/authors', AuthorsController.findAllAuthors);
    app.get('/authors/:id', AuthorsController.findOneAuthor);
    app.post('/authors/new', AuthorsController.createAuthor);
    app.delete('/authors/delete/:id', AuthorsController.deleteAuthor);
    app.put('/authors/:id/edit', AuthorsController.updateAuthor);
}


