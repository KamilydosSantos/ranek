import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyProduct from "../views/MyProduct.vue";
import MyLogin from "../views/MyLogin.vue";
import MyUser from "../views/user/MyUser.vue";
import UserProducts from "../views/user/UserProducts.vue";
import UserPurchases from "../views/user/UserPurchases.vue";
import UserSales from "../views/user/UserSales.vue";
import EditUser from "../views/user/EditUser.vue";

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
      component: MyUser,
      children: [
        {
          path: "",
          name: "user",
          component: UserProducts
        },
        {
          path: "purchases",
          name: "purchases",
          component: UserPurchases
        },
        {
          path: "sales",
          name: "sales",
          component: UserSales
        },
        {
          path: "edit",
          name: "edit",
          component: EditUser
        }
      ]
    },
  ],
  scrollBehavior() {
    return window.scrollTo({top: 0, behavior: "smooth"});
  }
});
