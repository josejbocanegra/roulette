module.exports = (sequelize, type) => {

    return sequelize.define('book', {
        // attributes
        name: {
            type: type.STRING,
            allowNull: false
        },
        isbn: {
            type: type.STRING,
            allowNull: false
        },
        image: {
            type: type.STRING,
            allowNull: false
        },
        description: {
            type: type.STRING,
            allowNull: false
        },
        publishDate: { 
            type: type.DATE,
            allowNull: false
        }
    });
}



