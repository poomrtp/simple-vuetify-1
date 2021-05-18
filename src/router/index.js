import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/components/HomeComponent";
import ContactComponent from "@/components/ContactComponent";
import AboutComponent from "@/components/AboutComponent";
import ProductListComponent from "@/components/ProductListComponent";

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
    {
      path: "/about",
      name: "About",
      component: AboutComponent,
    },
    {
      path: "/product",
      name: "Product",
      component: ProductListComponent,
    },
  ],
});
