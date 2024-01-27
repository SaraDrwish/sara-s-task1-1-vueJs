<template>
  <div class="appClassGeneral">
    <NavB />
    <HeroHeader />
    <SignUp />
  </div>
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
@import url("https://fonts.cdnfonts.com/css/gotham-9");
/* @font-face {
  font-family: "Gotham";
  src: url("./assets/font/GothamRegular-1GwDg.ttf") format("ttf"),
    url("./assets/font/GothamRegular-1GwDg.ttf") format("woff");
  font-weight: normal;
  font-style: normal;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Gotham;
}
a {
  color: unset;
  display: flex;
  text-decoration: none;
}
.appClassGeneral {
  height: 4473px;
  opacity: 0.94;
  background: linear-gradient(
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    url(./assets/images/NoiseTexture.png),
    lightgray 0% 0% / 60.90909242630005px 60.90909242630005px repeat;
  mix-blend-mode: overlay;
}
</style>
