// questa parte si trova al minuto 1:06 della lezione 51

import { reactive } from "vue";

// qui dentro mettimao tutti i data globali
export const store = reactive({
  apiUri: "http://localhost:8000/",
});
