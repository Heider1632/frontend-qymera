<template>
<div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-100 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Indicadores</h1>
            <h1 class="subtitle"> {{ teacher.name }} {{ teacher.lastname }} </h1>
          </div>
          <br>
          <nav-tool></nav-tool>

        </div>
      </div>
    </parallax>
</div>
</template>
<script>

	import { NavTool } from "@/components";

	export default {
		name: "indicator",
		components: {
			NavTool
		},
		props: {
    		header: {
      			type: String,
      			default: require("@/assets/img/bg7.jpg")
    		}
    	},
		data(){
			return{
				teacher: {
        			name: "Heider",
        			lastname: "Zapa"
      			}
			}
		},
		computed: {
    		headerStyle() {
      			return {
        			backgroundImage: `url(${this.header})`
      			};
    		}
  		}
	}
</script>