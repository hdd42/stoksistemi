module.exports = (app) => {

    const Product = app.libs.db.models.Products;
    class ProductCtrl {

        static index(req, res, next) {

            Product.findAll()
                .then(products => {
                    return res.status(200).send({count: products.length, products})
                })
                .catch(err => next(err))
        }

        static find(req, res, next) {
            Product.findById(req.params.id)
                .then(product => {
                    return res.status(200).send({product})
                })
                .catch(err => next(err))
        }

        static create(req, res, next) {
            Product.create(req.body)
                .then(product => {
                    res.status(201).send({product})
                })
                .catch(err => {
                    next(err)
                })
        }

        static update(req, res, next) {
            Product.update(req.body, {where: {id: req.params.id}})
                .then(count => {
                    const updated = count[0];
                    let message = updated >= 1 ? 'Guncelleneme Basarili' : 'Eslesen bir kayit bulunamadi'
                    return res.status(401).send({updated, message})
                })
                .catch(err => next(err))
        }

        static destroy(req, res, next) {
            Product.destroy({where: {id: req.params.id}})
                .then(count => {
                    let message = count >= 1 ? 'Kayit basariyla silindi' : 'Eslesen birkayit bulunamadi'
                    res.status(200).send({count, message})
                })
                .catch(err => next(err))
        }
    }

    app.route('/api/products')
        /**
         * @api {get} /products Request List of products
         * @apiName GetProducts
         * @apiGroup Products
         *
         * @apiParam {Number} limit default 10.
         * @apiParam {Number} skip default 10.
         *
         * @apiSuccess {Number} count Total count of found produtcs.
         * @apiSuccess (Products) {Number} id  Id of product.
         * @apiSuccess (Products) {String} name name of product.
         * @apiSuccess (Products) {Nummber} price of product.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "count" : 4,
         *       "products":[
         *          {
         *          "name": "TV",
         *          "price": "1000"
         *          }
         *       ]
         *     }
         *
         */
        .get(ProductCtrl.index)
        .post(ProductCtrl.create)

    app.route('/api/products/:id')
        .get(ProductCtrl.find)
        .delete(ProductCtrl.destroy)
        /**
         * @api {put} /product/:id Update product
         * @apiName PutProduct
         * @apiGroup Products
         *
         * @apiParam {Number} id          Product id.
         * @apiParam {String} [name]      Product name.
         * @apiParam {String} [price]     Product price.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *        "updated": 1,
         *         "message": "Guncelleneme Basarili"
         *      }
         *
         */
        .put(ProductCtrl.update)

}