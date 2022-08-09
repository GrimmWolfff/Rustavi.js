import { createServer } from 'http';
import fetch from 'node-fetch';
export default class Rustavi {
    async get(url, headers) {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        return response;
    }
}

const server = createServer(( req, res ) => {
    if(req.url == '/' && req.method == 'GET') {
        console.log('done boy');
    }
})
server.listen(8000, () => 'Server Started');

const rustavi = new Rustavi();
rustavi.get('http://localhost:8000', { 'Content-Type':'application/json' });