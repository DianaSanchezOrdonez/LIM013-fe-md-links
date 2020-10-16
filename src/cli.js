#!/usr/bin/env node

import process from 'process';
import {
    mdLinks
} from './index.js';
/* import fetch from 'node-fetch';
import {
    resolve
} from 'path';
import {
    rejects
} from 'assert'; */

/*-------Grab provided args-------*/
const args = process.argv[2];
let opt = process.argv[3];
console.log('args', args);
console.log('opt',opt);
/* let comandos = { validate: false, stats:false}; */

//console.log('a ver',args);
//console.log('pego',opt);
//let opt = '--validate';
//mdLinks(args,opt);

if (opt === undefined) {
    //console.log('opt',opt);
    mdLinks(args, {validate: undefined})
    //console.log('mdLinks',mdLinks(args, {validate:true}));
}else if (process.argv[3] === '--validate') {
    //console.log('opt',opt);
    mdLinks(args, {validate: true})
    //console.log('mdLinks',mdLinks(args, {validate:true}));
}else if (process.argv[3] === '--stats') {
    //console.log('opt',opt);
    mdLinks(args, {validate: false})
    
    //console.log('mdLinks',mdLinks(args, {validate:true}));
}else{
    console.log('help');
}

/* fetch('https://es.wikipedia.org/wiki/Markdown')
    .then(response => response.status)
    .then(data => console.log('estado',data)); */

/* fetch('https://es.wikipedia.org/wiki/Markdown').then((res)=>{
    console.log('url',res.url);
    console.log('status',res.status);
    console.log('text',res.statusText);
})

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

calcular(2,3).then((resultado) => {
    console.log(resultado);
},(error) => {
    console.log(error);
}) */

/* let promesa = new Promise((resolve,reject) => {
    //resolve('Sucess!!')
    reject('Error')
})

promesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
}); */

/* const stats = () => {

} */
