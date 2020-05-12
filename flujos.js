const fs = require('fs');
class flujos {

    ejemploBuffer() {
        //Buffer vacio
        const b1 = Buffer.alloc(20)
        console.log(b1);
        const b2 = Buffer.from("@ Mi nombre es jesus");
        console.log(b2.toString().length)
        console.log(b2)
        const b3 = Buffer.from('archivo.txt');
        console.log(b3.toString())
    }

    ejemploStream() {
        const ruta_archivo = './archivo.txt';
        const stream_entrada = fs.createReadStream(ruta_archivo);
        stream_entrada.on('data', (chunk) => {
            console.log(chunk.toString())
        })

        const stream_salida = fs.createWriteStream(ruta_archivo);
        stream_salida.on("open", (chuck) => {
            console.log(chuck.toString())
        })
    }

    ejemploStreamRemoto() {
        const api_rest = 'https://datos.gob.bo/api/action/datastore_search?resource_id=b5da4242-1c90-47d9-b98f-bde1f35a0764&limit=5'
        
        const stream_entrada = fs.createReadStream(api_rest);
        stream_entrada.on('data', (chunk) => {
            console.log(chunk.toString())
        })
    }
}

const flujos1 = new flujos();
//flujos1.ejemploBuffer();
flujos1.ejemploStreamRemoto();