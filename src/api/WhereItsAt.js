import axios from "axios";

export default axios.create({
    baseURL : 'https://whereitsat.zocom.workers.dev',
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers' : 'Authorization',
        'mode' : 'cors'
    }
})