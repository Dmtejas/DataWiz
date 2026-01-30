import { errorCodes } from "../constants/errorCodes.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    let title = ''

    switch(statusCode) {
        case errorCodes.INTERNAL_SERVER_ERROR: 
            title = "Internal server error";break;
        
        case errorCodes.NOT_FOUND: 
            title = "Resource not found";break;
        
        case errorCodes.UNAUTHORIZED:
            title = "Unauthorized Access";break;
        default: 
            title = "UNKNOWN ERROR"       
    }

    res.json({
        title,
        message: err.message,
        stackTrace: err.stack
    })
}

export {errorHandler}