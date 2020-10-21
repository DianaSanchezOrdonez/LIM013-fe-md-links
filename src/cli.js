#! /usr/bin/env node 

import process from 'process';
import chalk from 'chalk';
import { mdLinks, uniqueLinks, brokenLinks} from './index.js';

const messageStart = () => {
  const commands = [{
      option: '',
      structure: 'md-links <path-to-file>',
      example: './some/example.md',
      outpout: '[{ file, href, text }]'
    },
    {
      option: '--validate',
      structure: 'md-links <path-to-file> [options]',
      example: './some/example.md --validate',
      outpout: '[{ file, href, message, status, text }]'
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
//console.log(`|Links de: ${chalk.cyanBright(pathDoc)} |TOTAL  | ${chalk.yellowBright(arrayLinksMd.length)} `);
if (opt === undefined) {
  mdLinks(args, { validate: false }).then(result => result.forEach(element => console.log(`File => ${chalk.blue(element.file)}, Url => ${chalk.yellow(element.href)}, Text => ${chalk.cyan(element.text)}`)));
} 
else if (opt === '--validate') {
  mdLinks(args, { validate: true }).then(result => result.forEach( function(element){
    if(element.status >= 400){
      console.log(`File => ${chalk.blue(element.file)}, Status => ${chalk.red(element.textStatus,element.status)}, Url => ${chalk.red(element.href)}, Text => ${chalk.cyan(element.text)}`);
    }else{
      console.log(`File => ${chalk.blue(element.file)}, Status => ${chalk.green(element.textStatus,element.status)}, Url => ${chalk.yellow(element.href)}, Text => ${chalk.cyan(element.text)}`);
    }

  }
   
  ))
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
  console.log(chalk.bold.bgRed(`La opción ${opt} es inválida`));
  messageStart();
}
