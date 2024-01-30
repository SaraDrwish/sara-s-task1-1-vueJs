<template>
  <div class="Package">
    <div class="container py-[2rem]">
      <div class="flex flex-col md:gap-[75px] gap-8 p-1 bg-pink-500">
        <h2 class="text-[32px] font-[700] w-[90%] md:w-[40%]">
          Choose the appropriate package, and enjoy your Free Trial !
        </h2>

        <div
          class="flex md:flex-row flex-col justify-center items-center bg-orange-500 md:gap-[69px] gap-10"
        >
          <div
            class="flex flex-col gap-[4px] flex-1 bg-[#3B2E8C] w-full px-[49px] py-[45px] rounded-[33px]"
          >
            <div class="p-[20px]">
              <h2 class="text-[24px] text-white">Basic</h2>
              <p class="text-[#ffffffc9] text-[16px] pt-[24px]">
                We provide you & your team a comprehensive dashboard that help
                you manage and track your clients
              </p>
              <div class="flex gap-[10px] items-center mt-[13px] mb-[34px]">
                <p class="text-[46px] text-white">25</p>
                <div class="text-[16px] text-[#ffffffb8]">
                  <span class="text-white"> SAR </span>
                  <span class="text-white"> / Monthly </span>
                </div>
              </div>
              <div class="flex">
                <div class="flex-1"></div>
                <div class="flex-1"></div>
              </div>
              <button
                class="flex w-[100%] m-auto text-[16px] font-bold items-center p-[8px] justify-center rounded-[6px] bg-white text-[#3B2E8C]"
              >
                Join Now
              </button>
            </div>
          </div>
          <div
            class="flex flex-col gap-[4px] flex-1 rounded-[33px] px-[49px] py-[45px] bg-[#EDEDED]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
span {
  /* color: #ffffffb8; */
}
</style>
