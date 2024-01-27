<template>
  <div class="HeroHeader">
    <h2>Invest in your clients &</h2>
    <h3>start Your success</h3>
    <p>Easier and More Efficient Customer Relationship Management</p>
    <div class="circl-shdow-bg"></div>
    <div class="btn-icon-box">
      <a href="/freeTrail"
        ><button>
          Free Trail

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M5.3006 5.23206L20.5284 17.8857"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.24478 15.4586L5.3006 5.23206L15.5271 4.28787"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg></button
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.HeroHeader {
  width: 100%;

  /* background-image: url(../assets/images/bgrndDots.png); */
  padding-top: 59px;
  text-align: center;
  font-family: Gotham;
  text-transform: capitalize;
  position: relative;
  /* z-index: 1; */
}
.circl-shdow-bg {
  margin: auto;
  text-align: center;
  position: absolute;
  z-index: -1;
  left: 26%;
  top: 0%;
  width: 661px;
  height: 663px;
  border-radius: 663px;
  background: radial-gradient(
    45.67% 45.67% at 50% 50%,
    rgba(94, 65, 202, 0.4) 0%,
    rgba(217, 217, 217, 0) 100%
  );
  mix-blend-mode: color;
  filter: blur(86px);
  /* backdrop-filter: blur(6.5px); */
}
h2 {
  font-size: 52px;
  color: #08041f;
}
h3 {
  font-size: 52px;
  font-weight: 700;
  line-height: 152.4%; /* 79.248px */
  letter-spacing: -1.56px;

  background: var(
    --Hero-Gradient,
    linear-gradient(273deg, #db645d 25.7%, #b773ff 71.85%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  line-height: 149.4%;
  color: #08041f8a;
  font-size: 20px;
  text-align: center;
  margin: 9px auto;
  width: 20%;
}
.btn-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  margin: 38px auto;
  text-align: center;
  width: 314px;
  height: 62px;
  border-radius: 28px;
  background: #3b2e8c;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
}
a {
  border: none;
  outline: none;
}
svg {
  width: 24px;
  height: 24px;
}
</style>
