// import { createRouter } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import ContactForm from "@/components/ContactForm.vue";

const routes = [
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

// ///////////////////////////////////////////////////////////////////////

// import { createRouter, createWebHistory } from "vue-router";
// import SignInPage from "../components/SignIn.vue";

// const routes = [
//   {
//     path: "/signin",
//     name: "SignIn",
//     component: SignInPage,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;
