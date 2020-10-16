import path from 'path';
import fs from 'fs';

const __dirname = path.resolve('');
//console.log('__dirname',__dirname);

/*---------------------------First Step------------------------------------*/
export const isExistPath = (route) => fs.existsSync(route)

export const isAbsolutePath = (route) => path.isAbsolute(route)

export const convertToAbsolute = (route) => path.join(__dirname, route)
//console.log('convertToAbsolute', convertToAbsolute('C:/DIANA/laboratoria/LIM013-fe-md-links'));

export const isFilePath = (route) => {
  const stat = fs.lstatSync(route);
  const result = stat.isFile();
  return result;
}

export const loopArrayDirectory = (route) => {
  let arrayFiles = []
  if (isFilePath(route)) {
    arrayFiles.push(route)
  } 
  else {
    const readDirectory = fs.readdirSync(route)
    readDirectory.forEach(file => {
      const pathFile = path.join(route, file);
      arrayFiles.push(pathFile)
    })
  }
  return arrayFiles
}

export const isMdExtension = (arrayFiles) => {
  return arrayFiles.filter((file) => {
    return path.extname(file) === '.md';
  });
}

//console.log('md', isMdExtension('C:/DIANA/laboratoria/LIM013-fe-md-links/prueba.md'));

//console.log('arryPath', arrayPath);
