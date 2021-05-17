import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/components/HomeComponent";
import ContactComponent from "@/components/ContactComponent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeComponent,
    },
    {
      path: "/contact",
      name: "Conctat",
      component: ContactComponent,
    },
  ],
});
