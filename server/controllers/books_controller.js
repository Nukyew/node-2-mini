const books = []
let id = 0

module.exports = {
    read: (req, res, next) => {
        res.status(200).send(books)
    },
    create: (req, res, next) => {
        books.push({
            id: id,
            title: req.body.title,
            author: req.body.author
        })
        id = id + 1
        res.status(200).send(books)
    },
    update: (req, res, next) => {
        books.splice(req.params.id, 1, {
            id: parseInt(req.params.id, 10),
            title: req.body.title,
            author: req.body.author
        })
        res.status(200).send(books)
    },
    delete: (req, res, next) => {
        books.splice(req.params.id, 1)
        res.status(200).send(books)
    }
}