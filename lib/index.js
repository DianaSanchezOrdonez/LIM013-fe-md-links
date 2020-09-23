"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const order = {
  hola: () => {
    console.log('hello world');
  }
};
var _default = order; //const fs = require('fs');
//fs.mkdirSync('img');
//funcion de manera asyncrona 

/* fs.mkdir('css' , function(error){
  if(error){
    throw('Error: ' + error)
  }
}) */
//validar si existe 

/* if(fs.existsSync('css')){
  console.log('la carpeta ya existe');
}else{
  fs.mkdir('css', function(error){
    if(error){throw(error)}
    console.log('la carpeta ha sido creada');
  });
  
} */
//let files = fs.readdirSync('./src')

/* fs.readdir('./src', (error, files) => {
  if (error) {
    throw (error);
  }
  console.log(files);

  //let archivo = fs.readFileSync('./src/texto.txt', 'utf-8')
  fs.readFile('./src/texto.txt', 'utf-8', (error, file) => {
    if (error) {
      throw error
    }
    console.log(file);
  })
  console.log('Leyendo archivo...');

})
 */

exports.default = _default;