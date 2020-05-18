// requiereds



const argv = require('./config/yargs').argv;
const colors = require('colors');
const { listarTabla, imprimir } = require('./Multi/multiplicar');

// para importar, el segundo es una destructuración que permite asignar multiles a multiples.


let comando = argv._[0]; //argv tiene muchos elementos que dependen del input, los comandos se ordenan en listas.

switch (comando) { //es como un if pero evalua multiples casos de manera más entendible

    case "listar":
        console.log("Listar");
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        console.log("Crear");
        imprimir(argv.base, argv.limite);
        break;

    default:
        console.log("Comando no reconcido");




}


// const fs = require('fs'); //propia de node
// const fs = require('express'); //no viene propia de node, paquete que se instala, codigos externos
// const fs = require('./fs'); //viene de nuestro propio directorio/file/pc


//let base = "4"; // inicialmente, luego se usa el input

let argv2 = process.argv;
//let base = argv[2].split("=")[1];




//;

console.log("base", argv.base);
console.log("limite", argv.limite);
console.log(argv);



//console.log(process);
//duda -> el then y el catch son antiguados, uso del try y catch como alteranativa