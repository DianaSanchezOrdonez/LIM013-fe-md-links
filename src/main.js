import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const isExistPath = (route) => fs.existsSync(route)

isExistPath()

export const isAbsolutePath = (route) => path.isAbsolute(route)

export const convertToAbsolute = (route) => path.join(__dirname, route)

export const isFilePath = (route) => {
  const stat = fs.lstatSync(route);
  const result = stat.isFile();
  return result;
}

export const isDirectoryPath = (route) => {
  let arrayFiles = []
  if (isFilePath(route)) {
    arrayFiles.push(route)
  } else {
    const readDirectory = fs.readdirSync(route)
    readDirectory.forEach(file => {
      const pathFile = path.join(route, file);
      arrayFiles.push(pathFile)
    })
  }
  //console.log(arrayFiles);
  return arrayFiles
}

//let arrayPath = isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')
export const isMdExtension = (arrayPath) => {
  return arrayPath.filter((file) => {
    return path.extname(file) === '.md';
  })
}
//console.log(isMdExtension(arrayPath));
