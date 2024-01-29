<template>
  <div class="NavB">
    <div class="logo">
      <a href="/"><img src="../assets/images/NavBar Logo.png" alt="logo" /></a>
    </div>
    <div class="nav-list">
      <ul>
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/features"><li>Features</li></router-link>
        <router-link to="/packages"><li>Packages</li></router-link>
      </ul>
      <router-view />
    </div>


      <!-- /////////////////////// -->

    <svg  class="svg-menuBar-icon" viewBox="0 0 100 80" width="40" height="40">
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>

      <!-- /////////////////////// -->

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

      <div class="naviconmeddiabox">
        <svg  class="svg-close-nav" 
          viewPort="0 0 12 12" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
         <line x1="1" y1="11" 
          x2="11" y2="1" 
          stroke="#3b2e8c" 
          stroke-width="2"/>
          <line x1="1" y1="1" 
          x2="11" y2="11" 
          stroke="#3b2e8c" 
          stroke-width="2"/>
        </svg>
      </div>

  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700&display=swap");

.NavB {
  width: 100%;
  font-family: "Cairo", sans-serif;
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 105px;
  /* padding: 16px 105px; */
  background-color: #f3f3f3;
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
  font-family: "Cairo", sans-serif;
}
.nav-btns button {
  font-family: "Cairo";
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

.svg-menuBar-icon{
  fill: #3b2e8c;
  color: #3b2e8c;
  padding: 0.5rem;
  display: none;
  font-size: 4rem;
}

.naviconmeddiabox{
  /* width: 10px;
  height: 10px; */
  background-color: #a695e2;
  color: #0f0a30;
  border-radius: 1rem;
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

/* /////////////////start media //////////////////////// */
@media (max-width: 769px) {
  .NavB {
    /* width: 100%; */
    font-size: 0.8rem;
    overflow: hidden;
    padding: 0.8rem;
    gap: 0.8rem;
  }
.svg-menuBar-icon{
  display: flex;
}
  .nav-btns {
    gap: 0.2rem;
  }

  .NavB .logo a,
  .NavB img {
    width: 6rem;
    font-size: 12px;
  }
  ul {
    gap: 0.5rem;
  }
  .nav-btns button {
    padding: 0.2rem 0.6rem;
    font-size: 0.6rem;
  }
  .lang-icon {
    width: 1.4rem;
    gap: 0.2rem;
    padding-left: 0.4rem;
  }
  

/* ///////////////////////nav in media 1 //////////////////////// */

  .naviconmeddiabox{
    display: flex;
    width: 60%;
    /* width: 25%; */
    height: 25rem;
   }
   .svg-close-nav{
    fill: #3b2e8c;
    color: #3b2e8c;
    padding: 1.8rem ;
   }
   .svg-close-nav:checked .naviconmeddiabox{
    display: none;
   }
  ul {
    width: 25%;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    right: 25%;
    top: 16%;
    z-index: 2;
    font-weight: 600;
    font-size: 14px;
    padding-left: 6%;
    }
    li{
      width: 100%;
    }
 .nav-btns button ,.nav-btns , .lang-icon {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    text-align: center;
    width: 70%;
    gap: 0.6rem;
    font-size: 12px;
    padding: 0.2rem;
  }
  .nav-btns{
    position: absolute;
    right: 25%;
    top: 40%;
    z-index: 2;
    width: 25%;
  }
   
}

/* ////////////////end media ///////////////////// */
</style>
