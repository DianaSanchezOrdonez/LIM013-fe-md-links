import fs from 'fs'
import fetch from 'node-fetch'
import { isExistPath, isAbsolutePath, convertToAbsolute, loopArrayDirectory, isMdExtension } from './path.js'

const expToLinks = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g
const expToUrl = /\((http|https|ftp|ftps).+?\)/g
const textToUrl = /\[((.+?))\]/g

/*---------------------------Second Step------------------------------------*/

const getLinks = route => {
  if (isExistPath(route)) {
    if (isAbsolutePath(route)) {
      const arrayPath = loopArrayDirectory(route)
      let result = isMdExtension(arrayPath)
      return result
    } else {
      route = convertToAbsolute(route)
      const arrayPath = loopArrayDirectory(route)
      let result = isMdExtension(arrayPath)
      return result
    }
  } else {
    throw new Error('No existe')
  }
}

const extraerLinks = filesMd => {
  const arrayLinksMd = []
  filesMd.forEach(file => {
    const readFileMd = fs.readFileSync(file, 'utf-8')
    const linksMatch = readFileMd.match(expToLinks)

    for (let i in linksMatch) {
      let textMatch = linksMatch[i].match(textToUrl)[0]
      let urlMatch = linksMatch[i].match(expToUrl)[0]
      urlMatch = urlMatch.slice(1, urlMatch.length - 1)
      arrayLinksMd.push({
        href: urlMatch,
        text: textMatch.slice(1, textMatch.length - 1),
        file: filesMd.toString(),
      })
    }
  })
  return arrayLinksMd
}

/*---------------------------Option: --validate------------------------------------*/
export const mdLinksValidate = arrayLinks => {
  const linksValidate = arrayLinks.map(element => {
    return fetch(element.href)
      .then(res => {
        let objLinks = {
          href: element.href,
          file: element.file,
          text: element.text,
          status: res.status,
        }
        if (res.status >= 200 && res.status <= 399) objLinks.textStatus = 'Ok'
        else objLinks.textStatus = 'Fail'
        return objLinks
      })
      .catch(() => {
        let objLinks = {
          href: element.href,
          file: element.file,
          text: element.text,
          status: 'Error',
          textStatus: 'Fail',
        }
        return objLinks
      })
  })

  return Promise.all(linksValidate)
}

/*---------------------------Function Core------------------------------------*/
export const mdLinks = (pathFile, option) =>
  new Promise((resolve, reject) => {
    let result
    try {
      result = getLinks(pathFile)
    } catch (error) {
      return reject(error)
    }

    if (result.length > 0) {
      const links = extraerLinks(result)

      if (option.validate === false) {
        resolve(links)
      } else {
        mdLinksValidate(links).then(resultValidate => {
          resolve(resultValidate)
        })
      }
    } else {
      resolve(result)
    }

    //console.log('result', result);
  })

//mdLinks('text.txt', {validate:true}).catch( error => console.error(error.message))

/*---------------------------Option: --stats------------------------------------*/
export const uniqueLinks = arrayObject => {
  let newArray = arrayObject.map(element => element.href)
  const uniqueArray = [...new Set(newArray)]
  //console.log('uniqueArray', uniqueArray);
  return uniqueArray.length
}

/*---------------------------Option: --stats --validate---------------------------*/
export const brokenLinks = arrayObject => {
  let brokenArray = arrayObject.filter(element => element.status >= 400)
  return brokenArray.length
}

/*---------------------------Testing------------------------------------*/

//mdLinks('prueba.md', {validate:true}).catch(console.error('error'))
//mdLinks('prueba.md', {validate:true}).then(result => console.log(result))

//const arrayPrueba = [{href:'https://nodejs.dev'}, {href:'https://nodejs.dev123/'},{href:'https://nodejs.org/en/1'}]
//console.log('uniqueLinks', uniqueLinks(arrayPrueba));
//mdLinksValidate(arrayPrueba).then((result) => {console.log('result',result)})
//mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/prueba.md', { validate: true })
//console.log(getLinks('C:/DIANA/laboratoria/LIM013-fe-md-links'));
