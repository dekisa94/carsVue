import axios from 'axios'
export default class CarService
{
    constructor(){
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
getAll()
    {
        return axios.get('cars')
    }
add(Car)
{
    return axios.post('cars', Car)
}
}
export const carService = new CarService()