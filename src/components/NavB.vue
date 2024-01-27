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
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul {
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
}
li {
  display: flex;
}
</style>
