<template>
<div>
<h2>Add new car</h2>
  <form @submit.prevent="addCar">
    <div class="form-group">
        <label for="brand">Brand</label>
        <input v-model="newCar.brand" type="text" id="brand" name="brand" class="form-control" pattern=".{2,}" required title="2 characters minimum"/>
    </div>
    <div class="form-group">
        <label for="model">Model</label>
        <input v-model="newCar.model" type="text" id="model" name="model" class="form-control" pattern=".{2,}" required title="2 characters minimum"/>
    </div>
    <div class="form-group">
        <label for="year">Year</label>
        <select v-model="newCar.year" id="year" name="year" class="form-control" required>
            <option value="1990">1990</option>
            <option value="2018">2018</option>
        </select>
    </div>
    <div class="form-group">
        <label for="maxSpeed">Max speed</label>
        <input v-model="newCar.maxSpeed" type="number" id="maxSpeed" name="maxSpeed" class="form-control" required/>
    </div>
    <div class="form-group">
        <label for="numberOfDoors">Number of doors</label>
        <input v-model="newCar.numberOfDoors" type="number" id="numberOfDoors" name="numberOfDoors" class="form-control" required/>
    </div>
    <div class="form-group">
            <div>
                <label for="automatic">Automatic</label>
                <input v-model="newCar.isAutomatic" type="checkbox" id="automatic" name="isAutomatic" value="true">
            </div>
    </div>
    <div class="form-group">
        <label>Engine type</label><br/>
        <input v-model="newCar.engine" type="radio" name="engine" value="diesel" > Diesel<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="petrol"> Petrol<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="electric"> Electric<br>
        <input v-model="newCar.engine" type="radio" name="engine" value="hybrid"> Hybrid
    </div>
    <input class="btn btn-primary" type="submit" />
    <input type="reset" class="btn btn-danger" />
    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal">Preview</button>

    <!-- Modal start -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">       
            <h4 class="modal-title">Current car preview</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                
            <h5>{{this.newCar.brand}} {{this.newCar.model}}</h5>    
            <ul>
                <li>Year: {{this.newCar.year}}</li>
                <li>Max speed: {{this.newCar.maxSpeed}}</li>
                <li>Number of doors: {{this.newCar.numberOfDoors}}</li>
                <li>Transmission {{this.isAutomatic ? 'Automatic' : 'Manual'}}</li>
                <li>Engine: {{this.newCar.engine}}</li>
            </ul>

            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
        
        </div>
    </div>
    <!-- Modal end -->
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
