import casual from 'casual'


export default class ValidationErrors{
    static getError(err){
        const validationerrorList = ['SequelizeUniqueConstraintError','SequelizeValidationError','SequelizeForeignKeyConstraintError']
        if(!err.name ){
            return err;
        }
        if(!validationerrorList.includes(err.name)){
            return err;
        }

        let error={};

        if(err.name=='SequelizeForeignKeyConstraintError'){
            error.message =`Bu id ile eslesen bir kayit bulunamadi, ${err.parent.detail}`;
        }
        else{
            error = err.errors.map(e => {
                return {
                    message:  e.message,
                    info:`${e.path} : ${e.value}`
                }
            })
            error.message = "Validation Errors!";
        }

        error.status = 400;
        return error;
    }


   static getUser(){
        return {
            name:casual.full_name,
            email:casual.email.replace('@',`${casual.integer(100,200)}@`),
            password:'123456'

        }
    }

}