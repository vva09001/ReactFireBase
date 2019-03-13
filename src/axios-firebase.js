import axios from 'axios';

const instance = axios.create( {
    baseURL : 'https://fir-project-96a03.firebaseio.com/',
    }
)

export default instance;