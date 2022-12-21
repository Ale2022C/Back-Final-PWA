const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

//CREAMOS EL SERVIDOR
const app = express();
const PORT = process.env.PORT || 8080;

//CONECTAMOS A LA DB
conectarDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/productos', require('./routes/producto'));

app.listen(PORT, () => {
    console.log(`El servidor está corriendo perfectamente en el puerto ${PORT}`);
})