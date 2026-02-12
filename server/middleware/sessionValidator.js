import session from 'express-session'

const validationHandler = (req, res, next) => {
    if(req.session && req.session.user) {
        return next();
    } else {
        res.status(401);
        throw new Error(`Unauthorized access, Log-in first`);
    }
}

export default validationHandler;