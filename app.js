const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listar } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo Creado:', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');

}

//console.log(argv);

// let param = argv[2];
// let base = param.split('=')[1];