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
    get(id) {
        return axios.get(`cars/${id}`)
    }
    edit(id, car){
        return axios.put(`cars/${id}`, car)
    }
}
export const carService = new CarService()