import axios from 'axios';
const REST_API_BASE_URL = 'http://localhost/api/loan/loans';
export const listLoans = () =>{
    return axios.get(REST_API_BASE_URL);
}