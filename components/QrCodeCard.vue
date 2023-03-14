<script>
import { qrCode } from "~~/composables/states";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
    setup() {
        const qrCodes = qrCode();
        return {
            qrCodes,
            modules: [Pagination],
        };
    },
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>

<template>
    <div
        class="hidden lg:grid grid-cols-2 lg:grid-cols-6 gap-[20px] py-[96px] border-b border-b-[#1A191B] border-opacity-[0.1]"
    >
        <div
            class="lg:w-[176px]"
            v-for="(qrCode, index) in qrCodes"
            v-bind:key="qrCode.id"
        >
            <div
                class="h-[174px] bg-white rounded-[12px] ui-qr-card relative flex justify-center items-center"
            >
                <img :src="qrCode.img" />
                <span
                    class="h-[24px] w-[34px] rounded-full block bg-ui-dark-blue text-white text-[12px] font-[600] text-center leading-[24px] absolute -bottom-[12px] left-1/2 transform -translate-x-1/2"
                    >0{{ index + 1 }}</span
                >
            </div>
            <p
                class="text-[14px] text-[#555867] font-[500] text-center pt-[44px]"
            >
                {{ qrCode.title }}
            </p>
        </div>
    </div>
    <div class="mobile-qrcode-card pt-[40px] lg:hidden">
        <swiper
            :slidesPerView="2"
            :spaceBetween="20"
            :pagination="true"
            :modules="modules"
            :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }"
            class="mySwiper"
        >
            <swiper-slide
                v-for="(qrCode, index) in qrCodes"
                v-bind:key="qrCode.id"
                ><div class="lg:w-[176px]">
                    <div
                        class="h-[174px] bg-white rounded-[12px] ui-qr-card relative flex justify-center items-center"
                    >
                        <img :src="qrCode.img" />
                        <span
                            class="h-[24px] w-[34px] rounded-full block bg-ui-dark-blue text-white text-[12px] font-[600] text-center leading-[24px] absolute -bottom-[12px] left-1/2 transform -translate-x-1/2"
                            >0{{ index + 1 }}</span
                        >
                    </div>
                    <p
                        class="text-[14px] text-[#555867] font-[500] text-center pt-[44px]"
                    >
                        {{ qrCode.title }}
                    </p>
                </div></swiper-slide
            >
        </swiper>
    </div>
</template>

<style>
.ui-qr-card {
    box-shadow: 12.875px 25.75px 25.75px rgba(17, 44, 87, 0.04);
}

.mobile-qrcode-card .swiper-initialized {
    padding-bottom: 3rem;
}
.mobile-qrcode-card .swiper-pagination {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.mobile-qrcode-card .swiper-pagination .swiper-pagination-bullet {
    height: 4px;
    width: 4px;
    background: #d9d9d9 !important;
    opacity: 1;
}
.mobile-qrcode-card
    .swiper-pagination
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
    height: 8px;
    width: 8px;
    background: #093093 !important;
}
</style>
