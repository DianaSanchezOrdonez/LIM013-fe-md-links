const fs = require('fs');

const archivo = 'text.txt'

/*---validar si existe sincrono---*/
if (fs.existsSync(archivo)) {
  console.log('el archivo existe');
} else {
  console.log('el archivo no existe');
}

/*---validar si existe asincrono---*/
fs.access(archivo, fs.constants.F_OK, (err) => {
  if (err) {
    console.log('El archivo no existe');
  } else {
    console.log('El archivo existe');
  }
})

/*---escribir en un archivo sincrono---*/
const contenido = 'Manejando modulos de node.js';
fs.writeFileSync(archivo, contenido);
console.log('se ha escrito en el archivo');

/*---escribir en un archivo asincrono---*/
fs.writeFile(archivo, contenido, (err) => {
  if (err) {
    throw ('Hubo un error')
  } else {
    console.log('Se a escrito en el archivo');
  }
})

const textoAdicional = '\nAqui va otra linea de codigo';
fs.appendFile(archivo, textoAdicional, (err) => {
  if (err) {
    throw ('No se adjunto más texto', err)
  } else {
    'se agrego más texto'
  }
})

fs.stat('README.md', function (err) {
  if (!err) {
    console.log('el directorio existe');
  } else if (err.code === 'ENOENT') {
    console.log('el directorio no existe');
  }
})

/*---PROCESS WRITE Y ON ---*/
let nombre;
let preguntas = ['¿Cuál es tu nombre? ', '¿Cuál es tu edad?', '¿Lenguaje de programación favorito?'];
let respuestas = [];

function pregunta(i) {
  process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function (data) {
  respuestas.push(data.toString().trim());

  if (respuestas.length < preguntas.length) {
    pregunta(respuestas.length)
  } else {
    process.exit();
  }
})

pregunta(0);

process.stdin.on('data', function (data) {
  nombre = data.toString().trim();
  process.stdout.write(`Hola ${nombre}!`);
  process.exit();
})

/*---crear directorio---*/
fs.mkdirSync('img');
/*--- crear directorio asincrono---*/
fs.mkdir('css', function (error) {
  if (error) {
    throw ('Error: ' + error)
  }
})
/*--- validar si existe sincrono---*/
if (fs.existsSync('css')) {
  console.log('la carpeta ya existe');
} else {
  fs.mkdir('css', function (error) {
    if (error) {
      throw (error)
    }
    console.log('la carpeta ha sido creada');
  });

}

/*--- leer archivo sincrono---*/
let files = fs.readdirSync('./src')

fs.readdir('./src', (error, files) => {
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