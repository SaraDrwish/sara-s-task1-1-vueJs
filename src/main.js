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

// /////////////////////////////////

// /////////////////////////////////

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCLHrhSN9rOeYJj4bv0voRY5RhSFsRYJdI",
//   authDomain: "osolutionstask-df09e.firebaseapp.com",
//   projectId: "osolutionstask-df09e",
//   storageBucket: "osolutionstask-df09e.appspot.com",
//   messagingSenderId: "783365272989",
//   appId: "1:783365272989:web:3d5527bc24adfe046c2b74",
//   measurementId: "G-FQMPS55XP0",
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ////////////////////////////////

// import { createApp } from "vue";
// import App from "./App.vue";
// import router from "./router";
// import VueScrollTo from "vue-scrollto";

// createApp(App).use(router).use(VueScrollTo).mount("#app");

// /////////////////////////////////

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
