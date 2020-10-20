import { mdLinks } from '../src/index';
import chalk from 'chalk';

/*---------------------------mdLinks(route, option)------------------------------------*/
describe('Testing Promise', () => {
  test('Promise when validate: false', () => {
    const result = [{
        href: 'https://docs.npmjs.com/misc/scripts123',
        file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Configuración de npm-scripts',
      },
      {
        href: 'https://docs.npmjs.com/misc/scripts',
        file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Configuración de npm-scripts',
      },
      {
        href: 'https://nodejs.org/api/fs.html123',
        file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'fs',
      }
    ]
    return mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/test', { validate: true }).then((data) => {
      expect(data).toEqual(result)
    })
  });
  test('Error when validate: false' , () => {
    const result = console.log(chalk.bold.bgRed(`La ruta /test/test.md no existe`));
    return mdLinks('/test/test.md', { validate: true }).then((data) => {
      expect(data).toEqual(result)
    })
  })
})
test('Promise when validate: true', () => {
  const result = [{
      href: 'https://docs.npmjs.com/misc/scripts123',
      file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Configuración de npm-scripts',
      status: 403,
      textStatus: 'Forbidden'
    },
    {
      href: 'https://docs.npmjs.com/misc/scripts',
      file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Configuración de npm-scripts',
      status: 200,
      textStatus: 'OK'
    },
    {
      href: 'https://nodejs.org/api/fs.html123',
      file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'fs',
      status: 404,
      textStatus: 'Not Found'
    }
  ]
  return mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/test', {
    validate: true }).then((data) => {
    expect(data).toEqual(result)
  })
})
