#!/usr/bin/env node
import process from 'process';
import { mdLinks, uniqueLinks, brokenLinks} from './index.js';

const messageStart = () => {
  const commands = [{
      option: '',
      structure: 'md-links <path-to-file>',
      example: './some/example.md',
      outpout: '[{ href, text, file }]'
    },
    {
      option: '--validate',
      structure: 'md-links <path-to-file> [options]',
      example: './some/example.md --validate',
      outpout: '[{ href, text, file, status, message }]'
    },
    {
      option: '--stats',
      structure: 'md-links <path-to-file> [options]',
      example: './some/example.md --stats',
      outpout: '[{ total, unique }]'
    },
    {
      option: '--stats --validate',
      structure: 'md-links <path-to-file> [options]',
      example: './some/example.md --stats --validate',
      outpout: '[{ total, unique, broken }]'
    },
    {
      option: '--help',
      structure: '',
      example: 'md-links <path-to-file> [options]',
      outpout: 'Volver a mostrar las opciones'
    }
  ]

  console.table(
    commands.map(command => {
      return {
        'Opciones': command.option,
        'Ejemplo': command.example,
        'Outpout': command.outpout
      }
    })
  );
}

/*---------------------------Input commands lines------------------------*/
const args = process.argv[2];
let opt;

/*--------------------Assigment input option in command line-------------*/
if (process.argv[3] && process.argv[4]){
  opt = `${process.argv[3]} ${process.argv[4]}`
}
else{
  opt = process.argv[3]
}
//console.log('opt', opt);
/*---------------------------Options------------------------------------*/
if (opt === undefined) {
  mdLinks(args, { validate: false }).then(result => result.forEach(element => console.log(`File => ${element.file}, Url => ${element.href}, Text => ${element.text}`)))
} 
else if (opt === '--validate') {
  mdLinks(args, { validate: true }).then(result => result.forEach(element => console.log(`File => ${element.file}, Url => ${element.href}, Status => ${element.textStatus} ${element.status}, Texto => ${element.text}`)))
} 
else if (opt === '--stats') {
  mdLinks(args, { validate: true }).then((result) => {
    return console.log(`Total => ${result.length} \nUnique => ${uniqueLinks(result)}`);
  })
} 
else if (opt === '--stats --validate') {
  mdLinks(args, { validate: true }).then((result) => {
    return console.log(`Total => ${result.length} \nUnique => ${uniqueLinks(result)} \nBroken => ${brokenLinks(result)}`);
  })
} 
else if (opt === '--help') {
  messageStart();
}
else{
  console.log('opcion inválida');
}
