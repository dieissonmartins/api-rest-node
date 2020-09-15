
//modulos
const jsonWebToken = require("jsonwebtoken");
const User         = require("../schemas/User");
const bcrypt       = require("bcrypt");

const sign = jsonWebToken.sign;
const compare = bcrypt.compare;

class sessionController{
    
    async create(request, response)
    {
        const {username, password} = request.body;
        
        //verificar se usuario existe no sistema
        const user = await User.findOne({
            username
        });
        if(!user){
            return response.status(404).json({error: "User not found!"});
        }

        //verificar se a sneha está correta
        const matchPassword = await compare(password, user.password);
        if(!matchPassword){
            return response.status(404).json({error: "Incorrect password!"});
        }

        const token = sign({},"ee3f65f317390751e35a12e843b62bd1", {
            subject: user._id,
            expiresIn: '1d'
        });

        return response.json({
            token,
            user
        });
    }
}

module.exports = new sessionController();