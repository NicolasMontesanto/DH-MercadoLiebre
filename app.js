const express = require('express');
const path = require('path');

const log = console.log;
const app = express();
const publicPath = path.resolve( __dirname, "./public");

app.use(express.static(publicPath));

app.listen(3000, () => log("Servidor corriendo en el puerto 3000."));

app.get("/", (req, res)=>res.sendFile(path.join(__dirname, "./views/index.html")));
