<template>
  <div class="AfterHeroSec">
    <div class="w-full">
      <div class="container m-auto flex py-[4rem]">
        <div class="bigBox flex flex-col w-full gap-[45px]">
          <div
            class="top-smallboxes flex w-full md:flex-row flex-col gap-[45px] md:gap[45px]"
          >
            <div class="flex gap-[8px] w-[100%] text-[#6C56BD4A] p-2">
              <div class="w-[20%] relative">
                <span
                  class="rounded-[50%] absolute m-auto text-center w-[77px] h-[77px] bg-[#6C56BD4A]"
                ></span>
                <span
                  class="w-[60px] h-[60px] absolute top-[11%] left-[11%] m-auto text-center bg-[#5F45BF] rounded-[50%]"
                >
                </span>
              </div>
              <div class="flex flex-col w-[70%] ml-auto">
                <img
                  class="w-[24px] h-[24px]"
                  src="../assets/images/translate.svg"
                  alt="translate"
                />
                <p class="text-[#303030] w-[77%]">
                  Offered in multiple languages, serving the Arab region in
                  particular
                </p>
              </div>
            </div>
            <div class="flex gap-[8px] w-[100%] text-[#6C56BD4A] p-2">
              <div class="w-[20%] relative">
                <span
                  class="rounded-[50%] absolute m-auto text-center w-[77px] h-[77px] bg-[#CCC5E3E3]"
                ></span>
                <span
                  class="w-[60px] h-[60px] absolute top-[11%] left-[11%] m-auto text-center bg-[#B88FC6] rounded-[50%]"
                >
                </span>
              </div>
              <div class="flex flex-col w-[70%] ml-auto">
                <img
                  class="w-[24px] h-[24px]"
                  src="../assets/images/element-2.svg"
                  alt="element-2.svg"
                />
                <p class="text-[#303030]">
                  Simple and advanced <br />
                  user interface
                </p>
              </div>
            </div>
            <div class="flex gap-[8px] w-[100%] text-[#6C56BD4A] p-2">
              <div class="w-[20%] relative">
                <span
                  class="rounded-[50%] absolute m-auto text-center w-[77px] h-[77px] bg-[#DB665A4A]"
                ></span>
                <span
                  class="w-[60px] h-[60px] absolute top-[11%] left-[11%] m-auto text-center bg-[#DB665A] rounded-[50%]"
                >
                </span>
              </div>
              <div class="flex flex-col w-[70%] ml-auto">
                <img
                  class="w-[24px] h-[24px]"
                  src="../assets/images/data-2.svg"
                  alt="data-2.svg"
                />
                <p class="text-[#303030]">
                  One Place for all tasks <br />
                  and data
                </p>
              </div>
            </div>
          </div>
          <div class="btm-smallboxes flex w-full md:flex-row flex-col">
            <div class="flex gap-[8px] w-[100%] text-[#6C56BD4A] p-2">
              <div class="w-[20%] relative">
                <span
                  class="rounded-[50%] absolute m-auto text-center w-[77px] h-[77px] bg-[#DB665A4A]"
                ></span>
                <span
                  class="w-[60px] h-[60px] absolute top-[11%] left-[11%] m-auto text-center bg-[#DB665A] rounded-[50%]"
                >
                </span>
              </div>
              <div class="flex flex-col w-[70%] ml-auto">
                <img
                  class="w-[24px] h-[24px]"
                  src="../assets/images/profile-2user.svg"
                  alt="profile-2user.svg"
                />
                <p class="text-[#303030] w-[77%]">
                  Track your clients progress and updates
                </p>
              </div>
            </div>
            <div class="flex gap-[8px] w-[100%] text-[#6C56BD4A] p-2">
              <div class="w-[20%] relative">
                <span
                  class="rounded-[50%] absolute m-auto text-center w-[77px] h-[77px] bg-[#CCC5E3E3]"
                ></span>
                <span
                  class="w-[60px] h-[60px] absolute top-[11%] left-[11%] m-auto text-center bg-[#674FC2] rounded-[50%]"
                >
                </span>
              </div>
              <div class="flex flex-col w-[70%] ml-auto">
                <img
                  class="w-[24px] h-[24px]"
                  src="../assets/images/task-square.svg"
                  alt="task-square.svg"
                />
                <p class="text-[#303030] w-[77%]">
                  Manage your tasks with ease from any place
                </p>
              </div>
            </div>
            <div class="flex gap-[8px] w-[100%] text-[#6C56BD4A] p-2">
              <div class="w-[20%] relative">
                <span
                  class="rounded-[50%] absolute m-auto text-center w-[77px] h-[77px] bg-[#CCC5E3E3]"
                ></span>
                <span
                  class="w-[60px] h-[60px] absolute top-[11%] left-[11%] m-auto text-center bg-[#B88FC6] rounded-[50%]"
                >
                </span>
              </div>
              <div class="flex flex-col w-[70%] ml-auto">
                <img
                  class="w-[24px] h-[24px]"
                  src="../assets/images/command.svg"
                  alt="command.svg"
                />
                <p class="text-[#303030] w-[77%]">
                  Flexible & scalable according to the targeted sector
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.AfterHeroSec {
  overflow: hidden;
}

@media (max-width: 1300px) {
  .bigBox div {
    width: 100%;
  }
}
</style>
