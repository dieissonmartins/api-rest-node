//modelos 
const User = require('../schemas/User');

class UserController {
    
    index(request, response){
        return response.send("Teste");
    }
    
    create(request, response){
        const user = require.body;
        return response.send(user);
    }
}

module.exports = new UserController();