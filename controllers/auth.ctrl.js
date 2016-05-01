export default class AuthCtrl {
    static login(req,res,next){
        res.send('login')
    }
    static register(req,res,next){
        res.send('register')
    }
}