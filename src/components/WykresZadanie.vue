<template>
<div class="stk-nav">
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">Wykres1</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about">Wykres2</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/wykres3">Dużo danych</router-link>
          </li>

          <!--
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Przykłady wykresów
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          -->

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>


  <button type="button" class="btn btn-primary m-2" @click="stkClick">Przycisk</button>
  <button type="button" class="btn btn-secondary m-2" @click="stkTest2">Przycisk 2</button>

</div>
</template>

<script>
export default {
  name: "WykresZadanie",
  setup(){
    function stkClick(){
      alert('d');
    }
    function stkTest2(){
      alert('test');
    }
    return { stkClick, stkTest2 }
  }
}
</script>

<style scoped>

</style>
