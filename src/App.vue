<template>
  <div class="appClassGeneral">
    <NavB />
    <HeroHeader />
    <AfterHeroSec />
    <FeaturesSec />
    <!-- <SignUp /> -->
  </div>
</template>

<script>
import NavB from "./components/NavB.vue";
import HeroHeader from "./components/HeroHeader.vue";
import AfterHeroSec from "./components/AfterHeroSec.vue";
import FeaturesSec from "./components/FeaturesSec.vue";
// import SignUp from "./components/SignUp.vue";
export default {
  name: "App",
  components: {
    NavB,
    HeroHeader,
    AfterHeroSec,
    FeaturesSec,
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

:root {
  --praimaryPlueDarkColor: #3b2e8c;
  --PlueLightColor: #6c56bd4a;
  --color1Plue: #5e41ca66;
  --VerylightPlueColor: #08041f8a;
  --secondaryDarkPlueColor: #08041f;
  --color3MedPlue: #150043;

  --lightPupleColor: #ccc5e3;
  --darkPupleColor: #b88fc6;
  --clearPurpleColor: #b773ff;

  --darkRedColor: #db665a;
  --lightRedColor: #db665a4a;

  --color2Gray: #d9d9d900;
  --lightGrayColor: #ededed;
  --MedGrayColor: #eaeaeabf;
  --darkGrayColor: #b3b3b3;
  --veryDarkGrayText1: #454545eb;
  --colorMedGrayText: #5b5b5bc9;
  --veryveryDarkGrayText2: #303030;
}

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
