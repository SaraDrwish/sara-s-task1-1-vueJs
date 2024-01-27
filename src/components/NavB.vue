<template>
  <div class="NavB">
    <div class="logo">
      <img src="../assets/images/NavBar Logo.png" alt="logo" />
    </div>
    <div class="nav-list">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/features"><li>Features</li></router-link>
        <router-link to="/packages"><li>Packages</li></router-link>
      </ul>
      <router-view />
    </div>

    <div class="nav-btns">
      <button><a href="signIn">Sign In</a></button>
      <button><a href="freetrial">Free Trial</a></button>

      <!-- svg start  -->
      <div class="lang-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="vuesax/linear/global">
            <g id="global">
              <path
                id="Vector"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#3B2E8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                stroke="#3B2E8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M15 3C16.95 8.84 16.95 15.16 15 21"
                stroke="#3B2E8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                stroke="#3B2E8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_5"
                d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"
                stroke="#3B2E8C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <!-- svg end  -->
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
  padding: 19px 105px;
  /* padding: 16px 105px; */
  /* background-color: rgb(147, 147, 147); */
  font-size: 16px;
}
ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 39px;
}
li {
  display: flex;
  transition: all 0.4s ease;
  color: #3a3a3a;
}
li:hover {
  color: #3b2e8c;
}
.logo {
  /* padding-left: 105px; */
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
  cursor: pointer;
  transition: all 0.4s ease;
}
.nav-btns button:nth-child(2) {
  background-color: #3b2e8c;
  color: white;
  /* color: #ededed; */
}

.nav-btns button:hover {
  background-color: #ededed;
  border: 1px solid #674fc2;
  color: #674fc2;
}
.lang-icon {
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: center;
  padding-left: 18px;
}
</style>
