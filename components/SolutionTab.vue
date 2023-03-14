<script>
import { solutionsInfo, solutionSelect } from "~~/composables/states";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
    setup() {
        const solutions = solutionsInfo();
        const solutionSelector = solutionSelect();
        return {
            solutions,
            solutionSelector,
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return (
                        '<span class="' +
                        className +
                        '">' +
                        (index < 11 && "0") +
                        (index + 1) +
                        "</span>"
                    );
                },
            },
            modules: [Pagination],
        };
    },
    methods: {
        solutionSelect(v) {
            this.solutionSelector = v;
        },
    },
    computed: {
        filterTab() {
            return this.solutions.filter(
                (item) => item.id === this.solutionSelector
            );
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>

<template>
    <div
        class="hidden lg:flex justify-between items-center mt-[65px] relative border-b border-b-[#1A191B] border-opacity-[0.2] pb-[100px]"
    >
        <div
            class="w-[244px] bg-white rounded-8 shadow-xl px-[40px] py-[47px] flex flex-col gap-[47px] relative z-10"
        >
            <button
                @click="solutionSelect(1)"
                :class="`flex items-center gap-[22px] text-[16px] transition-all duration-150 ${
                    solutionSelector === 1
                        ? 'text-[#1A191B] font-[700]'
                        : 'text-[16px] text-[#555867]'
                }`"
            >
                <span
                    :class="`rounded-full block transition-all duration-150 ${
                        solutionSelector === 1
                            ? 'h-[12px] w-[12px] bg-[#F7691A] '
                            : 'h-[5px] w-[5px] bg-[#9EA8B9]'
                    }`"
                ></span>
                Estádios
            </button>
            <button
                @click="solutionSelect(2)"
                :class="`flex items-center gap-[22px] text-[16px] transition-all duration-150 ${
                    solutionSelector === 2
                        ? 'text-[#1A191B] font-[700]'
                        : 'text-[16px] text-[#555867]'
                }`"
            >
                <span
                    :class="`rounded-full block transition-all duration-150 ${
                        solutionSelector === 2
                            ? 'h-[12px] w-[12px] bg-[#F7691A] '
                            : 'h-[5px] w-[5px] bg-[#9EA8B9]'
                    }`"
                ></span>
                Eventos & Festas
            </button>
            <button
                @click="solutionSelect(3)"
                :class="`flex items-center gap-[22px] text-[16px] transition-all duration-150 ${
                    solutionSelector === 3
                        ? 'text-[#1A191B] font-[700]'
                        : 'text-[16px] text-[#555867]'
                }`"
            >
                <span
                    :class="`rounded-full block transition-all duration-150 ${
                        solutionSelector === 3
                            ? 'h-[12px] w-[12px] bg-[#F7691A] '
                            : 'h-[5px] w-[5px] bg-[#9EA8B9]'
                    }`"
                ></span>
                Condomínios
            </button>
            <button
                @click="solutionSelect(4)"
                :class="`flex items-center gap-[22px] text-[16px] transition-all duration-150 ${
                    solutionSelector === 4
                        ? 'text-[#1A191B] font-[700]'
                        : 'text-[16px] text-[#555867]'
                }`"
            >
                <span
                    :class="`rounded-full block transition-all duration-150 ${
                        solutionSelector === 4
                            ? 'h-[12px] w-[12px] bg-[#F7691A] '
                            : 'h-[5px] w-[5px] bg-[#9EA8B9]'
                    }`"
                ></span>
                Escolas
            </button>
            <button
                @click="solutionSelect(5)"
                :class="`flex items-center gap-[22px] text-[16px] transition-all duration-150 ${
                    solutionSelector === 5
                        ? 'text-[#1A191B] font-[700]'
                        : 'text-[16px] text-[#555867]'
                }`"
            >
                <span
                    :class="`rounded-full block transition-all duration-150 ${
                        solutionSelector === 5
                            ? 'h-[12px] w-[12px] bg-[#F7691A] '
                            : 'h-[5px] w-[5px] bg-[#9EA8B9]'
                    }`"
                ></span>
                Bares
            </button>
        </div>
        <div
            class="w-[588px] bg-[#E0EDFD] rounded-[12px] h-[483px] py-[94px] relative z-10"
        >
            <div
                class="w-[384px] h-[402px] bg-slate-300 rounded-[12px] absolute top-1/2 transform -translate-y-1/2 -left-[38%]"
            >
                <img
                    class="h-full w-full object-cover rounded-[12px]"
                    :src="filterTab[0].img"
                />
                <button
                    v-if="filterTab[0].imgbtn"
                    class="h-[38px] w-[108px] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 hover:bg-ui-orange text-[14px] text-ui-orange font-[600] hover:text-white"
                >
                    Em breve
                </button>
                <img
                    class="absolute top-1/2 transform -translate-y-1/2 -left-[32px]"
                    src="~/assets/images/solution/icon.svg"
                />
            </div>

            <div class="pl-[260px]">
                <span v-html="filterTab[0].icon"></span>
                <h4 class="pt-[32px] text-[24px] text-[#1A191B] font-[600]">
                    {{ filterTab[0].title }}
                </h4>
                <p class="py-[20px] text-[16px] text-[#555867]">
                    {{ filterTab[0].description }}
                </p>
                <button
                    v-if="filterTab[0].btn"
                    class="h-[56px] w-[215px] bg-ui-orange text-white font-[700] rounded-full"
                >
                    Ver todos os eventos
                </button>
            </div>
        </div>
        <img
            class="absolute left-[21rem] bottom-[7rem]"
            src="~/assets/images/solution/obj.svg"
            alt=""
        />
        <!-- line 1 -->
        <svg
            v-if="solutionSelector === 1"
            class="absolute top-[100px] left-[218px] transition-all duration-150"
            width="166"
            height="144"
            viewBox="0 0 166 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M0 1H56.365C66.8584 1 75.365 9.50659 75.365 20V124C75.365 134.493 83.8716 143 94.365 143H166"
                stroke="#FFA24B"
                stroke-width="2"
            />
        </svg>
        <!-- line 2 -->
        <svg
            v-if="solutionSelector === 2"
            class="absolute top-[172px] left-[218px] transition-all duration-150"
            width="166"
            height="72"
            viewBox="0 0 166 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M0 1H56.365C66.8584 1 75.365 9.50659 75.365 20V52C75.365 62.4934 83.8716 71 94.365 71H166"
                stroke="#FFA24B"
                stroke-width="2"
            />
        </svg>
        <!-- line 3 -->
        <svg
            v-if="solutionSelector === 3"
            class="absolute top-[242px] left-[218px] transition-all duration-150"
            width="166"
            height="2"
            viewBox="0 0 166 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M0 1H75.365H166"
                stroke="#FFA24B"
                stroke-width="2"
            />
        </svg>
        <!-- line 4 -->
        <svg
            v-if="solutionSelector === 4"
            class="absolute top-[242px] left-[218px] transition-all duration-150"
            width="165"
            height="76"
            viewBox="0 0 165 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M0 75H55.911C66.4044 75 74.911 66.4934 74.911 56V20C74.911 9.50659 83.4176 0.999997 93.911 0.999997H165"
                stroke="#FFA24B"
                stroke-width="2"
            />
        </svg>
        <!-- line 5 -->
        <svg
            v-if="solutionSelector === 5"
            class="absolute top-[242px] left-[218px] transition-all duration-150"
            width="165"
            height="142"
            viewBox="0 0 165 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M0 141H55.911C66.4044 141 74.911 132.493 74.911 122V20C74.911 9.50659 83.4176 1 93.911 1H165"
                stroke="#FFA24B"
                stroke-width="2"
            />
        </svg>
    </div>

    <div class="ui-solution-slide mt-[3rem] lg:hidden">
        <swiper
            :pagination="pagination"
            :modules="modules"
            :spaceBetween="20"
            class="mySwiper"
            :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }"
        >
            <swiper-slide
                v-for="solution in solutions"
                v-bind:key="solution.id"
            >
                <div
                    class="h-[312px] bg-[#E0EDFD] rounded-[12px] text-center relative"
                >
                    <img
                        class="w-[240.89px] h-[215.4px] absolute -top-[182px] left-1/2 transform -translate-x-1/2"
                        src="~/assets/images/solution/01.jpg"
                    />
                    <div class="pt-[4rem] px-2">
                        <svg
                            class="mx-auto"
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M28.419 28.9727H4.58166C3.80033 28.9727 3.16699 28.3393 3.16699 27.558V6.38732C3.16699 5.60599 3.80033 4.97266 4.58166 4.97266H28.4203C29.2003 4.97266 29.8337 5.60599 29.8337 6.38732V27.5593C29.8337 28.3393 29.2003 28.9727 28.419 28.9727V28.9727Z"
                                stroke="#3482C3"
                                stroke-width="1.78571"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M3.16699 12.9731H7.16699C7.90299 12.9731 8.50033 13.5705 8.50033 14.3065V19.6398C8.50033 20.3758 7.90299 20.9731 7.16699 20.9731H3.16699"
                                stroke="#3482C3"
                                stroke-width="1.78571"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M29.8333 20.9731H25.8333C25.0973 20.9731 24.5 20.3758 24.5 19.6398V14.3065C24.5 13.5705 25.0973 12.9731 25.8333 12.9731H29.8333"
                                stroke="#3482C3"
                                stroke-width="1.78571"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M19.3284 14.1447C20.8905 15.7068 20.8905 18.2395 19.3284 19.8016C17.7663 21.3637 15.2337 21.3637 13.6716 19.8016C12.1095 18.2395 12.1095 15.7068 13.6716 14.1447C15.2337 12.5826 17.7663 12.5826 19.3284 14.1447"
                                stroke="#3482C3"
                                stroke-width="1.78571"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16.4997 4.97266V12.9727"
                                stroke="#3482C3"
                                stroke-width="1.78571"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M16.4997 20.9727V28.9727"
                                stroke="#3482C3"
                                stroke-width="1.78571"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h2
                            class="text-[24px] text-[#1A191B] font-[600] pt-[10px]"
                        >
                            Estádios
                        </h2>
                        <p class="text-[14px] text-[#555867] py-[10px]">
                            Controle de entrada e saída do estádio, verificação
                            de dados e requisitos como vacinação e idade. Rápido
                            e sem filas.
                        </p>
                        <button
                            class="h-[56px] w-[215px] bg-ui-orange text-white font-[700] rounded-full"
                        >
                            Ver todos os eventos
                        </button>
                    </div>
                </div></swiper-slide
            >
        </swiper>
    </div>
</template>

<style>
.ui-solution-slide .swiper-initialized {
    padding-top: 188px;
    padding-bottom: 4rem;
}
.ui-solution-slide .swiper-pagination {
    left: 50%;
    transform: translateX(-50%);
}
.ui-solution-slide .swiper-pagination-bullet {
    background: transparent;
    height: 30px;
    width: 30px;
    font-size: 12px;
    color: #093093;
    text-align: center;
    line-height: 30px;
}
.ui-solution-slide .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: transparent;
    height: 30px;
    width: 30px;
    border: 1px solid #093093;
    font-size: 12px;
    color: #093093;
    text-align: center;
    line-height: 30px;
}
</style>
