//modelos 
const User = require('../schemas/User');
//encriptar dados 
const bcrypt = require("bcrypt");

class UserController {
    
    async index(request, response){
        const users = await User.find();
        
        return response.json(users);
    }
    
    async create(request, response){
        const {name, email, username, password, phone} = request.body;
        
        const passwordCypt = await bcrypt.hash(password, 8);

        const user = await User.create({
            name, 
            email,
            username,
            password: passwordCypt,
            phone
        });

        return response.json(user);
    }
}

module.exports = new UserController();