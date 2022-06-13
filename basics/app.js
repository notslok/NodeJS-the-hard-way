/*

NodeJS main core modules:

http, https, os, fs, path

*/ 
const http = require('http');//way for third party or core modules
const routesHandler = require('./routes')//way for custom modules


const server = http.createServer(routesHandler.routesHandler);//creating a server

server.listen(3000);//listen at port 3000