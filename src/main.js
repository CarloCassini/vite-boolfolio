import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";

// importo il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importo le regole javascript di bootstap
import * as bootstrap from "bootstrap";

createApp(App).mount("#app");
