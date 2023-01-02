import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CurrentIp: [],
  },

  actions: {
    Devicelocation(context, ip) {
      fetch(`http://ip-api.com/json/${ip}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const result = data;
          context.commit("SetIp", result);
        });
    },
  },

  mutations: {
    SetIp(state, result) {
      state.CurrentIp = result;
    },
  },
});
