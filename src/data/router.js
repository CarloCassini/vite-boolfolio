import { createRouter, createWebHistory } from "vue-router";

// import delle views delle pagine gestite dal router
import Homepage from "../pages/Homepage.vue";
import Altro from "../pages/Altro.vue";
import Portfolio from "../pages/Portfolio.vue";
import PortfolioByType from "../pages/PortfolioByType.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import NotFound from "../pages/NotFound.vue";

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
      component: Homepage,
    },
    {
      path: "/altro",
      name: "altro",
      component: Altro,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    // per la visualizzazione in base altipo
    {
      path: "/portfolio/type/:type_id",
      name: "portfolio-by-type",
      component: PortfolioByType,
    },
    {
      path: "/project-detail/:slug",
      name: "project-detail",
      component: ProjectDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

// alla fine di questa call verranno esportati i valori di router
export { router };
