#!/usr/bin/env node

import fs from 'fs';
import MarkdownIt from 'markdown-it';
import path from 'path';
import {fileURLToPath} from 'url';
//const http = require('http');
//const request = require('request');  
import process from 'process';

let ruta;
const __dirname = path.resolve();
const __filename = fileURLToPath(import.meta.url);

process.stdout.write('Ingresar la ruta:');
process.stdin.on('data', function (data) {
  ruta = data.toString().trim();
  process.stdout.write(`Validando ruta `);
  validPath(ruta);
})

const validPath = (linkPath) => {
  //ruta = ruta.toString()
  if(!path.isAbsolute(ruta)){
    linkPath = path.join(__dirname,linkPath)
  }else{
    console.log('la ruta es absoluta', linkPath);
  }
}

//validPath('C:/DIANA/laboratoria/LIM013-fe-md-links')

//const jsonPath = path.join(__dirname,ruta); 
//const jsonString = fs.readFileSync(jsonPath, 'utf8');
//console.log(jsonPath)
//console.log(jsonString)

