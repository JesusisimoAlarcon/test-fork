const fs = require('fs');
class prueba {
    ejemploLectura() {
        console.log('iniciando la lectura')
        const ruta_archivo = 'archivo.txt';
        fs.readFile(ruta_archivo, (err, data) => {
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
        console.log(archivo.toString())
        console.log('finalizando la lectura sincrona')
    }

    ejemploEscritura() {
        const ruta_archivo = 'archivo.txt'
        fs.writeFileSync(ruta_archivo, 'Jesusisimo');
    }
    ejemploLecturaEscritura() {
        const ruta_archivo = 'db.json';
        const lectura = fs.readFileSync(ruta_archivo, 'utf-8');
        const objeto_lectura = JSON.parse(lectura);
        console.log(lectura)
        console.log(objeto_lectura)
    }

    ejemploLecturaEscritura2() {
        const ruta_archivo = 'dbtest.json';
        const lectura = fs.readFileSync(ruta_archivo);
        const objeto_lectura = JSON.parse(lectura);
        console.log(lectura)
        console.log(objeto_lectura)
        objeto_lectura.estudiante = 'Darling'
        console.log(objeto_lectura)
        const texto = JSON.stringify(objeto_lectura)
        console.log(texto)
        fs.writeFileSync(ruta_archivo, JSON.stringify(objeto_lectura))
        console.log('finalizando')
    }
    ejemploBuffer(){
        const archivo = Buffer.from('archivo.txt');
        console.log(archivo.toString())
    }
    ejemploLectura44(){
        const ruta_archivo = 'dbtest.json';
        const lectura = fs.readFileSync(ruta_archivo);
        console.log(lectura.toJSON().data)
    }
}
const objeto = new prueba();
//objeto.ejemploEscritura();
//objeto.ejemploLecturaSync();
objeto.ejemploLectura44();