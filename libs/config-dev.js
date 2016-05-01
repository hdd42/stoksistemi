module.exports = {
    database: "yg",
    username: "yg",
    password: "123456",
    params: {
        dialect: "postgres",
        host: 'localhost',

        define: {
            underscored: true,
            debug:true
        }
    },
    port:process.env.NODE_ENV||3000
};