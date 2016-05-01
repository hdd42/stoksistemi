import {ValidationErrors} from './libs/helper'

module.exports = (app) => {

    app.use(function(req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') !== 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.json({'error': {
                message: err.message,
                error: err
            }});
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        
        err = ValidationErrors.getError(err);

        res.status(err.status || 500).json('error', {
            message: err.message,
            error: err
        });
    });

}