const express = require('express')
const author = require('../models/author')
const router = express.Router()
const Book = require('../models/book')

// All Books Route
router.get('/', async (req, res) => {
    res.send('All Books')
})

// New Book Route
router.post('/new', async (req, res) => {
    try {
        const authors = await author.find({})
        const book = new Book()
        res.render('books/new', {
            authors: author,
            Book: book
        })
    } catch {
        res.redirect('/books')
    }
})

// Create Book Route
router.post('/', async (req, res) => {
    res.send('Create Book')
})

module.exports = router