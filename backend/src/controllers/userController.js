//modelos 
const User = require('../schemas/User');

class UserController {
    
    index(request, response){
        return response.send("Teste");
    }
    
    async create(request, response){
        const {name, email, username, password, phone} = request.body;
        
        const user = await User.create({
            name, 
            email,
            username,
            password,
            phone
        });

        return response.json(user);
    }
}

module.exports = new UserController();