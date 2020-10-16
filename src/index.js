//import path from 'path';
/* import fs from 'fs';
import fetch from 'node-fetch'; */

import chalk from 'chalk';
import { isExistPath, isAbsolutePath, convertToAbsolute, loopArrayDirectory, isMdExtension } from './path.js' 

/* const expToLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const expToUrl = /\((http|https|ftp|ftps).+?\)/g;
const textToUrl = /\[((.+?))\]/g; */

/* const commands = [{option:'', structure: 'md-links <path-to-file>', example: './some/example.md', outpout:'[{ href, text, file }]'},
                  {option:'--validate', structure: 'md-links <path-to-file> [options]', example: './some/example.md --validate', outpout:'[{ href, text, file, status, message }]'},
                  {option:'--stats', structure: 'md-links <path-to-file> [options]', example: './some/example.md --stats', outpout:'[{ total, unique }]'},
                  {option:'--stats --validate', structure: 'md-links <path-to-file> [options]', example: './some/example.md --stats --validate', outpout:'[{ total, unique, broken }]'},
                  {option:'--help', structure: '', example: 'md-links <path-to-file> [options]', outpout:'Volver a mostrar las opciones'}]
console.table(
  commands.map(command => {
    return{
      'Opciones' : command.option,
      'Ejemplo' : command.example,
      'Outpout' : command.outpout
    }
  })
); */

/* export const mdLinks = (pathFile, option) => new Promise((resolve, reject) => {
  //console.log('a ver si llego',pathFile);
  //pathFile = data.toString().trim();
  let result = getLinks(pathFile);
  result = result.toString();
  //console.log('result', result);

  //console.log('option', option.validate);
  const readMd = fs.readFileSync(result, 'utf-8')
  const linksMatch = readMd.match(expToLinks)
  const arrayLinksMd = []

  for (let i in linksMatch) {
    let urlMatch = linksMatch[i].match(expToUrl)[0];
    const textMatch = linksMatch[i].match(textToUrl)[0];
    urlMatch = urlMatch.slice(1, urlMatch.length - 1);

    arrayLinksMd.push({
      href: urlMatch,
      text: textMatch.slice(1, textMatch.length - 1),
      file: pathFile,
    })
    //console.log(arrayLinksMd);
    resolve(arrayLinksMd)
    //console.log(textMatch.slice(1, urlMatch.length - 1),);  
  }
  //console.log('arrayLinksMd', arrayLinksMd);
  //process.exit()
}).then((arrayLinksMd) => {
  if (option.validate == undefined) {
    return arrayLinksMd.forEach(element => {
      console.log(`file: ${element.file},href: ${element.href},text: ${element.text}`);
    })
  } else if (option.validate) {
    //console.log('veamos', option.validate, option.stats);
    return arrayLinksMd.forEach(element => {

      let newArray = [];
      fetch(element.href).then((res) => {
        newArray.push({
          href: element.href,
          text: element.text,
          file: element.file,
          status: res.status,
          textStatus: res.statusText,
        })
        return console.log(`${newArray[0].href},${newArray[0].textStatus},${newArray[0].status}, ${newArray[0].text}`);
      }, (error) => {
        console.log(error)
      })
    });
  } else if (!option.validate) {
    //console.log('veamos3',option.validate, option.stats);

    //console.log('arrayLinksMd',arrayLinksMd[0].href);
    let newArray = arrayLinksMd.map(element => element.href)
    const uniqueLinks = [...new Set(newArray)];

    console.log(`Total: ${arrayLinksMd.length} \nUnique: ${uniqueLinks.length}`);

    //return console.log(newArray);
  } else {

    let newArray = arrayLinksMd.map(element => element.href)
    const uniqueLinks = [...new Set(newArray)];
    const brokenLinks = [];
    let index = 0;
    const imprimirResult = () => {
      console.log(`Total: ${arrayLinksMd.length} \nUnique: ${uniqueLinks.length} \nBroken: ${brokenLinks.length}`);
    }

    arrayLinksMd.map(element => {

      fetch(element.href).then(res => {
        index++;
        if (res.status >= 400) {

          brokenLinks.push(element)
          //console.log(brokenLinks);

        }
        if (arrayLinksMd.length == index) {
          imprimirResult()
        }

      }, (error) => {
        console.log(error)
      })
    })

  }

}, (error) => console.log(error)) */

/*---------------------------Second Step------------------------------------*/
const messageNoExist = (route) => {
  console.log(chalk.bold.bgRed(`La ruta ${route} no existe`))
}
const messageNoMd = (route) => {
  console.log(chalk.bold.bgRed(`La ruta ${route} no tiene archivos .md`))
}

const getLinks = (route) => {
  //console.log('route', route);
  if (isExistPath(route)) {
    //console.log('isExistPath(route)', isExistPath(route));
    if (isAbsolutePath(route)) {
      const arrayPath = loopArrayDirectory(route);
      let result = isMdExtension(arrayPath)
      if (result.length > 0) {
        //console.log('result1', result);
        return result
      } 
      else {
        messageNoMd(route)
      }
    }
    else {
      route = convertToAbsolute(route)
      const arrayPath = loopArrayDirectory(route);
      let result = isMdExtension(arrayPath)
      //console.log('result', result.length);
      if (result.length > 0) {
        //console.log('result2', result);
        return result
      } 
      else {
        messageNoMd(route)
      }
    }
  }
  else {
    messageNoExist(route);
  }
}

//mdLinks2('C:/DIANA/laboratoria/LIM013-fe-md-links/prueba.md', { validate: true })
getLinks('text.txt')
//fetchLinks('C:/DIANA/laboratoria/LIM013-fe-md-links')
//isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')
//isDirectoryPath('text.txt')
//isDirectoryPath('C:/DIANA/laboratoria/LIM013-fe-md-links')

/* let pathFile;
const __dirname = path.resolve();
const __filename = fileURLToPath(
  import.meta.url);
*/
