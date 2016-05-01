module.exports = (app) => {
    const Stock = app.libs.db.models.ProductsStocks;
    class StockCtrl {

        static index(req, res, next) {

            Stock.findAll({})
                .then(products => {
                    return res.status(200).send({count:products.length, products})
                })
                .catch(err => next(err))
        }

        static create(req, res, next) {
            Stock.create(req.body)
                .then(stock => {
                    res.status(201).send({stock})
                })
                .catch(err =>{
                    next(err)
                })
        }

        static find(req,res,next){
            Stock.find({where:{product_id:req.params.id}
            })
                .then(product => {
                    return res.status(200).send({product})
                })
                .catch(err => next(err))
        }
         /*static update(req,res,next){
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
        }*/
    }

    app.route('/api/stocks')
        .get(StockCtrl.index)
        //.post(StockCtrl.create)

   app.route('/api/stocks/:id')
       .all((req,res,next)=>{
           const id = req.params.id;
           if(isNaN(id)){
               next(new Error('Gecersiz id formati'))
           }
           return next();
       })
       .post(StockCtrl.create)
       .get(StockCtrl.find)
       /* .delete(StockCtrl.destroy)
        .put(StockCtrl.update)*/
}