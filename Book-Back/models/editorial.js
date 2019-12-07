module.exports = (sequelize, type) => {

    return sequelize.define('editorial', {
        // attributes
        name: {
            type: type.STRING,
            allowNull: false
        }
    });
}