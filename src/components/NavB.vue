<template>
  <div class="NavB">
    <div class="logo">
      <img src="../assets/images/NavBar Logo.png" alt="logo" />
    </div>
    <div class="nav-list">
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Packages</li>
      </ul>
    </div>

    <div class="nav-btns">
      <button>Sign In</button>
      <button>Free Trial</button>
    </div>
    <div class="lang-icon">
      <i class="fa fa-lang"></i>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.NavB {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  /* padding: 16px; */
  /* padding: 16px 105px; */
  background-color: aqua;
  font-size: 16px;
}
ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  gap: 39px;
}
li {
  display: flex;
}
.logo {
  padding-left: 105px;
}
.nav-btns {
  display: flex;
  gap: 23px;
}
.nav-btns button {
  background-color: white;
  padding: 12px 22px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #3b2e8c;
  color: #3b2e8c;
}
.nav-btns button:nth-child(2) {
  background-color: #3b2e8c;
  color: white;
  /* color: #ededed; */
}
</style>
