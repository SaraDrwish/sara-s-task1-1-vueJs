<template>
  <div>
    <SignIn />
    <router-link to="/"> Home</router-link>
  </div>
</template>

<script>
import SignIn from "@/components/SignIn.vue";

export default {
  components: {
    SignIn,
  },
};
</script>
