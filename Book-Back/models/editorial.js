module.exports = (sequelize, Sequelize) => {

    return sequelize.define('editorial', {
        // attributes
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
}