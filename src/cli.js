#!/usr/bin/env node
import process from 'process';
import { mdLinks} from './index.js';

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

/*---------------------------Stats and Mix------------------------------------*/
const mdLinksStats = (pathFile) => {
  mdLinksValidate(pathFile).then((arrayLinksMd) => {
    let newArray = arrayLinksMd.map(element => element.href)
    const uniqueLinks = [...new Set(newArray)];
    return console.log(`Total => ${arrayLinksMd.length} \nUnique => ${uniqueLinks.length}`);
  }, (error) => {
    console.log(error);
  })
}

/*-------Grab provided args-------*/
const args = process.argv[2];
let opt = process.argv[3];
//console.log('opt', opt);
let opt2 = `${process.argv[3]} ${process.argv[4]}`
//console.log('opt2', opt2);

if (opt === undefined) {
    mdLinks(args, {validate: false}).then(result => console.log(result))
} 
else if (opt === '--validate') {
    mdLinks(args, {validate: true}).then(result => console.log(result))
} 
else if (opt === '--stats') {
    mdLinks(args, {validate: true}).then((result) => {
        let newArray = result.map(element => element.href)
        const uniqueLinks = [...new Set(newArray)];
        return console.log(`Total => ${result.length} \nUnique => ${uniqueLinks.length}`);
    }) 
} 
else if (opt === '--help') {
  messageStart();
}
else {

}

/*
fetch('https://api.github.com/users/octocat').then((res)=>{
    return res.json();
}).then((json) => {
    console.log('json',json);
}) */
/* let calcular = (num1,num2) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let suma = num1 + num2;
            if(suma > 5){
                resolve(num1+num2);
            }else{
                reject('Error los datos')
            }
        },2000);
    })
}
*/
