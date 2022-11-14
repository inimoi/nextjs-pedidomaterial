import axios from "axios";



const materialApi = axios.create({
    baseURL:'http://127.0.0.1:3000/api'
});



export default materialApi;
