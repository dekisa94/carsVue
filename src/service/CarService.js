import axios from 'axios'
export default class CarService
{
getAll()
    {
        return axios.get('http://localhost:3000/api/cars')
    }
}
export const carService = new CarService()