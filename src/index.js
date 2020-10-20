import fs from 'fs';
import fetch from 'node-fetch'; 

import chalk from 'chalk';
import { isExistPath, isAbsolutePath, convertToAbsolute, loopArrayDirectory, isMdExtension } from './path.js' 

const expToLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
const expToUrl = /\((http|https|ftp|ftps).+?\)/g;
const textToUrl = /\[((.+?))\]/g;  

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
      } else {
        messageNoMd(route)
      }
    } else {
      route = convertToAbsolute(route)
      const arrayPath = loopArrayDirectory(route);
      let result = isMdExtension(arrayPath)
      //console.log('result', result.length);
      if (result.length > 0) {
        //console.log('result2', result);
        return result
      } else {
        messageNoMd(route)
      }
    }
  } else {
    messageNoExist(route);
  }
}

/*---------------------------Third Step------------------------------------*/
export const mdLinks = (pathFile,option) => new Promise((resolve) => {
  //console.log('a ver si llego',pathFile);
  //pathFile = data.toString().trim();
  let result = getLinks(pathFile);
  //console.log('result', result);
  const links = extraerLinks(result);
  //console.log('links', links);
  if(option.validate === false){
    resolve(links)
  }else{
    //mdLinksValidate(links.href)
    mdLinksValidate(links).then((resultValidate) => {
      resolve(resultValidate)
    })
  }
})

const extraerLinks = (filesMd) => {
  const arrayLinksMd = [];
  filesMd.forEach((file) => {
    const readFileMd = fs.readFileSync(file,'utf-8');
    const linksMatch = readFileMd.match(expToLinks)

    for (let i in linksMatch) {
      let textMatch = linksMatch[i].match(textToUrl)[0];
      let urlMatch = linksMatch[i].match(expToUrl)[0];
      //const textMatch = linksMatch[i];
      urlMatch = urlMatch.slice(1, urlMatch.length - 1);
      //text = textMatch.slice(1, textMatch.length - 1),
      arrayLinksMd.push({
        href: urlMatch,
        text: textMatch.slice(1, textMatch.length - 1),
        file: filesMd.toString(),
      })
    }
  })
  return arrayLinksMd;
}

export const mdLinksValidate = (arrayLinks) => {
  
  const linksValidate = arrayLinks.map(element => {
    
    return fetch(element.href).then((res) => {
      let objLinks = {
        href: element.href,
        file: element.file,
        text: element.text,
        status: res.status,
        textStatus: res.statusText,
      }
      
      return objLinks
      //console.log(`File => ${newArray[0].file}, Url => ${newArray[0].href}, Status => ${newArray[0].textStatus} ${newArray[0].status}, Texto => ${newArray[0].text}`);
    }) 
  })
  //console.log('linksValidate',linksValidate);
  return Promise.all(linksValidate)
}

//mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/test', {validate:true}).then(result => console.log(result))

//const arrayPrueba = ['https://nodejs.org/api/path.html', 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e']
//mdLinksValidate(arrayPrueba).then((result) => {console.log('result',result)})
//mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/prueba.md', { validate: true })
//console.log(getLinks('C:/DIANA/laboratoria/LIM013-fe-md-links'));

