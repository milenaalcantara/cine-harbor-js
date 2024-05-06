import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import setComponent from "./modules/components.module";
import setPrimeComponent from "./modules/prime.module";

import "@/assets/tailwind.css";
import "primevue/resources/primevue.min.css";


const app = createApp(App);
setPrimeComponent(app);
setComponent(app);

app.use(router);

app.mount("#app");
