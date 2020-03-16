import axios from 'axios';

require('dotenv').config()

const Axios = axios.create({
    baseUrl: "http://localhost:8000/api/v1/",
    timeout: 5000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})


axios.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config;

        if (localStorage.getItem('refresh_token') && error.response.status === 401 && error.response.statusText === "Unauthorized") {
            const refresh_token = localStorage.getItem('refresh_token');

            return axios
                .post('/token/refresh/', { refresh: refresh_token })
                .then((response) => {

                    localStorage.setItem('access_token', response.data.access);
                    localStorage.setItem('refresh_token', response.data.refresh);

                    axios.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                    return axios(originalRequest);
                })
                .catch(err => {
                    console.log(err)
                });
        }
        return Promise.reject({ ...error });
    }
);

export default Axios

