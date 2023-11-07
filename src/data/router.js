import { createRouter, createWebHistory } from "vue-router";

// import delle views delle pagine gestite dal router

// creo la costante router sove inserirò tutte le "rotte"
const router = createRouter({
    history: createWebHistory();

})

// alla fine di questa call verranno esportati i valori di router
export {router};