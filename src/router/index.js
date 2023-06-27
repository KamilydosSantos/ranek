import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyProduct from "../views/MyProduct.vue";
import MyLogin from "../views/MyLogin.vue";
import MyUser from "../views/user/MyUser.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
    path: "/",
    name: "home",
    component: HomeView
    },
    {
      path: "/product/:id",
      name: "product",
      component: MyProduct,
      props: true
    },
    {
      path: "/login",
      name: "login",
      component: MyLogin
    },
    {
      path: "/user",
      name: "user",
      component: MyUser
    },
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"});
  }
});
