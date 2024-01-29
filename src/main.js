// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// createApp(App).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Ensure the correct path
import "./assets/css/style.css";

createApp(App).use(router).mount("#app");
