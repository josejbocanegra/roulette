const Sequelize = require('sequelize')

const AuthorModel = require('./models/author')
const BookModel = require('./models/book')
const EditorialModel = require('./models/editorial')
const ReviewModel = require('./models/review')

const sequelize = new Sequelize('bookstore', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});

const Author = AuthorModel(sequelize, Sequelize);
const Book = BookModel(sequelize, Sequelize);
const Editorial = EditorialModel(sequelize, Sequelize);
const Review = ReviewModel(sequelize, Sequelize);
const BookAuthor = sequelize.define('book_author', {})

Book.belongsTo(Editorial);
Review.belongsTo(Book);

Book.belongsToMany(Author, { through: BookAuthor, unique: false });
Author.belongsToMany(Book, { through: BookAuthor, unique: false });

/*sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })
*/
module.exports = { Author, Book, Editorial, Review, BookAuthor }