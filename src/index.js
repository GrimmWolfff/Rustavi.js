import fetch from 'node-fetch';
export default class Rustavi {
    async get(url, headers) {
        const response = await fetch(url, {
            method: 'GET',
            headers
        });
        return response;
    }
    async post(url, headers, body) {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });
        return response;
    }
    async put(url, headers, body) {
        const response = await fetch(url, {
            method: 'PUT',
            headers,
            body: JSON.stringify(body)
        });
        return response;
    }
    async delete(url, headers) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers
        });
        return response;
    }
}