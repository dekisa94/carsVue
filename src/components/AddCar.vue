<template>
<div>
<h2>Add new car</h2>
  <form @submit.prevent="addCar">
    <div class="form-group">
        <label for="brand">Brand</label>
        <input v-model="newCar.brand" type="text" id="brand" name="brand" />
    </div>
    <div class="form-group">
        <label for="model">Model</label>
        <input v-model="newCar.model" type="text" id="model" name="model" />
    </div>
    <div class="form-group">
        <label for="year">Year</label>
        <select v-model="newCar.year" id="year" name="year">
            <option value="1990">1990</option>
            <option value="2018">2018</option>
        </select>
    </div>
    <div class="form-group">
        <label for="maxSpeed">Max speed</label>
        <input v-model="newCar.maxSpeed" type="number" id="maxSpeed" name="maxSpeed" />
    </div>
    <div class="form-group">
        <label for="numberOfDoors">Number of doors</label>
        <input v-model="newCar.numberOfDoors" type="number" id="numberOfDoors" name="numberOfDoors" />
    </div>
    <div class="form-group">
            <label>Transmission</label>
            <div>
                <input v-model="newCar.isAutomatic" type="checkbox" id="automatic" name="isAutomatic" value="true">
                <label for="automatic">Automatic</label>
            </div>
    </div>
    <div class="form-group">
        <label>Engine type</label><br/>
        <input v-model="newCar.engine" type="radio" name="engine" value="diesel"> Diesel<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="petrol"> Petrol<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="electric"> Electric<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="hybrid"> Hybrid
    </div>
    <input class="btn btn-primary" type="submit" />
    <input type="reset" class="btn btn-danger" />
  </form>
</div>
</template>

<script>
import {carService} from '../service/CarService'
export default {
    data(){
        return{
            newCar: {brand: '', model: '', year: '', maxSpeed: '', numberOfDoors: '', isAutomatic: '', engine: ''}
        }
    },
  methods:{
      addCar(newCar){
          carService.add(this.newCar)
      }
  }
}
</script>
