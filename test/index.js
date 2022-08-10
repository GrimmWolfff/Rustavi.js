import { createServer } from 'http';
import Rustavi from '../src/index.js';

const server = createServer(( req, res ) => {
    if(req.url == '/' && req.method == 'GET') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hi there, This is a Vanilla Node.js API");
        res.end();
    } else if(req.url == '/' && req.method == 'POST') {
        res.writeHead(201, { "Content-Type": "application/json" });
        res.write(`new post ${req.body}`);
        res.end();
    } else if(req.url == '/:id' && req.method == 'DELETE') {
        res.writeHead(202, { "Content-Type": "application/json" });
        res.write(`deleted post ${req.params.id}`);
        res.end();
    } else if(req.url == '/:id' && req.method == 'PUT') {
        res.writeHead(203, { "Content-Type": "application/json" });
        res.write(`updated post ${req.params.id} with ${req.body}`);
        res.end();
    }
})
server.listen(8000, () => console.log('Server Started'));

const rustavi = new Rustavi();
rustavi.get('http://localhost:8000', { 'Content-Type':'application/json' });
rustavi.post('http://localhost:8000', { 'Content-Type':'application/json' }, { car: 'Porsche' });
rustavi.put('http://localhost:8000/car', { 'Content-Type':'application/json' }, { car: 'BMW' });
rustavi.delete('http://localhost:8000/car', { 'Content-Type':'application/json' });