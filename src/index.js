//import path from 'path';
import fs from 'fs';
import process from 'process';
import { isExistPath, isAbsolutePath, convertToAbsolute, isDirectoryPath, isMdExtension } from './main.js'

const expToLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const expToUrl = /\((http|https|ftp|ftps).+?\)/g;
const textToUrl = /\[((.+?))\]/g;

//let pathFile = 'readme.txt';
//process.stdout.write('Ingresar la ruta:');
export const mdLinks = (pathFile, option) => {
  //console.log('a ver si llego',pathFile);
  //pathFile = data.toString().trim();
  let result = getLinks(pathFile);
  result = result.toString();
  if (option.validate) {
    console.log('option',option.validate);
    const readMd = fs.readFileSync(result, 'utf-8')
    const linksMatch = readMd.match(expToLinks)
    const arrayLinksMd = []

    for (let i in linksMatch) {
      const urlMatch = linksMatch[i].match(expToUrl)[0];
      const textMatch = linksMatch[i].match(textToUrl)[0]
      arrayLinksMd.push({
        href: urlMatch.slice(1, urlMatch.length - 1),
        text: textMatch.slice(1, textMatch.length - 1),
        file: pathFile
      })
      //console.log(textMatch.slice(1, urlMatch.length - 1),);
    }
    console.log(arrayLinksMd);
  } else {
    console.log('No es la opcion');
  }
  process.exit()
}

const getLinks = (route) => {
  //route = route.toString();
  //console.log('route',route);
  if (isExistPath(route)) {
    //console.log('isExistPath',isExistPath(route));
    if (isAbsolutePath(route)) {
      //console.log('isAbsolutePath',isAbsolutePath(route));
      const arrayPath = isDirectoryPath(route);
      let result = isMdExtension(arrayPath)
      //console.log('result tamaño', result.length);
      if(result.length > 0){
        //console.log('isMdExtension',result);
        return result
      }else{
        console.log('No es archivo .md');
        process.exit()
      }
    } else {
      route = convertToAbsolute(route)
      const arrayPath = isDirectoryPath(route);
      let result = isMdExtension(arrayPath)
      //console.log('result', result.length);
      if(result.length > 0){
        //console.log('isMdExtension',result);
        return result
      }else{
        console.log('No es archivo .md');
        process.exit()
      }
    }
  } else {
    console.log('No existe el archivo');
    process.exit()
  }
}

//mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links',{validate:true})
//getLinks('text.txt')

//isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')
//isDirectoryPath('text.txt')
//isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')

/* let pathFile;
const __dirname = path.resolve();
const __filename = fileURLToPath(
  import.meta.url);
*/
