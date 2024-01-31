<template>
  <div class="TargServ md:my-[4rem] my-[1rem]">
    <div class="container">
      <div class="flex md:flex-row flex-col">
        <div
          class="left-targServ md:w-[20%] w-full m-auto text-center md:text-[32px] text-[22px] font-[700] justify-center items-center"
        >
          <h1>Target Sectors & Service Providers</h1>
        </div>
        <div
          class="right-targServ flex gap-[25px] flex-col md:w-[66%] w-full m-auto"
        >
          <!-- //// -->
          <div class="flex justify-start items-center">
            <div
              class="flex justify-center items-center md:pb-[60px] pb-[11px] md:w-[50%] w-[90%] m-auto cursor-pointer md:text-[20px] text-[12px] font-[700]"
            >
              <h2
                @click="toggleSection('serviceProviders')"
                class="md:w-[50%] w-full text-[#B3B3B3] p-2 border-b-4 border-[#B3B3B3]"
              >
                Service Providers
              </h2>
              <h2
                @click="toggleSection('targetSectors')"
                class="md:w-[50%] w-full text-[#3B2E8C] p-2 border-b-4 border-[#3B2E8C]"
              >
                Target Sectors
              </h2>
            </div>
          </div>

          <div class="   ">
            <!-- strt cont 1  -->
            <div
              v-show="selectedSection === 'targetSectors'"
              class="flex flex-col gap-[25px] "
            >
              <!-- /////////start targer selects/////// -->
              <div
                class="flex w-[100%] text-red-500 m-auto md:gap-[27px] md:flex-row flex-col gap-[11px] justify-center items-center p-1"
              >
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <p>Software</p>
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/monitor">
                        <g id="monitor">
                          <path
                            id="Vector"
                            d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M12 17.22V22"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_3"
                            d="M2 13H22"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_4"
                            d="M7.5 22H16.5"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <!-- ////////// -->
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/buildings-2">
                        <g id="buildings-2">
                          <path
                            id="Vector"
                            d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M17.37 8.41998V19.58C17.37 21.19 16.57 22 14.96 22H9.12C7.51 22 6.70001 21.19 6.70001 19.58V8.41998C6.70001 6.80998 7.51 6 9.12 6H14.96C16.57 6 17.37 6.80998 17.37 8.41998Z"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_3"
                            d="M13.4 6V4.15002C13.4 2.72002 14.12 2 15.55 2H19.85C21.28 2 22 2.72002 22 4.15002V15.85C22 17.28 21.28 18 19.85 18H17.37"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_4"
                            d="M10 11H14"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_5"
                            d="M10 14H14"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_6"
                            d="M12 22V19"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Real Estate</p>
                </div>

                <!-- ///////// -->

                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/hospital">
                        <g id="vuesax/linear/hospital_2">
                          <g id="hospital">
                            <path
                              id="Vector"
                              d="M2 22H22"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <g id="Group">
                              <path
                                id="Vector_4"
                                d="M12 6V11"
                                stroke="#3B2E8C"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                id="Vector_5"
                                d="M9.5 8.5H14.5"
                                stroke="#3B2E8C"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Healthcare</p>
                </div>

                <!-- ///////// -->
              </div>
              <!-- ////////////////////////////// -->

              <div
                class="flex w-[100%] m-auto md:gap-[27px] md:flex-row flex-col gap-[11px] justify-start items-center p-1"
              >
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/group">
                        <g id="vuesax/linear/group_2">
                          <g id="group">
                            <path
                              id="Vector"
                              d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_4"
                              d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_5"
                              d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Shipping</p>
                </div>
                <!-- ////////// -->
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/book">
                        <g id="vuesax/linear/book_2">
                          <g id="book">
                            <path
                              id="Vector"
                              d="M22 16.74V4.67C22 3.47 21.02 2.58 19.83 2.68H19.77C17.67 2.86 14.48 3.93 12.7 5.05L12.53 5.16C12.24 5.34 11.76 5.34 11.47 5.16L11.22 5.01C9.44 3.9 6.26 2.84 4.16 2.67C2.97 2.57 2 3.47 2 4.66V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M12 5.49V20.49"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M7.75 8.49H5.5"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_4"
                              d="M8.5 11.49H5.5"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Education</p>
                </div>

                <!-- ///////// -->

                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
                    <svg
                      class="md:w-[24px] md:h-[24px] w-[2rem] h-[2rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:anim="http://www.w3.org/2000/anim"
                      anim=""
                      anim:transform-origin="50% 50%"
                      anim:duration="1"
                      anim:ease="ease-in-out"
                    >
                      <g id="vuesax/linear/game">
                        <g id="vuesax/linear/game_2">
                          <g id="game">
                            <path
                              id="Vector"
                              d="M9.56999 12.46L6.51999 15.51"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M6.54999 12.49L9.59999 15.54"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M13.53 14H13.54"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_4"
                              d="M17.47 14H17.48"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_5"
                              d="M15.5 15.98V15.96"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_6"
                              d="M15.5 12.04V12.02"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_7"
                              d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_8"
                              d="M13.01 2L13 3.01C12.99 3.56 12.55 4 12 4H11.97C11.42 4 10.98 4.45 10.98 5C10.98 5.55 11.43 6 11.98 6H12.98"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Entertainment</p>
                </div>

                <!-- ///////// -->
              </div>
            </div>
            <!-- end contr 1  -->
            <!-- strt cont 2  -->
            <div
              v-show="selectedSection === 'serviceProviders'"
              class=" flex flex-col gap-[25px]"
            >
              <!-- /////////start targer selects/////// -->
              <div
                class="flex w-[100%] m-auto md:gap-[27px] md:flex-row flex-col gap-[11px] justify-center items-center p-1"
              >
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/monitor">
                        <g id="monitor">
                          <path
                            id="Vector"
                            d="M6.44 2H17.55C21.11 2 22 2.89 22 6.44V12.77C22 16.33 21.11 17.21 17.56 17.21H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M12 17.22V22"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_3"
                            d="M2 13H22"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_4"
                            d="M7.5 22H16.5"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Startups</p>
                </div>
                <!-- ////////// -->
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/buildings-2">
                        <g id="buildings-2">
                          <path
                            id="Vector"
                            d="M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_2"
                            d="M17.37 8.41998V19.58C17.37 21.19 16.57 22 14.96 22H9.12C7.51 22 6.70001 21.19 6.70001 19.58V8.41998C6.70001 6.80998 7.51 6 9.12 6H14.96C16.57 6 17.37 6.80998 17.37 8.41998Z"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_3"
                            d="M13.4 6V4.15002C13.4 2.72002 14.12 2 15.55 2H19.85C21.28 2 22 2.72002 22 4.15002V15.85C22 17.28 21.28 18 19.85 18H17.37"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_4"
                            d="M10 11H14"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_5"
                            d="M10 14H14"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            id="Vector_6"
                            d="M12 22V19"
                            stroke="#3B2E8C"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Lowyers</p>
                </div>

                <!-- ///////// -->

                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/hospital">
                        <g id="vuesax/linear/hospital_2">
                          <g id="hospital">
                            <path
                              id="Vector"
                              d="M2 22H22"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M14.06 15H9.92998C9.41998 15 8.98999 15.42 8.98999 15.94V22H14.99V15.94C15 15.42 14.58 15 14.06 15Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <g id="Group">
                              <path
                                id="Vector_4"
                                d="M12 6V11"
                                stroke="#3B2E8C"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                              <path
                                id="Vector_5"
                                d="M9.5 8.5H14.5"
                                stroke="#3B2E8C"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Constituents</p>
                </div>

                <!-- ///////// -->
              </div>
              <!-- ////////////////////////////// -->

              <div
                class="flex w-[100%] m-auto md:gap-[27px] md:flex-row flex-col gap-[11px] justify-start items-center p-1"
              >
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/group">
                        <g id="vuesax/linear/group_2">
                          <g id="group">
                            <path
                              id="Vector"
                              d="M15 2V12C15 13.1 14.1 14 13 14H2V6C2 3.79 3.79 2 6 2H15Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M22 14V17C22 18.66 20.66 20 19 20H18C18 18.9 17.1 18 16 18C14.9 18 14 18.9 14 20H10C10 18.9 9.1 18 8 18C6.9 18 6 18.9 6 20H5C3.34 20 2 18.66 2 17V14H13C14.1 14 15 13.1 15 12V5H16.84C17.56 5 18.22 5.39001 18.58 6.01001L20.29 9H19C18.45 9 18 9.45 18 10V13C18 13.55 18.45 14 19 14H22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_4"
                              d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_5"
                              d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Ecommers</p>
                </div>
                <!-- ////////// -->
                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
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
                      <g id="vuesax/linear/book">
                        <g id="vuesax/linear/book_2">
                          <g id="book">
                            <path
                              id="Vector"
                              d="M22 16.74V4.67C22 3.47 21.02 2.58 19.83 2.68H19.77C17.67 2.86 14.48 3.93 12.7 5.05L12.53 5.16C12.24 5.34 11.76 5.34 11.47 5.16L11.22 5.01C9.44 3.9 6.26 2.84 4.16 2.67C2.97 2.57 2 3.47 2 4.66V16.74C2 17.7 2.78 18.6 3.74 18.72L4.03 18.76C6.2 19.05 9.55 20.15 11.47 21.2L11.51 21.22C11.78 21.37 12.21 21.37 12.47 21.22C14.39 20.16 17.75 19.05 19.93 18.76L20.26 18.72C21.22 18.6 22 17.7 22 16.74Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M12 5.49V20.49"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M7.75 8.49H5.5"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_4"
                              d="M8.5 11.49H5.5"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>BusinessMen</p>
                </div>

                <!-- ///////// -->

                <div
                  class="flex gap-[15px] items-center justify-center py-[7px] px-[11px] md:w-[24%] w-[90%] bg-[#EAEAEABF] rounded-[11px]"
                >
                  <div
                    class="tragServ-icon-box flex items-center justify-center bg-white rounded-[15px]"
                  >
                    <svg
                      class="md:w-[24px] md:h-[24px] w-[2rem] h-[2rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:anim="http://www.w3.org/2000/anim"
                      anim=""
                      anim:transform-origin="50% 50%"
                      anim:duration="1"
                      anim:ease="ease-in-out"
                    >
                      <g id="vuesax/linear/game">
                        <g id="vuesax/linear/game_2">
                          <g id="game">
                            <path
                              id="Vector"
                              d="M9.56999 12.46L6.51999 15.51"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_2"
                              d="M6.54999 12.49L9.59999 15.54"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_3"
                              d="M13.53 14H13.54"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_4"
                              d="M17.47 14H17.48"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_5"
                              d="M15.5 15.98V15.96"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_6"
                              d="M15.5 12.04V12.02"
                              stroke="#3B2E8C"
                              stroke-width="2"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_7"
                              d="M9 22H15C20 22 22 20 22 15V13C22 8 20 6 15 6H9C4 6 2 8 2 13V15C2 20 4 22 9 22Z"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              id="Vector_8"
                              d="M13.01 2L13 3.01C12.99 3.56 12.55 4 12 4H11.97C11.42 4 10.98 4.45 10.98 5C10.98 5.55 11.43 6 11.98 6H12.98"
                              stroke="#3B2E8C"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>Investors</p>
                </div>

                <!-- ///////// -->
              </div>
            </div>
            <!-- end contr 2 -->
          </div>
          <!-- start contei of 1  -->

          <!-- /////////////end 1  -->

          <!-- ////////////////////////////////// -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selectedSection = ref("targetSectors");

const toggleSection = (section) => {
  selectedSection.value =
    selectedSection.value === section ? selectedSection.value : section;
};
</script>

<style scoped>
.tragServ-icon-box {
  box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.13);
  width: 47px;
  height: 46px;
}
p {
  color: #454545;
  text-align: right;
  font-family: Cairo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28.7px;
}

@media (max-width: 1300px) {
  p {
    font-size: 8px;
  }
  svg {
    width: 1rem;
    height: 1rem;
  }
  .tragServ-icon-box {
    width: 2rem;
    height: 2rem;
  }
}
</style>
