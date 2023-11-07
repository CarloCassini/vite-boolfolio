import { createRouter, createWebHistory } from "vue-router";

// import delle views delle pagine gestite dal router
import AppHome from "../pages/AppHome.vue";
import Altro from "../pages/Altro.vue";

// creo la costante router sove inserirò tutte le "rotte" in un oggetto che avrà
// i seguenti parametri : history e routes
const router = createRouter({
  // history verrà valorizzata col metodo createWebHistory di cui a riga 1
  history: createWebHistory(),
  // routes verrà valorizzata con un array di oggetti come segue
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/altro",
      name: "altro",
      component: Altro,
    },
  ],
});

// alla fine di questa call verranno esportati i valori di router
export { router };
