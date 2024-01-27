// import { createRouter } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
// import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import ContactForm from "@/components/ContactForm.vue";
// import App from "../App.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "App",
  //   component: App,
  // },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/contact",
    name: "ContactForm",
    component: ContactForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
