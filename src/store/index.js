import {createStore} from 'vuex';

const store =  createStore({
  state: {
    routeParams: null,
    
  },
  mutations: {
    setObjectResult(state, routeParams) {
      state.routeParams = routeParams;
    },
    clearObjectResult(state) {
      state.routeParams = null;
    },
  },
  actions: {
  },
  getters: {
  },
});

export default store
