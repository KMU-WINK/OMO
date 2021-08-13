module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        src: {
            type: DataTypes.STRING(200),
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    Image.association = (db) => {
        db.Image.belongsTo(db.Post);
    };
    return Image;
}