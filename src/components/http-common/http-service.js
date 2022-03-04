import httpClient from './http-common';

const register = (data) => {
   return httpClient.post("/api/auth/signup", data);
}

const login = (data) => {
   return httpClient.post("/api/auth/signin", data);
}

const getAll = () =>{
    return httpClient.get('/menu/products')
}

export default {register, login, getAll}