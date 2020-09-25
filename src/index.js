#!/usr/bin/env node
//import {createRequire} from 'module';
//const require = createRequire(import.meta.url);
import fs from 'fs';
//const http = require('http');
//const request = require('request');  
import process from 'process';

let ruta;

process.stdout.write('Ingresar la ruta:');
process.stdin.on('data', function (data) {
  ruta = data.toString().trim();
  process.stdout.write(`Validando ruta ${ruta}`);
  existFile(ruta);
}) 

const existFile = () => {

  fs.access(ruta, fs.constants.F_OK, (err) => {
    if (err) {
      throw ('No existe la ruta')
    } else {
      console.log('La ruta existe');
    }
    process.exit();
  })
}

export default existFile; 

/* function handler(req, res) {
  request(ruta, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log('URL IS OK');
      //res.writeHead(200, {'Content-Type':'text/html'})
      res.end('Url is OK')
    } else {
      //res.writeHead(500, {'Content-Type': 'text/html'});
      res.end('URL broke:' + JSON.stringify(response, null, 2));
    }
    process.exit()
  })
};

http.createServer(handler).listen(3000);  */

/* let ruta;
process.stdout.write('Ingresar la ruta:');
process.stdin.on('data', function (data) {
  ruta = data.toString().trim();
  process.stdout.write(`Validando ruta ${ruta}`);
  existFile(ruta);
})

const existFile = (ruta) => {
  fs.access(ruta, fs.constants.F_OK, (err) => {
    if (err) {
      throw ('No existe la ruta')
    } else {
      console.log('La ruta existe');
    }
    process.exit();
  })
} */
