<script setup>

let options = {
  chart: {
    id: 'vuechart-example'
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  }
}

let series = [{
  name: 'series-1',
  data: [10, 40, 45, 50, 49, 60, 70, 90]
}]

</script>


<template>
  <div class="stk-bar-chart-wrapper pt-5">
    <slot></slot>
    <apexchart class="mt-5" width="100%" type="bar" :options="options" :series="series"></apexchart>
  </div>

</template>



<style scoped>

.stk-bar-chart-wrapper { max-width: 1000px; margin-left: auto; margin-right: auto; }

</style>
