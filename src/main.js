// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// createApp(App).use(router).mount("#app");
// //////////////////////////////////////////the right below.................
// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import "./assets/css/style.css";

// createApp(App).use(router).mount("#app");

// /////////////////////////////////

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

// ////////////////////////////////

// import { createRouter, createWebHistory } from "vue-router";
// // import App from "./App.vue";
// // import HeroHeader from "./components/HeroHeader.vue";
// import SignIn from "./components/SignIn.vue";

// const routes = [
//   { path: "/", component: App },
//   // { path: "/", component: HeroHeader },
//   { path: "/signin", component: SignIn },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// const app = createApp(App);

// app.use(router);
// app.mount("#app");
