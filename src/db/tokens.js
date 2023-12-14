import jwt from "jsonwebtoken";

export const generateTokens = async(user) => {
    try{
        //Los payload son la información que encriptamos a mi jsonwebtoken
        const payload = {
            user: [{
                Nombre:user.Nombre,
                Apellido: user.Apellido
            }]
        }
        //Creamos la llave secreta y las opciones necesarios
        const secretKey = "mi_clave_secreta";
        const options = {
          expiresIn: '1h'  
        };
        //Generamos la clave
        const accessToken = jwt.sign(payload,secretKey,options)
        return accessToken;
    }catch(error){
        throw new Error(`Error al generar el token: ${error.message}`)
    }
}