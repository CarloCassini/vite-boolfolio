import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/style.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// importo il router
import { router } from "../src/data/router";

/* import specific icons */
import { faEye } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faEye);

// importo il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importo le regole javascript di bootstap
import * as bootstrap from "bootstrap";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
