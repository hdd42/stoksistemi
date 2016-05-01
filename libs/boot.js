module.exports = app => {
    const config = app.libs.config;
    app.libs.db.sequelize.sync().done(() => {
        app.listen(config.port, () => console.log(`uygulamamiz 3000 nolu port uzerinde calismakta`))

    });
};
