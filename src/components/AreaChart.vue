<script setup>



let seriesArea = [{
  name: "STOCK ABC",
  data: [10, 40, 45, 50, 49, 60, 70, 90]
}]

let optionsArea = {
  chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },

  title: {
    //text: 'Fundamental Analysis of Stocks',
    align: 'left'
  },
  subtitle: {
    //text: 'Price Movements',
    align: 'left'
  },
  labels: [1,2,3,4,5,6,7,8],
  xaxis: {
    type: 'numeric',
  },
  yaxis: {
    opposite: false
  },
  legend: {
    horizontalAlign: 'left'
  }
}




</script>

<template>
  <div class="stk-bar-chart-wrapper pt-5">
    <apexchart class="mt-5" width="100%" type="area" :options="optionsArea" :series="seriesArea"></apexchart>
  </div>
</template>

<script>
export default {
  name: "AreaChart"
}
</script>

<style scoped>
.stk-bar-chart-wrapper { max-width: 1000px; margin-left: auto; margin-right: auto; }
</style>

