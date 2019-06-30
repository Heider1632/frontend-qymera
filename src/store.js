import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

/* eslint-disable */
const store =  new Vuex.Store({
	plugins: [createPersistedState()],
	state:{
  	// Current state of the application lies here.
  		user: null
 	},
 	getters:{
  	// Compute derived state based on the current state. More like computed property.
  		getUser: state => {
  			return state.user;
  		}

 	},
	mutations:{
  	// Mutate the current state
  		SET_USER: (state, user) => {
  			state.user = user;
  		}
 	},
 	actions:{
  	// Get data from server and send that to mutations to mutate the current state
	}
});

export default store;