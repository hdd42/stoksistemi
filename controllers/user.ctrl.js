module.exports = (app) => {
    const User = app.libs.db.models.Users;
    class UserCtrl {

        static index(req, res, next) {
           
            User.findAll()
                .then(users => {
                    return res.status(200).send({count:users.length,users})
                })
                .catch(err => next(err))
        }
        static find(req, res, next) {
            User.findById(req.params.id)
                .then(user => {
                    return res.status(200).send({user})
                })
                .catch(err => next(err))
        }

        static create(req, res, next) {
            User.create(req.body)
                .then(user => {
                    res.status(201).send({user})
                })
                .catch(err =>{
                   next(err)
                })
        }

        static update(req,res,next){
            User.update(req.body,{where:{id:req.params.id}})
                .then(count => {
                 const updated = count[0];
                 let message = updated >= 1 ? 'Guncelleneme Basarili' :'Eslesen bir kayit bulunamadi'
                 return res.status(401).send({updated, message})
                })
                .catch(err => next(err))
        }
        static destroy (req,res,next){
          User.destroy({where:{id:req.params.id}})
              .then(count => {
                  let message= count>=1 ?'Kayit basariyla silindi':'Eslesen birkayit bulunamadi'
                  res.status(200).send({count, message})
              })
              .catch(err => next(err))
        }
    }

    app.route('/api/users')
        .get(UserCtrl.index)
        .post(UserCtrl.create)

    app.route('/api/users/:id')
        .all((req,res,next) => {
            if(isNaN(req.params.id)){
                return next(new Error('Gecersiz id formati'))}
            next()
        })
        .get(UserCtrl.find)
        .delete(UserCtrl.destroy)
        .put(UserCtrl.update)
}