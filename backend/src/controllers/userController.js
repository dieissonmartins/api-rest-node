//modelos 
const User = require('../schemas/User');
//encriptar dados 
const bcrypt = require("bcrypt");

class UserController {
    
    index(request, response){
        return response.send("Teste");
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