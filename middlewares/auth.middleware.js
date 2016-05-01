import AuthCtrl from  '../controllers/auth.ctrl'

module.exports = (app) => {
    app.post('/auth/login',AuthCtrl.login)
    app.post('/auth/register',AuthCtrl.register)

  /*  app.use('/api/!*', (req,res,next) => {
        if(req.user){
        return  next()
        }
        res.status(401).send("yetkisiz giris");
    })*/
}
