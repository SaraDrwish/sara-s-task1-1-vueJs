// import { createRouter } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import ContactForm from "@/components/ContactForm.vue";
// import HeroHeader from "@/components/HeroHeader.vue";
// import App from "../App.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "HeroHeader",
  //   component: HeroHeader,
  // },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
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
