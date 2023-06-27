import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services.js";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      name: "",
      email: "",
      password: "",
      zip: "",
      street: "",
      number: "",
      nborhood: "",
      city: "",
      state: ""
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign(state.user, payload);
    }
  },
  actions: {
    getUser(context, payload) {
      api.get(`/user/${payload}`).then(response => {
        context.commit("UPDATE_USER", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    }
  }
});
