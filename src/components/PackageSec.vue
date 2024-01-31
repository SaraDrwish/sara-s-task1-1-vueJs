<template>
  <div class="Package">
    <div class="container py-[2rem] mb-[120px]">
      <div
        class="flex flex-col md:gap-[75px] w-full h-full justify-start gap-8 p-1"
      >
        <h2 class="md:text-[32px] text-[22px] font-[700] w-[90%] md:w-[40%]">
          Choose the appropriate package, and enjoy your Free Trial !
        </h2>

        <div
          class="flex md:flex-row flex-col justify-start items-start w-[100%] h-[100%] md:h-[445px] md:gap-[69px] gap-10"
        >
          <div
            class="flex flex-col gap-[4px] flex-1 md:w-[50%] w-[100%] h-full bg-[#3B2E8C] w-full px-[49px] py-[45px] rounded-[33px]"
          >
            <div class="pb-[20px]">
              <h2 class="text-[24px] text-white">Basic</h2>
              <p class="text-[#ffffffc9] text-[16px] pt-[24px]">
                We provide you & your team a comprehensive dashboard that help
                you manage and track your clients
              </p>
              <div class="flex gap-[10px] items-center mt-[13px]  mb-[34px]">
                <p class="text-[46px] text-white">25 {{ counter }}</p>  
                <div class="text-[16px] text-[#ffffffb8]">
                  <span class=" "> SAR </span>
                  <span class=" "> / Monthly </span>
                </div>
              </div>
              <div class="flex gap-[18px] text-white pb-[25px] md:flex-row flex-col  justify-center items-center overflow-hidden">
                <div
                  class="flex justify-center items-center md:w-[55%] w-[100%] gap-[40px]   overflow-hidden p-[8px] border rounded-[6px]"
                >
                  <span     @click="incrementCounter"   

                    class="border-r-2 pr-4 h-[150%] flex justify-center items-center  overflow-hidden"
                  >
                    <svg 
                      class="cursor-pointer w-[24px] h-[24px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H18"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 18V6"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span class=" ">One User</span>
                  <span  @click="decrementCounter"
                    class="border-l-2 pl-4 h-[150%] overflow-hidden flex justify-center items-center"
                  >
                    <svg
                      class="cursor-pointer w-[24px] h-[24px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H18"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div class="md:w-[40%] w-[100%] justify-center   
                     items-center md:flex-row flex-col">
                  <div
                    class="flex gap-[37px] border justify-center   
                     items-center rounded-[6px] p-[8px]"
                  >
                    <span>One Month</span>
                    <span>
                      <svg
                        class="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.95001"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <button
                class="flex w-[100%] m-auto text-[16px] font-bold items-center p-[8px] justify-center rounded-[6px] bg-white text-[#3B2E8C]"
              >
                Join Now
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-[4px] flex-1 md:w-[50%] w-[100%] h-full text-[#303030] rounded-[33px] px-[49px] py-[45px] bg-[#EDEDED]"
          >
            <div class="">
              <h2 class="text-[22px] mb-[41px] font-[700]">Package Features</h2>
            </div>
            <ul
              class="flex flex-col p-1 justify-between items-center w-[100%] gap-[21px] text-[18px]"
            >
              <li class="flex gap-[25%] justify-between items-center w-[100%]">
                <div class="w-[100%]">Contact & Manage companies</div>
                <div class=" ">
                  <svg
                    class="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:anim="http://www.w3.org/2000/anim"
                    anim=""
                    anim:transform-origin="50% 50%"
                    anim:duration="1"
                    anim:ease="ease-in-out"
                  >
                    <g id="vuesax/linear/tick-circle">
                      <g id="vuesax/linear/tick-circle_2">
                        <g id="tick-circle">
                          <path
                            id="Vector"
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#674FC2"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M7.75 12L10.58 14.83L16.25 9.17001"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>
              <li class="flex gap-[25%] justify-between items-center w-[100%]">
                <div class="">Manage Sales Pipeline</div>
                <div class="">
                  <svg
                    class="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:anim="http://www.w3.org/2000/anim"
                    anim=""
                    anim:transform-origin="50% 50%"
                    anim:duration="1"
                    anim:ease="ease-in-out"
                  >
                    <g id="vuesax/linear/tick-circle">
                      <g id="vuesax/linear/tick-circle_2">
                        <g id="tick-circle">
                          <path
                            id="Vector"
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#674FC2"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M7.75 12L10.58 14.83L16.25 9.17001"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>

              <li class="flex gap-[25%] justify-between items-center w-[100%]">
                <div class="">Manage Tasks</div>
                <div class="">
                  <svg
                    class="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:anim="http://www.w3.org/2000/anim"
                    anim=""
                    anim:transform-origin="50% 50%"
                    anim:duration="1"
                    anim:ease="ease-in-out"
                  >
                    <g id="vuesax/linear/tick-circle">
                      <g id="vuesax/linear/tick-circle_2">
                        <g id="tick-circle">
                          <path
                            id="Vector"
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#674FC2"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M7.75 12L10.58 14.83L16.25 9.17001"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>

              <li class="flex gap-[25%] justify-between items-center w-[100%]">
                <div class="">Track Sales Activities</div>
                <div class="">
                  <svg
                    class="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:anim="http://www.w3.org/2000/anim"
                    anim=""
                    anim:transform-origin="50% 50%"
                    anim:duration="1"
                    anim:ease="ease-in-out"
                  >
                    <g id="vuesax/linear/tick-circle">
                      <g id="vuesax/linear/tick-circle_2">
                        <g id="tick-circle">
                          <path
                            id="Vector"
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#674FC2"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M7.75 12L10.58 14.83L16.25 9.17001"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>

              <li class="flex gap-[25%] justify-between items-center w-[100%]">
                <div class="">Manage Projects</div>
                <div class="">
                  <svg
                    class="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:anim="http://www.w3.org/2000/anim"
                    anim=""
                    anim:transform-origin="50% 50%"
                    anim:duration="1"
                    anim:ease="ease-in-out"
                  >
                    <g id="vuesax/linear/tick-circle">
                      <g id="vuesax/linear/tick-circle_2">
                        <g id="tick-circle">
                          <path
                            id="Vector"
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#674FC2"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M7.75 12L10.58 14.83L16.25 9.17001"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>

              <li class="flex gap-[25%] justify-between items-center w-[100%]">
                <div class="">Analyze & Manage Reports</div>
                <div class="">
                  <svg
                    class="w-[24px] h-[24px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:anim="http://www.w3.org/2000/anim"
                    anim=""
                    anim:transform-origin="50% 50%"
                    anim:duration="1"
                    anim:ease="ease-in-out"
                  >
                    <g id="vuesax/linear/tick-circle">
                      <g id="vuesax/linear/tick-circle_2">
                        <g id="tick-circle">
                          <path
                            id="Vector"
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            fill="#674FC2"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M7.75 12L10.58 14.83L16.25 9.17001"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const counter = ref(25);

const incrementCounter = () => {
  if (counter.value < 100) {
    counter.value += 5;
  }
};

const decrementCounter = () => {
  if (counter.value > 0) {
    counter.value -= 5;
  }
};
</script>

<style scoped>
span {
  /* color: #ffffffb8; */
}
button {
  transition: all 0.4s ease;
}
button:hover {
  background-color: #ededed;
  color: var(--praimaryPlueDarkColor);
  box-shadow: #3b2e8c50 0px 9px 15px, #3b2e8c50 0px -9px 15px;
}
</style>
