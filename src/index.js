const fs = require('fs');
let ruta;
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
}
