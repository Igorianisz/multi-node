const opts = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'imprime en .txt la tabla de multiplicar hast cierto limite', opts)
    .help()
    .argv;

module.exports = {
    argv
}