const Authors = require('../Model/AuthorsModel');


module.exports = {

    findAllAuthors: (req, res) => {
        Authors.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json({ message: 'somthing wrong', err }))
    },
    findOneAuthor: (req,res) => {
        Authors.findById(req.params.id)
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json({ message: 'somthing wrong', err }))
    },
    createAuthor: (req, res) => {
        Authors.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.json({ message: 'somthing wrong', err }))
    },
    deleteAuthor: (req, res) => {
        Authors.findByIdAndDelete(req.params.id)
        .then (deletedAuthor => res.json(deletedAuthor))
        .catch(err => res.json({ message: 'somthing wrong', err }))
    },
    updateAuthor: (req, res) => {
        Authors.findByIdAndUpdate(req.params.id, req.body, {new:true, ranvalidator:true})
        .then (updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json({ message: 'somthing wrong', err }))
    }
}