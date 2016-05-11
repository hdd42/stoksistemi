module.exports = (sequelize, DataType) => {
    const ProductsStocks = sequelize.define("ProductsStocks", {


            id: {
                type: DataType.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            stock: {
                type: DataType.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true
                },
                min: 0,
                max: 99999
            }


        }, {
            indexes: [
                // Create a unique index on email
                {
                    unique: true,
                    fields: ['product_id']
                }],

            defaultScope: {
                attributes: ['id', 'stock'],
                include: [
                    {
                        all: true,
                        attributes: ['name'],
                        as: 'Product'
                    }
                ]
                ,
                where: {
                    stock: {
                        $gt: 0
                    }
                }
            },
            paranoid: true,
            hooks: {},
            classMethods: {
                associate: (models) => {
                    ProductsStocks.belongsTo(models.Products)
                }
            },
            logging: process.env.NODE_ENV == 'test' ? false : true
        }
    );
    return ProductsStocks;
};