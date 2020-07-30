import Axios from 'axios';

const baseURL = 'https://anywherefitness-backend.herokuapp.com';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return Axios.create({
        baseURL,
        headers: {
            Authorization: token
        }
    });
};

export const axios = Axios.create({ baseURL });