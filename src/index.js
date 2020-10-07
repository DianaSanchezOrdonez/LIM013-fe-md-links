#!/usr/bin/env node

//import path from 'path';
import fs from 'fs';
import process from 'process';
import { isExistPath, isAbsolutePath, convertToAbsolute, isDirectoryPath, isMdExtension } from './main.js'

const expToLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const expToUrl = /\((http|https|ftp|ftps).+?\)/g;
const textToUrl =/\[((.+?))\]/g;

let pathFile;
process.stdout.write('Ingresar la ruta:');
process.stdin.on('data', function (data) {
  pathFile = data.toString().trim();
  getLinks(pathFile);

  let result = isMdExtension(getLinks(pathFile))
  result = result.toString()
  if (result.length > 0) {
    const readMd = fs.readFileSync(result, 'utf-8')
    const linksMatch = readMd.match(expToLinks)
    const arrayLinksMd = [{}]

    for (let i in linksMatch) {
      const urlMatch = linksMatch[i].match(expToUrl)[0];
      const textMatch = linksMatch[i].match(textToUrl)[0]
      arrayLinksMd.push({
        href:urlMatch.slice(1, urlMatch.length - 1),
        text:textMatch.slice(1, textMatch.length - 1),
        file:pathFile
      })
      //console.log(textMatch.slice(1, urlMatch.length - 1),);
    }

    console.log(arrayLinksMd);

  } else {
    console.log('No es archivo .md');
  }
  process.exit()
})

const getLinks = (route) => {
  if (isExistPath(route)) {
    if (isAbsolutePath(route)) {
      const arrayPath = isDirectoryPath(route);
      return arrayPath
    } else {
      route = convertToAbsolute(route)
      const arrayPath = isDirectoryPath(route);
      return arrayPath
    }
  } else {
    console.log('No existe el archivo');
    process.exit()
  }
}


//isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')
//isDirectoryPath('text.txt')
//isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')

/* let pathFile;
const __dirname = path.resolve();
const __filename = fileURLToPath(
  import.meta.url);
*/
