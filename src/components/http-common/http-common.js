import axios from "axios";

export default axios.create({
     baseURL: 'https://restaurantsgovbe.herokuapp.com',
     headers: {
         'Content-Type': 'application/json'
     }
});