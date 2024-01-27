<template>
  <NavB />
  <HeroHeader />
  <SignUp />
</template>

<script>
import NavB from "./components/NavB.vue";
import HeroHeader from "./components/HeroHeader.vue";
// import SignUp from "./components/SignUp.vue";
export default {
  name: "App",
  components: {
    NavB,
    HeroHeader,
    // SignUp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: unset;
  display: flex;
  text-decoration: none;
}
</style>
