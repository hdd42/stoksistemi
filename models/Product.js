
module.exports = (sequelize, DataType) => {
    const Products = sequelize.define("Products", {
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
            price: {
                type: DataType.DECIMAL(10, 2),
                defaultValue: 0.00,
                min:0.00,
                max:99999.00
            },
            salesPrice: {
                type: DataType.DECIMAL(10, 2),
                defaultValue:0.00,
                min:0.00,
                max:99999.00
            },
            stockLevel:{
                type: DataType.INTEGER,
                defaultValue: 20
            }
        },
        {
           //scopes
        defaultScope: {
            attributes: ["id", "name", "price",["stockLevel","Stock Alarm Level"],["salesPrice","Sales price"]]
        },
           //scopes end

            paranoid: true,
            hooks: {

            },
            classMethods: {
                associate: (models) => {
                    Products.hasOne(models.ProductsStocks)
                }
            }
        }

    );
    return Products;
};
