import devConfig  from './config-dev'
import prodConfig  from './config-prod'

module.exports = (app) => {
    const env = app.get('env') || 'development';
    let config = {};
    console.log("Config Env => ", env)

    if (env === 'development') {
        config = devConfig;
    }
    if (env === 'production') {
        config = prodConfig
    }

    return config;

}