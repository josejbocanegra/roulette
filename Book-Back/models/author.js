module.exports = (sequelize, type) => {

    return sequelize.define('author', {
        // attributes
        name: {
            type: type.STRING,
            allowNull: false
        },
        image: {
            type: type.STRING,
            allowNull: false
        },
        birthDate: {
            type: type.DATE,
            allowNull: false
        },
        description: {
            type: type.STRING,
            allowNull: false
        }
    });
}


