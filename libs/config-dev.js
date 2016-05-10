
let config ={
    database:'',
    username: "",
    password: "",
    params: {
        dialect: "postgres",
        host: 'localhost',

        define: {
            underscored: true
        }
    },
    tokenSecret:'c369775a-9a9b-4bbd-bd72-5a2294c76d82',
    expiresIn:'5h',
    port: process.env.PORT || 3000
}

module.exports = config
