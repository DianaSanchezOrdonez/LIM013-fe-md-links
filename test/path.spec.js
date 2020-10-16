import { isExistPath, isAbsolutePath, convertToAbsolute, isFilePath, loopArrayDirectory, isMdExtension } from '../src/path.js';

/*---------------------------isExistPath(route)------------------------------------*/
describe('isExistPath()', () => {
  it('Exist Path prueba.md', () => {
    expect(isExistPath('prueba.md')).toEqual(true);
  });
  it('Exist Path text.md', () => {
    expect(isExistPath('text.md')).toEqual(false);
  });
  it('Exist Path C:/DIANA/laboratoria/LIM013-fe-md-links', () => {
    expect(isExistPath('C:/DIANA/laboratoria/LIM013-fe-md-links')).toEqual(true);
  });
  it('Exist Path C:/DIANA/laboratoria/LIM013-fe-md-links/text.md', () => {
    expect(isExistPath('C:/DIANA/laboratoria/LIM013-fe-md-links/text.md')).toEqual(false);
  });
});

/*---------------------------isAbsolutePath(route)------------------------------------*/
describe('isAbsolutePath()', () => {
  it('The path is absolute', () => {
    expect(isAbsolutePath('C:/DIANA/laboratoria/LIM013-fe-md-links')).toBe(true);
  });
  it('The path is absolute', () => {
    expect(isAbsolutePath('C:/')).toBe(true);
  });
  it('The path is not absolute', () => {
    expect(isAbsolutePath('readme.md')).toBe(false);
  });
});

/*---------------------------convertToAbsolute(route)------------------------------------*/
describe('convertToAbsolute()', () => {
  it('Convert to absolute prueba.md', () => {
    const absolutePath = 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\prueba.md'
    expect(convertToAbsolute('prueba.md')).toEqual(absolutePath);
  });
  it('Convert to absolute test/prueba.txt', () => {
    const absolutePath = 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\prueba.txt'
    expect(convertToAbsolute('test/prueba.txt')).toEqual(absolutePath);
  });
  it('Convert to absolute C:/DIANA/laboratoria/LIM013-fe-md-links', () => {
    const absolutePath = 'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\C:\\DIANA\\laboratoria\\LIM013-fe-md-links'
    expect(convertToAbsolute('C:/DIANA/laboratoria/LIM013-fe-md-links')).toEqual(absolutePath);
  });
});

/*---------------------------isFilePath(route)------------------------------------*/
describe('isFilePath()', () => {
  it('The path not file', () => {
    expect(isFilePath('C:/DIANA/laboratoria/LIM013-fe-md-links')).toBe(false);
  });
  it('The path is file', () => {
    expect(isFilePath('C:/DIANA/laboratoria/LIM013-fe-md-links/readme.md')).toBe(true);
  });
  it('The path is file', () => {
    expect(isFilePath('readme.md')).toBe(true);
  });
});

/*---------------------------loopArrayDirectory(route)------------------------------------*/
describe('loopArrayDirectory()', () => {
  it('Files in directory', () => {
    const arrayFiles = ['C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\.eslintrc',
      'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\md-links.spec.js',
      'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md',
      'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md'
    ]
    expect(loopArrayDirectory('C:/DIANA/laboratoria/LIM013-fe-md-links/test')).toEqual(arrayFiles);
  });
  it('Files in directory', () => {
    const arrayFiles = ['C:/DIANA/laboratoria/LIM013-fe-md-links/readme.md']
    expect(loopArrayDirectory('C:/DIANA/laboratoria/LIM013-fe-md-links/readme.md')).toEqual(arrayFiles);
  });
  it('Files in directory', () => {
    const arrayFiles = ['readme.md']
    expect(loopArrayDirectory('readme.md')).toEqual(arrayFiles);
  });
});

/*---------------------------isMdExtension(route)------------------------------------*/
describe('isMdExtension()', () => {
  it('The file is .md', () => {
    const arrayFiles = ['C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\.eslintrc',
                        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\md-links.spec.js',
                        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md',
                        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md'
                      ]
    const filesMd = ['C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test.md',
                     'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\test2.md'
                    ]
    expect(isMdExtension(arrayFiles)).toEqual(filesMd);
  });
  it('The file is .md', () => {
    const arrayFiles = ['C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\.eslintrc',
                        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\test\\md-links.spec.js',
                      ]
    const filesMd = []
    expect(isMdExtension(arrayFiles)).toEqual(filesMd);
  });
  it('The file is .md', () => {
    const arrayFiles = ['C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\readme.md',
                        'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\prueba.md',
                      ]
    const filesMd = ['C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\readme.md',
                     'C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\prueba.md'
                    ]
    expect(isMdExtension(arrayFiles)).toEqual(filesMd);
  });
});
