const axios = require("axios")
const express = require("express");

const server = express();



require("dotenv").config()
const {PORT} = process.env
const {API_PRINCIPAL} = process.env

axios.get('/recovery',()=>{
    
    try {
        const response = axios.get(API_PRINCIPAL);
        res.status(200).res({})
               
              } catch (error) {
                console.error(error);
              }
        
    })

server.listen(PORT || 3000,  ()=>{
    console.log(`El servidor se esta escuchando en el puerto ${PORT}`)
})


