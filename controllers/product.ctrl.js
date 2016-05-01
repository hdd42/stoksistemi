

module.exports = (app) => {

    const Product = app.libs.db.models.Products;
    class ProductCtrl {

        static index(req, res, next) {

            Product.findAll()
                .then(product => {
                    return res.status(200).send({count:product.length, product})
                })
                .catch(err => next(err))
        }

       static create(req, res, next) {
            Product.create(req.body)
                .then(product => {
                    res.status(201).send({product})
                })
                .catch(err =>{
                    next(err)
                })
        }

         static update(req,res,next){
             Product.update(req.body,{where:{id:req.params.id}})
                .then(count => {
                    const updated = count[0];
                    let message = updated >= 1 ? 'Guncelleneme Basarili' :'Eslesen bir kayit bulunamadi'
                    return res.status(401).send({updated, message})
                })
                .catch(err => next(err))
        }
        static destroy (req,res,next){
            Product.destroy({where:{id:req.params.id}})
                .then(count => {
                    let message= count>=1 ?'Kayit basariyla silindi':'Eslesen birkayit bulunamadi'
                    res.status(200).send({count, message})
                })
                .catch(err => next(err))
        }
    }

    app.route('/api/products')
        /**
         * @api {get} /products Request List of products
         * @apiName GetUser
         * @apiGroup User
         *
         * @apiParam {Number} id Users unique ID.
         *
         * @apiSuccess {String} firstname Firstname of the User.
         * @apiSuccess {String} lastname  Lastname of the User.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "firstname": "John",
         *       "lastname": "Doe"
         *     }
         *
         * @apiError UserNotFound The id of the User was not found.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "UserNotFound"
         *     }
         */
        .get(ProductCtrl.index)
        .post(ProductCtrl.create)

       app.route('/api/products/:id')
        .delete(ProductCtrl.destroy)
        .put(ProductCtrl.update)

}