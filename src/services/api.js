import axios from 'axios';

//rodar com IPV4:  json-server --watch -d 180 --host SEUIP db.json

const api = axios.create({
    baseURL: 'http://10.3.135.86:3000/',
});

export default api;