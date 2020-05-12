const fs =  require('fs');
class prueba {
    ejemploLectura(){
        fs.readFile('','utf-8',(err, data)=>{
            console.log(data);
        })
    }
}
const objeto = new prueba();
objeto.ejemploLectura();