import mdLinks from '../src/index';

/*---------------------------mdLinks(route, option)------------------------------------*/
describe('The data is a Promise', () => {
  test('Could be...', () => {
    const prueba = 'C:/DIANA/laboratoria/LIM013-fe-md-links/test';
    const option = { validate: true };
    const result = [{
        href: 'https://docs.npmjs.com/misc/scripts123',
        file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md',
        text: 'Configuración de npm-scripts',
        status: 403,
        textStatus: 'Forbidden'
      },
      {
        href: 'https://docs.npmjs.com/misc/scripts',
        file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md',
        text: 'Configuración de npm-scripts',
        status: 200,
        textStatus: 'OK'
      },
      {
        href: 'https://nodejs.org/api/fs.html123',
        file: 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md',
        text: 'fs',
        status: 404,
        textStatus: 'Not Found'
      }
    ]
    
    return mdLinks(prueba,option).then((data) => {
      expect(data).toBe(result)
    }).catch((error) => {
      console.log(error);
    })
  })
})

