
let config ={
    database:'testdb',
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: 'test.sqlite',

        define: {
            underscored: true
        },
        logging: false
    },
    port: process.env.PORT || 3001
}

module.exports = config
