<template>
	<div class="md-layout">
	<!-- item one -->
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
    >
      <stats-card data-background-color="green">
        <template slot="header">
          <md-icon>event</md-icon>
        </template>
        <template slot="content">
          <p class="category">Fecha</p>
          <h5 class="subtitle">{{ date }}</h5>
        </template>
      </stats-card>
    </div>
    <!-- item two -->
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
    >
      <stats-card data-background-color="orange">
        <template slot="header">
          <md-icon>alarm</md-icon>
        </template>
        <template slot="content">
          <p class="category">Hora</p>
          <h5 class="subtitle">
            <digital-clock :blink="true" />
          </h5>
        </template>
      </stats-card>

    </div>
    <!-- item three -->
    <div
      class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
    >
      <stats-card data-background-color="blue">
        <template slot="header">
          <md-icon>explore</md-icon>
        </template>
        <template slot="content">
          <p class="category">Semana </p>
          <h5 class="subtitle">{{ weekend }}</h5>
        </template>
      </stats-card>

    </div>
      <!-- item four -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>donut_small</md-icon>
          </template>
          <template slot="content">
            <p class="category">Periodo</p>
            <h5 class="subtitle">{{ period }}</h5>
          </template>
        </stats-card>
      </div>
  </div>
</template>
<script type="text/javascript">
	import { StatsCard } from "@/components"
	import DigitalClock from "vue-digital-clock";
	export default {
		name: "nav-tool",
		components: {
			StatsCard,
			DigitalClock
		},
		data(){
			return{
				date: null,
				hour: null,
				weekend: null,
				period: null
			}
		},
		mounted(){

    		var $this = this;

    		$this.date = $this.formatDate(new Date()); 

    		Date.prototype.getWeekNumber = function(){
  				var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  				var dayNum = d.getUTCDay() || 7;
  				d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  				var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  				return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
			};

			$this.weekend = new Date().getWeekNumber()
			;
    
  		},
		methods:{
			formatDate(date) {
      	var monthNames = [
        	"January", "February", "March",
        	"April", "May", "June", "July",
        	"August", "September", "October",
        	"November", "December"
      	];

      	var day = date.getDate();
      	var monthIndex = date.getMonth();
      	var year = date.getFullYear();

      	return day + ' ' + monthNames[monthIndex] + ' ' + year;
    	}
		}
	};
</script>
