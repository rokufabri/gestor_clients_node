import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/usuarios.route.js"

//Constantes de uso
const app = express();
const port = "3000"

//Configuracion
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//Rutas
app.use('/api',router)


app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
})