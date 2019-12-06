module.exports = (sequelize, Sequelize) => {

    return sequelize.define('book', {
        // attributes
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isbn: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publishdate: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
}



