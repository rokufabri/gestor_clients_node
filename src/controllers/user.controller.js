import sql from "mssql";
import {configure} from '../db/conexion.js'
import {generateTokens} from '../db/tokens.js'

export const loginUsers = async(req,res) => {
    try{
        const {Correo,Contrasena} = req.body
        let pool = await sql.connect(configure)
        const result = await pool.request()
        .input('Correo',sql.NVarChar,Correo)
        .input('Contrasena',sql.NVarChar,Contrasena)
        .execute('LOGIN_USERS')
        // res.send(result.recordsets)
        const user = result.recordset[0];
        const accessToken = await generateTokens(user)
        res.send({accessToken,user})

    }catch(error){
        console.error('Erro al iniciar sessión',error.message)
        res.status('500').send("Error al iniciar sessión")
    }
}

export const registerUser = async(req,res) => {
    try{
        const {Nombre,Apellido,Correo,Contrasena,Telefono} = req.body
        let pool = await sql.connect(configure);

        const result = await pool.request()
        .input('Nombre',sql.NVarChar,Nombre)
        .input('Apellido',sql.NVarChar,Apellido)
        .input('Correo',sql.NVarChar,Correo)
        .input('Contrasena',sql.NVarChar,Contrasena)
        .input('Telefono',sql.NVarChar,Telefono)
        .execute('REGISTER_USERS');

        res.send(result.recordsets)
    }catch(error){
        console.error('Error al registrar usuario:',error.message);
        res.status(500).send("Error interno al servidor");
    }
}