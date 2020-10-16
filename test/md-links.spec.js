import getLinks from '../src/index';
import chalk from 'chalk';

/*---------------------------getLinks(route)------------------------------------*/
describe('getLinks()', () => {
  it('Path without extension .md ', () => {
    const message = console.log(chalk.bold.bgRed(`La ruta C:\\DIANA\\laboratoria\\LIM013-fe-md-links\\text.txt no tiene archivos .md`));
    expect(getLinks('text.txt')).toEqual(message)
  })
})