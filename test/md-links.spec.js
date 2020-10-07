import { isExistPath, isAbsolutePath} from '../src/main.js';

describe('mdLinks', () => {
  it('its a function', () => {
   expect(typeof isExistPath).toBe('function');
  });
});

describe('isAbsolutePath', () => {
  it('The path is absolute', () => {
   expect(isAbsolutePath('C:/DIANA/laboratoria/LIM013-fe-md-links')).toBe(true);
  });
  it('The path is not absolute', () => {
    expect(isAbsolutePath('readme.md')).toBe(false);
   });
});
