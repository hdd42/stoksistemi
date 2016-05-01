module.exports = (app) => {
    const env = process.env.NODE_ENV ||'development';
    let config  = env=='development' ? require('./config-dev') : require('./config-prod');
    return config;
}