
let config ={
    database:'yg',
    username: "yg",
    password: "123456",
    params: {
        dialect: "postgres",
        host: 'localhost',

        define: {
            underscored: true
        }
    },
    port: process.env.PORT || 3000
}

module.exports = config
