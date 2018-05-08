<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">CarsApp</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'cars'}">Cars</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'add'}">Add car</router-link>
      </li>
    </ul>
</nav>
</template>

<script>
export default {
  
}
</script>
