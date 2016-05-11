module.exports = app => {
    const config = app.libs.config;
    app.listen(config.port, () => {
        console.log(`Uygulamamiz ${config.port} nolu port uzerinde calismakta`)
        console.log(`Uygulama Calisma Modu : ${app.get('env')}`)

    })
};
