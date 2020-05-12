const fs = require('fs');
class archivos {

    constructor() {
        this.ruta_archivo = 'archivo.txt';
        this.ruta_db = 'db.json';
    }
    ejemploLecturaAsincrona() {
        console.log('iniciando la lectura...');
        fs.readFile(this.ruta_archivo, 'utf-8', (err, datos) => {
            if (err)
                console.log(err);
            else
                console.log(datos)
        });
        console.log('finalizando la lectura...');
    }
    ejemploLecturaSincrona() {
        console.log('iniciando la lectura...');
        const archivo = fs.readFileSync(this.ruta_archivo);
        console.log(archivo.toString())
        console.log('finalizando la lectura...');
    }
    ejemploLecturaConBuffer() {
        console.log('iniciando la lectura...');
        const archivo = fs.readFileSync(Buffer.from(this.ruta_archivo));
        console.log(archivo)
        console.log(archivo.toString())
        console.log('finalizando la lectura...');
    }
    ejemploLecturaSyncJson() {
        const archivo = fs.openSync(this.ruta_db)
        fs.readFileSync(archivo)
        const db = fs.readFileSync(this.ruta_db);
        const db_json = JSON.parse(db)        
        fs.closeSync(archivo)
        return db_json;
        /*
        db_json.estudiantes.map(estudiante =>
            console.log(estudiante)
        )
        console.log(db_json.estudiantes[0].notas[0].nota)
        */
        //console.log(JSON.parse(db))
    }


    ejemploEscrituraSyncJson() {
        const db = this.ejemploLecturaSyncJson();
        const estudiante = {
            nombre: 'mario andres',
            apellidos: 'mariaca'
        }
        //db.total = db.estudiantes.length
        //db.estudiantes.push(estudiante);
        //console.log(JSON.stringify(db))
        const buffer = Buffer.from(JSON.stringify(db));
        console.log(buffer)
        fs.writeFileSync(this.ruta_db, buffer, 'utf-8');
        
    }

    ejemploLetura() {
        const ruta_archivo = 'archivo.txt';
        const archivo = fs.readFileSync(ruta_archivo);
        console.log('lectura realizada')
        console.log(archivo.toString())
        const texto = archivo.toString() + 'Mi nombre es emi  gggg'
        fs.writeFileSync(ruta_archivo, texto);
    }
}

const arch = new archivos();
arch.ejemploLecturaConBuffer()