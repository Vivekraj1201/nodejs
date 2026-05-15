const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({message:err.message, stackTrace: err.stack});
    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constant.UNAUTHORIZED:
            res.json({
                title: "Unauthorized ",
                message: err.message,
                stackTrace: err.stack
            });
        case constant.FORBIDDEN:
            res.json({
                title: "Forbidden ",
                message: err.message,
                stackTrace: err.stack
            });
        case constant.NOT_FOUND:
            res.json({
                title: "not found ",
                message: err.message,
                stackTrace: err.stack
            });
        case constant.SERVER_ERROR:
            res.json({
                title: "server error",
                message: err.message,
                stackTrace: err.stack
            });
        default:
            console.log("all good, no error")
            break;

    }

}

module.exports = errorHandler;