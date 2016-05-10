import jwt from 'jsonwebtoken'

module.exports = (app) => {
    const config = app.libs.config;
    const Users = app.libs.db.models.Users;
    
    app.post('/auth/api/login',(req,res,next) =>{
        const email = req.body.email ||null ;
        const password = req.body.password ||null ;
        if(!email || !password){
            return next(new Error("Email/Password is missing!"))
        }
        
        Users.scope('login').findOne({where:{email:email}})
            .then(user => {
                if(!user){
                    return res.status(401).send({message:"Kullanici Bulunamadi"})
                }
                if(Users.isPasswordCorrect(user.password,password)){
                    const payload = {id:user.id}
                    const jwtToken = jwt.sign(payload,config.tokenSecret,{expiresIn:config.expiresIn});
                   return res.status(200).send({token:jwtToken});
                }
                return res.status(401).send({message:"Hatali sifre/email!"})
            })
            .catch(err => {
                next(err);
            })
    })


    app.use('/api/*', app.libs.auth.authJWT.authenticate())

}


