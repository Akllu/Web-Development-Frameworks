import axios from 'axios'
const baseUrl = 'http://localhost:3005/users'

const getAll = () => {
    const req = axios.get(baseUrl);
    return req.then(res => res.data);
}

const create = (newObject) => {
    const req = axios.post(baseUrl, newObject);
    return req.then(res => res.data);
}

const update = (id, newObject) => {
    const req = axios.put(`${baseUrl}/${id}`);
    return req.then(res => res.data);
}

const remove = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`);
    return req.then(res => res.data);
}

const methods = { getAll, create, update, remove }

export default methods 