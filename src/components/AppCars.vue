<template>
  <div>
      <table class="table">
      <thead>
      <th>Brand</th>
      <th>Model</th>
      <th>Year</th>
      <th>Max Speed</th>
      <th>Transmission</th>
      <th>Engine</th>
      <th>Number of doors</th>
      </thead>
      <tbody>
        <tr v-for= "(car,key) in cars" :key="key">
        <td> {{car.brand}} </td>
        <td> {{car.model}} </td>
        <td> {{car.year }} </td>
        <td> {{car.maxSpeed}} </td>
        <td> {{car.isAutomatic ? 'Automatic' : 'Manual'}} </td>
        <td> {{car.engine}} </td>
        <td> {{car.numberOfDoors}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {carService} from '../service/CarService'
export default {
  data(){
    return{
      cars: []
    }
  },
  created() {
    carService.getAll()
    .then((response) => {
      this.cars = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>