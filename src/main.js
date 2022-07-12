import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import VueApexCharts from "vue3-apexcharts"
import BarChart from './components/BarChart.vue'

createApp(App)
    .use(VueApexCharts)
    .use(router)
    .use(BarChart)
    .mount('#app');


import "bootstrap/dist/js/bootstrap.js"


