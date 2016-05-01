import bcrypt from "bcrypt";

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define("Users", {
            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            password: {
                type: DataType.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }

            },
            email: {
                type: DataType.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    isEmail: true
                }
            },
            role: {
                type: DataType.STRING,
                defaultValue: 'kullanici',
                validate: {
                    isIn: [['kullanici', 'yonetici', 'calisan']],
                }
            }
        },
       // Model options, hooks and scope
        {
            defaultScope: {
                attributes: ["id", "name", "email","role"]
            },

            paranoid: true,
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            classMethods: {
                associate: (models) => {
                    return false;
                }
            }
        }
    );
    Users.hook('afterCreate', function (user, options) {
       
        delete user.dataValues.password
        delete user.dataValues.updated_at
        delete user.dataValues.deleted_at

        return Promise.resolve(user);
    });
    return Users;
};
