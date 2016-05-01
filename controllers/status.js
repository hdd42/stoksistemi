/**
  * @api {get} / API Status
  * @apiGroup Status
  * @apiSuccess {String} status API Status' message
  * @apiSuccessExample {json} Success
  * HTTP/1.1 200 OK
  * {"status": "Products API Up and Running"}
  */

module.exports =(app) =>{
    app.all('/api', (req,res) => {
        res.status(200).send({status:'Api Up and Running!'})
        })
    }
