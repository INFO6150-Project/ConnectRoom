const User = require('../../models/user'); 
const bcrypt = require('bcryptjs');

const postRegister = async(req,res) => {
    try{
        const{ username, mail, password } = req.body;

        //check if user exists
        const userExists = await User.exists({ mail });
        if(userExists){
            return res.status(409).send("Email already exists.");
        }

        const ecryptedPassword = await bcrypt.hash(password, 10);

        //create user document and save in database
        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: ecryptedPassword
        });
        // create JWT token 
        const token = "JWT TOKEN"
        res.status(201).json({
            userDetails:{
            mail:  user.mail,
            token: token,
            username: user.username
            }
        });
    }
    catch (err) {
        return res.status(500).send(`Error occurred. Please try again. Details: ${err.message}`);
    }
};

module.exports =  postRegister;