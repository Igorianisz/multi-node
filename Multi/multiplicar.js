//requiereds
const fs = require('fs');
const colors = require('colors');


let data = "";


let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {

        console.log('--------------------------------'.red);
        console.log(`----------Tabla de ${base}------`.blue);
        console.log("--------------------------------".red);
        data = `${base} * ${i} = ${base *  i}`;
        console.log(data.cyan);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor puesto ${base} No es un numero aweonao`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base *  i} \n`;
        }

        fs.writeFile(`Tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err) { reject(err) } else { resolve(`tabla-${base}`) };

        });
    });
};

async function imprimir(num, limite = 10) {
    try {
        let valor = await crearArchivo(num, limite)
        console.log(`Wena ql se creo la tabla del ${num} con ${limite} elementos, llamado:`.rainbow, valor);
    } catch (err) { console.log(err); }
}

module.exports = {
    crearArchivo,
    listarTabla,
    imprimir
}