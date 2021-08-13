module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
    User.association = (db) => {
        db.User.hasMany(db.Post);
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingsId'});
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
    };
    return User;
}