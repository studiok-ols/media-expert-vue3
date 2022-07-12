
<script setup>
const lineAreaChartSplineCount = 5000;

function generateDataForLineAreaChartSpline(count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push(x);
    i++;
  }
  return series
}

function generateDataForXAxisLineAreaChartSpline(count) {
  let i = 0
  const series = []
  while (i < count) {
    series.push(i);
    i++;
  }
  return series
}

let seriesArea = [{
  name: "STOCK ABC",
  data: generateDataForLineAreaChartSpline(lineAreaChartSplineCount, {min: 370, max: 379})
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
    curve: 'smooth',
    width: 0,
  },

  title: {
    //text: 'Fundamental Analysis of Stocks',
    align: 'left'
  },
  subtitle: {
    //text: 'Price Movements',
    align: 'left'
  },
  labels:  generateDataForXAxisLineAreaChartSpline(lineAreaChartSplineCount),
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
<div class="stk-bar-chart-wrapper pt-5" >
  <apexchart class="mt-5" width="100%" type="area" :options="optionsArea" :series="seriesArea"></apexchart>
</div>
</template>

<script>


export default {
  name: "BigChart"
}
</script>

<style scoped>
.stk-bar-chart-wrapper { max-width: 1000px; margin-left: auto; margin-right: auto; }
</style>
