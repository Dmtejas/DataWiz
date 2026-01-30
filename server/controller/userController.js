import { userModel } from "../model/userModel.js"

const userController = (req, res) => {
    try {
        const { username, password} = req.body;

        //Functionality needs to be implemented
        res.json({username, password})

    } catch(err) {
        console.log(err);
        
    }
    res.send(`User attempted to log in`)
}

export {userController}