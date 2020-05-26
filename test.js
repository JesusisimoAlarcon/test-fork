const fs = require('fs');
class test {


    ejemploStream() {
        const archivo = fs.createReadStream('./archivo.txt');
        console.log(archivo)

        archivo.on('data', (chunk) => {
            console.log(chunk)
            //console.log(chunk.toString())
        });

    }
    ejemploLeerArchivo() {
        const ruta = './archivo.txt';
        const lectura = fs.readFile(ruta);
        console.log(lectura)
    }
}

const objeto = new test();
objeto.ejemploStream();