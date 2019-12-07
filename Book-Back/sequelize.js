const Sequelize = require('sequelize')

const AuthorModel = require('./models/author')
const BookModel = require('./models/book')
const EditorialModel = require('./models/editorial')
const ReviewModel = require('./models/review')

const connection = new Sequelize('bookstore', 'postgres', 'ghothh12', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

const Author = AuthorModel(connection, Sequelize);
const Book = BookModel(connection, Sequelize);
const Editorial = EditorialModel(connection, Sequelize);
const Review = ReviewModel(connection, Sequelize);
const BookAuthor = connection.define('book_author', {})

Book.belongsTo(Editorial);
Review.belongsTo(Book);

Book.belongsToMany(Author, { through: BookAuthor, unique: false });
Author.belongsToMany(Book, { through: BookAuthor, unique: false });

/*connection.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })*/
module.exports = { Author, Book, Editorial, Review, BookAuthor }