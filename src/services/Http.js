import ServicesList from './ServicesList'
import axios from 'axios';

export default class Http {
    get = (endpoint) => {
        let path = ServicesList[endpoint]
        return axios.get(path)
    }
}