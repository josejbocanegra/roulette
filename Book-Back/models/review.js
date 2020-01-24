module.exports = (sequelize, type) => {

    return sequelize.define('review', {
        // attributes
        name: {
            type: type.STRING,
            allowNull: false
        },
        description: {
            type: type.STRING,
            allowNull: false
        },
        source: {
            type: type.STRING,
            allowNull: false
        }
    });
}
