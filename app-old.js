
const http = require('http');

http.createServer((req, res) => {

    const persona = {
        id:1,
        nombre: 'Jose Antonio'
    }

    res.write('Hola Mundo');
    res.end();



    //res.writeHead(200, {'Content-Type': 'application/json'})
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'})

    // res.write('id, nombre\n');
    // res.write('1,  Antonio\n');
    // res.write('2,  Leon\n');
    // res.write('3,  Jennifer\n');
    // res.write('4,  Blanca\n');
    // res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);