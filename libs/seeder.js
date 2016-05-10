'use strict'
const casual = require('casual')
import config from '../libs/config-test'
const db =require('../libs/db')(config)
const _ = require('lodash')


const models = db.models;
_.each(models, (model)=>{
    model.destroy({where:{id:-1}})
})


models.Users.count()
    .then((n) => {
        if(n < 5) {
            for(let i = 0; i<5; i++){
                models.Users.create(getUser())
                    .then((user)=>{
                        console.log("User Seeded: ", user.email)
                    }).catch()

            }
        }
    })

function    getUser(){
    return {
        name:casual.full_name,
        email:casual.email.replace('@',`${casual.integer(100,200)}@`),
        password:'123456'

    }
}