<template>
  <NavB />
  <SignUp />
</template>

<script>
import NavB from "./components/NavB.vue";
import SignUp from "./components/SignUp.vue";
export default {
  name: "App",
  components: {
    NavB,
    SignUp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
