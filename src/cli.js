#!/usr/bin/env node
import process from 'process';
import { mdLinks } from './index.js'

/*-------Grab provided args-------*/
const args = process.argv[2];
let opt = process.argv[3]
//console.log('a ver',args);
//console.log('pego',opt);
//let opt = '--validate';
//mdLinks(args,opt);

if (opt === undefined || opt === '--validate'){
    console.log('opt',opt);
    mdLinks(args, {validate:true})
    console.log('mdLinks',mdLinks(args, {validate:true}));
}else {
    console.log('opt',opt);
    console.log('help');
}

/* const stats = () => {

} */