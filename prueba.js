const fs = require('fs');
class prueba {
    ejemploLectura() {
        console.log('iniciando la lectura')
        const ruta_archivo = 'archivo.txt';
        fs.readFile(ruta_archivo,(err, data) => {
            if (err) {
                console.log(err)
            }
            console.log(data);
        })
        console.log('finalizando la lectura')
    }

    ejemploLecturaSync() {
        console.log('iniciando la lectura sincrona')
        const ruta_archivo = 'archivo.txt'
        const archivo = fs.readFileSync(ruta_archivo)
        console.log(archivo)
        console.log('finalizando la lectura sincrona')
    }
}
const objeto = new prueba();
objeto.ejemploLecturaSync();