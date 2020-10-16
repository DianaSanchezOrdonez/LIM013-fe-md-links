#!/usr/bin/env node

import process from 'process';
eesimport { mdLinks, mdLinksValidate, mdLinksStats} from './index.js';

const messageStart = () => {
    const commands = [{option:'', structure: 'md-links <path-to-file>', example: './some/example.md', outpout:'[{ href, text, file }]'},
                  {option:'--validate', structure: 'md-links <path-to-file> [options]', example: './some/example.md --validate', outpout:'[{ href, text, file, status, message }]'},
                  {option:'--stats', structure: 'md-links <path-to-file> [options]', example: './some/example.md --stats', outpout:'[{ total, unique }]'},
                  {option:'--stats --validate', structure: 'md-links <path-to-file> [options]', example: './some/example.md --stats --validate', outpout:'[{ total, unique, broken }]'},
                  {option:'--help', structure: '', example: 'md-links <path-to-file> [options]', outpout:'Volver a mostrar las opciones'}]
    
    console.table(
        commands.map(command => {
            return{
            'Opciones' : command.option,
            'Ejemplo' : command.example,
            'Outpout' : command.outpout
            }
        })
    );
}
/*-------Grab provided args-------*/
const args = process.argv[2];
let opt = process.argv[3];
let opt2 = `${process.argv[3]} ${process.argv[4]}`
//console.log('opt2', opt2);
if (opt === undefined) {
    mdLinks(args).then(result => {
        result.map(element => {
            console.log(` File => ${element.file} Url => ${element.href} Texto => ${element.text}`);
        }) 
    });
}
else if (opt === '--validate') {
    mdLinksValidate(args)
}
else if (opt === '--stats') {
    console.log('opt',opt);
    mdLinksStats(args);
}
else if (opt2 === '--stats --validate') {
    console.log('opt',opt);
    mdLinksStats(args);
}
else if (opt === '--help'){
    messageStart();
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
