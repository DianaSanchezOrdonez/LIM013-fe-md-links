import { mdLinks, uniqueLinks, brokenLinks } from '../src/index'

/*---------------------------mdLinks(route, option)------------------------------------*/
describe('Testing Promise', () => {
  test('Promise when validate: false', () => {
    const result = [
      {
        href: 'https://docs.npmjs.com/misc/scripts123',
        file:
          'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Configuración de npm-scripts',
      },
      {
        href: 'https://docs.npmjs.com/misc/scripts',
        file:
          'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Configuración de npm-scripts',
      },
      {
        href: 'https://nodejs.org/api/fs.html123',
        file:
          'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Uso de sistema de archivos',
      },
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        file:
          'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Publicar packpage',
      },
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        file:
          'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
        text: 'Crear módulos en Node.js',
      },
    ]
    return mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/test', {
      validate: false,
    }).then(data => {
      expect(data).toEqual(result)
    })
  })
})
test('Promise when validate: true', () => {
  const result = [
    {
      href: 'https://docs.npmjs.com/misc/scripts123',
      file:
        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Configuración de npm-scripts',
      status: 403,
      textStatus: 'Forbidden',
    },
    {
      href: 'https://docs.npmjs.com/misc/scripts',
      file:
        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Configuración de npm-scripts',
      status: 200,
      textStatus: 'OK',
    },
    {
      href: 'https://nodejs.org/api/fs.html123',
      file:
        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Uso de sistema de archivos',
      status: 404,
      textStatus: 'Not Found',
    },
    {
      href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
      file:
        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Publicar packpage',
      status: 200,
      textStatus: 'OK',
    },
    {
      href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
      file:
        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md,C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md',
      text: 'Crear módulos en Node.js',
      status: 200,
      textStatus: 'OK',
    },
  ]
  return mdLinks('C:/DIANA/laboratoria/LIM013-fe-md-links/test', {
    validate: true,
  }).then(data => {
    expect(data).toEqual(result)
  })
})

describe('Unique Links', () => {
  it('Unique Links => 8', () => {
    const arrayObject = [
      {
        href: 'https://nodejs.org/api/fs.html',
      },
      {
        href: 'https://nodejs.org/api/path.html',
      },
      {
        href: 'https://www.npmjs.com/',
      },
      {
        href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
      },
      {
        href: 'https://docs.npmjs.com/files/package.json',
      },
      {
        href: 'https://nodejs.org/',
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
      },
      {
        href: 'https://docs.npmjs.com/misc/scripts123',
      },
    ]
    expect(uniqueLinks(arrayObject)).toEqual(8)
  })
  it('Unique Links => 4', () => {
    const arrayObject = [
      {
        href: 'https://nodejs.org/api/fs.html',
      },
      {
        href: 'https://nodejs.org/api/fs.html',
      },
      {
        href: 'https://www.npmjs.com/',
      },
      {
        href: 'https://www.npmjs.com/',
      },
      {
        href: 'https://nodejs.org/',
      },
      {
        href: 'https://nodejs.org/',
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
      },
    ]
    expect(uniqueLinks(arrayObject)).toEqual(4)
  })
})

describe('Broken Links', () => {
  it('Broken Links => 2', () => {
    const arrayObject = [
      {
        href: 'https://docs.npmjs.com/misc/scripts123',
        status: 403,
        textStatus: 'Forbidden',
      },
      {
        href: 'https://docs.npmjs.com/misc/scripts',
        status: 200,
        textStatus: 'OK',
      },
      {
        href: 'https://nodejs.org/api/fs.html123',
        status: 404,
        textStatus: 'Not Found',
      },
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        status: 200,
        textStatus: 'OK',
      },
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        status: 200,
        textStatus: 'OK',
      },
    ]

    expect(brokenLinks(arrayObject)).toEqual(2)
  })
  it('Broken Links => 3', () => {
    const arrayObject = [
      {
        href: 'https://docs.npmjs.com/misc/scripts123',
        status: 403,
        textStatus: 'Forbidden',
      },
      {
        href: 'https://docs.npmjs.com/misc/scripts123',
        status: 404,
        textStatus: 'OK',
      },
      {
        href: 'https://nodejs.org/api/fs.html123',
        status: 404,
        textStatus: 'Not Found',
      },
      {
        href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
        status: 200,
        textStatus: 'OK',
      },
    ]

    expect(brokenLinks(arrayObject)).toEqual(3)
  })
})
