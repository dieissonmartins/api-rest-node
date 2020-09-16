
//modulos
const jsonWebToken = require("jsonwebtoken");

const verify = jsonWebToken.verify;

module.exports = async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({error: "User not authorizated!"});
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = verify(token,"ee3f65f317390751e35a12e843b62bd1");
        console.log(decoded);
        return next();   
    } catch (error) {
        return response.status(401).json({error: "Invalid JWT Token!"});
    } 
}; 