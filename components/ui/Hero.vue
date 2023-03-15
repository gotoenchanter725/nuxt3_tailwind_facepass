<script>
import HeroProfile from "~/components/HeroProfile.vue";
// import HeroProfileMobile from "~/components/HeroProfileMobile.vue";
import { heroAvatars } from "~/composables/states";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

console.log(useSwiper);

export default {
    setup() {
        const avatars = heroAvatars();
        const swiper = useSwiper();
        return {
            avatars,
            modules: [Autoplay, Pagination, Navigation],
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
            swiper,
        };
    },
    components: {
        Swiper,
        SwiperSlide,
        HeroProfile,
    },
    mounted() {
        // Get the pagination container element
        // const paginationContainer =
        //     this.$el.querySelector(".swiper-pagination");
        // // Get the pagination dots elements
        // const paginationDots = paginationContainer.querySelectorAll(
        //     ".swiper-pagination-bullet"
        // );
        // // Get the HTML tag where you want to append the pagination dots
        // const targetElement = this.$el.querySelector(
        //     "#pagination-dots-container"
        // );
        // // Loop through the pagination dots and append them to the target element
        // paginationDots.forEach((dot) => {
        //     targetElement.appendChild(dot);
        // });
    },
};
</script>

<template>
    <section
        class="ui-hero bg-ui-dark-blue pt-[137px] lg:pt-[232px] pb-[50px] lg:pb-[146px] relative"
    >
        <div class="container relative z-[10]">
            <div class="lg:w-[568px]">
                <h2
                    class="text-[56px] lg:text-[73px] font-[600] text-white leading-[5rem] text-center lg:text-left"
                >
                    A revolução para todos os seus
                </h2>
                <h2
                    class="text-[56px] lg:text-[73px] font-[600] text-white flex items-center gap-2 leading-[5rem]"
                >
                    <svg
                        width="73"
                        height="45"
                        viewBox="0 0 73 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            opacity="0.43"
                            cx="22.5"
                            cy="22.5"
                            r="22.5"
                            fill="url(#paint0_linear_7_743)"
                        />
                        <circle cx="50.5" cy="22.5" r="22.5" fill="#4D6BB8" />
                        <path
                            d="M50.3567 15.3087C50.4325 15.164 50.6445 15.164 50.7202 15.3087L52.9376 19.545C52.9672 19.6017 53.0228 19.6411 53.0872 19.651L57.9047 20.3981C58.0692 20.4236 58.1348 20.6202 58.0171 20.7351L54.57 24.1003C54.5239 24.1453 54.5026 24.2091 54.5128 24.2719L55.2728 28.9699C55.2987 29.1303 55.1272 29.2518 54.9788 29.1782L50.631 27.0217C50.5728 26.9928 50.5041 26.9928 50.446 27.0217L46.0982 29.1782C45.9497 29.2518 45.7782 29.1303 45.8041 28.9699L46.5641 24.2719C46.5743 24.2091 46.5531 24.1453 46.507 24.1003L43.0599 20.7351C42.9422 20.6202 43.0077 20.4236 43.1722 20.3981L47.9897 19.651C48.0541 19.6411 48.1097 19.6017 48.1394 19.545L50.3567 15.3087Z"
                            fill="#F6F6F8"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_7_743"
                                x1="13.5"
                                y1="-32"
                                x2="31.5"
                                y2="49"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#B3C5F4" />
                                <stop
                                    offset="1"
                                    stop-color="#7896E2"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                    eventos
                </h2>
                <p
                    class="text-[18px] font-[400] text-white text-center lg:text-left pt-2 lg:w-[401px] pb-[40px]"
                >
                    Facepass é a ferramenta completa de gestão de eventos com o
                    uso de reconhecimento facial. Tudo em um piscar de olhos.
                </p>
                <div class="flex justify-center lg:justify-start">
                    <button
                        @click="swiper.slideNext()"
                        class="h-[56px] w-[229px] bg-ui-orange text-white font-[700] rounded-full mx-auto lg:mx-0"
                    >
                        Entrar em contato
                    </button>
                </div>
                <!-- <div
                    id="custom-pagination"
                    class="items-center gap-4 mt-[80px] hidden lg:flex"
                >
                    <button
                        class="h-[30px] w-[30px] rounded-full border border-white text-[12px] text-white font-[600]"
                    >
                        01
                    </button>
                    <button
                        class="h-[30px] w-[30px] rounded-full text-[12px] text-[#4D6BB8] font-[600]"
                    >
                        02
                    </button>
                    <button
                        class="h-[30px] w-[30px] rounded-full text-[12px] text-[#4D6BB8] font-[600]"
                    >
                        03
                    </button>
                </div> -->
                <div id="pagination-dots-container"></div>
                <!-- <button @click="this.swiper.slidePrev()">Previous</button> -->
                <!-- <button @click="swiper.slideNext()">
                    Slide to the next slide
                </button> -->
            </div>
            <div
                id="swiper-container"
                class="ui-hero-slider w-[1000px] hidden lg:block absolute right-[-320px] top-1/2 transform -translate-y-1/2 z-10"
            >
                <swiper
                    :slidesPerView="2"
                    :spaceBetween="15"
                    :loop="true"
                    :pagination="pagination"
                    :modules="modules"
                    class="mySwiper"
                    :navigation="true"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: true,
                    }"
                >
                    <swiper-slide
                        v-for="avatar in avatars"
                        v-bind:key="avatar.id"
                    >
                        <HeroProfile :avatar="avatar" />
                    </swiper-slide>
                </swiper>
            </div>

            <!-- bg obj 2-->
            <svg
                class="absolute left-[408px] -bottom-[70px] hidden md:block"
                width="186"
                height="296"
                viewBox="0 0 186 296"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.4">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M116.921 59.2356C116.921 49.3918 119.504 42.3111 124.668 37.9936C129.832 33.6762 138.095 31.6039 149.457 31.6039C154.965 31.6039 160.302 32.1219 165.294 33.1581C170.286 34.1943 174.934 35.5759 178.894 37.3029C180.787 35.5759 182.509 33.3309 183.886 30.7404C185.263 27.9772 185.951 25.0413 185.951 21.9327C186.468 14.6794 182.853 9.32573 175.623 5.52637C168.393 1.8997 157.72 0 143.776 0C131.381 0 120.192 2.07238 110.552 6.04444C100.739 10.0165 93.1653 16.2337 87.6566 24.696C82.1479 33.1582 79.3935 44.2108 79.3935 57.6813V189.968L79.393 189.968C79.2382 189.944 79.0833 189.92 78.9285 189.896C76.8464 189.573 74.7746 189.23 72.8519 188.587C69.5812 187.723 66.827 187.896 64.417 189.277C62.0069 190.659 60.1132 193.768 58.7361 198.43C57.8753 201.539 57.5309 204.302 57.703 207.065C57.703 207.411 57.7461 207.756 57.7892 208.102C57.8323 208.447 57.8753 208.792 57.8753 209.138C58.2196 211.901 59.769 214.146 61.8348 214.837C76.9836 220.536 93.5094 220.363 109.002 216.046C113.995 214.664 117.266 208.965 117.266 202.921V98.6108C119.676 97.7473 122.43 96.8838 125.356 96.193C132.931 94.466 140.677 93.9479 148.424 94.466C156.17 94.9841 163.229 96.0204 169.426 97.7473C170.975 95.675 172.352 92.9118 173.213 89.6305C174.074 86.3492 174.246 83.068 173.557 79.9594C171.836 72.3607 166.671 67.6978 158.064 65.7981C152.039 64.2439 145.153 63.7258 137.407 64.0712C130.511 64.4086 123.945 65.2404 117.386 66.5668C117.231 66.5981 117.076 66.6297 116.921 66.6616V59.2356ZM137.429 64.536C130.395 64.8803 123.705 65.7407 117.015 67.1175L116.456 67.2325V59.2356C116.456 49.3193 119.058 42.0771 124.37 37.6364C129.66 33.2134 138.059 31.1385 149.457 31.1385C154.994 31.1385 160.362 31.6592 165.388 32.7024C170.287 33.7191 174.866 35.0689 178.8 36.7555C180.563 35.0974 182.172 32.9723 183.472 30.5275C184.815 27.8308 185.486 24.9677 185.486 21.9327V21.9162L185.488 21.8996C185.739 18.3638 184.985 15.3135 183.301 12.6856C181.613 10.0526 178.974 7.81381 175.411 5.94052C168.275 2.3624 157.687 0.465409 143.776 0.465409C131.432 0.465409 120.304 2.52928 110.729 6.47481L110.726 6.47591C100.999 10.4134 93.5013 16.5701 88.0462 24.95C82.6009 33.3148 79.8585 44.2709 79.8585 57.6813V190.511L79.3015 190.425C77.0832 190.083 74.8181 189.733 72.719 189.033C69.5354 188.195 66.9193 188.379 64.6481 189.681C62.3997 190.97 60.5511 193.929 59.1831 198.559C58.3341 201.626 57.9989 204.336 58.1671 207.036L58.168 207.051V207.065C58.168 207.377 58.2069 207.694 58.2506 208.044L58.2522 208.057C58.2931 208.385 58.3379 208.744 58.3402 209.108C58.6768 211.741 60.1442 213.781 61.9821 214.395L61.9903 214.398L61.9984 214.401C77.0386 220.059 93.4615 219.893 108.878 215.597L108.879 215.597C113.599 214.291 116.801 208.839 116.801 202.921V98.2831L117.109 98.1727C119.532 97.3046 122.303 96.4356 125.25 95.74L125.253 95.7392C132.875 94.0014 140.667 93.4808 148.455 94.0017C156.093 94.5126 163.079 95.5267 169.241 97.2134C170.676 95.2216 171.952 92.6054 172.763 89.5123C173.608 86.2897 173.773 83.0848 173.103 80.061C172.261 76.3446 170.584 73.3675 168.08 71.0858C165.572 68.8006 162.209 67.1897 157.964 66.2526L157.956 66.2509L157.948 66.2488C151.98 64.7094 145.144 64.1921 137.429 64.536Z"
                        fill="url(#paint0_linear_7_677)"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.105 84.9372C45.105 93.3651 43.3838 112.629 27.2025 112.629C21.694 112.629 9.3 110.049 9.3 84.9372C9.3 76.5092 11.0212 57.2453 27.2025 57.2453C32.5389 57.2453 45.105 59.9973 45.105 84.9372ZM41.7927 101.764C44.2094 95.9813 44.64 89.1334 44.64 84.9372C44.64 72.5402 41.5173 65.7561 37.8264 62.0682C34.1348 58.3796 29.7972 57.7107 27.2025 57.7107C23.257 57.7107 20.2186 58.8822 17.868 60.7514C15.5103 62.6261 13.8186 65.2238 12.6123 68.1103C10.1956 73.893 9.765 80.7409 9.765 84.9372C9.765 97.4232 12.8462 104.206 16.5141 107.871C20.1812 111.535 24.5158 112.164 27.2025 112.164C31.148 112.164 34.1864 110.992 36.537 109.123C38.8947 107.248 40.5864 104.65 41.7927 101.764Z"
                        fill="url(#paint1_linear_7_677)"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M159.747 258.572C155.788 251.673 146.837 249.431 139.952 253.398C139.78 253.57 116.37 266.851 80.9102 266.851C47.0629 266.851 24.7766 254.949 22.1024 253.521C22.0602 253.499 22.0229 253.479 21.9905 253.462C21.9355 253.432 21.8947 253.411 21.8682 253.398C14.9828 249.258 6.03187 251.5 2.07279 258.4C-2.05843 265.299 0.179144 274.268 7.0645 278.407C7.08296 278.418 7.10784 278.432 7.13909 278.45C9.14844 279.611 37.5189 296 80.9102 296C124.228 296 152.792 279.538 154.694 278.443L154.755 278.407C161.641 274.268 163.878 265.471 159.747 258.572ZM21.6287 253.797L21.6441 253.806L21.66 253.814C21.7027 253.835 21.7817 253.877 21.8965 253.939C24.5893 255.376 46.9551 267.316 80.9102 267.316C98.6977 267.316 113.464 263.986 123.807 260.632C128.979 258.955 133.046 257.272 135.834 255.996C137.228 255.358 138.302 254.821 139.035 254.438C139.402 254.246 139.684 254.092 139.878 253.983C139.975 253.928 140.052 253.884 140.107 253.851C140.134 253.835 140.158 253.82 140.178 253.807C140.186 253.801 140.196 253.795 140.206 253.788C146.875 249.962 155.522 252.144 159.344 258.804L159.346 258.808L159.348 258.811C163.346 265.487 161.184 273.996 154.52 278.005L154.464 278.038C152.591 279.118 124.11 295.535 80.9102 295.535C37.636 295.535 9.34882 279.189 7.36878 278.045C7.34039 278.029 7.3174 278.016 7.29986 278.006C0.637899 273.997 -1.52696 265.316 2.47164 258.639L2.47386 258.635L2.47601 258.631C6.30207 251.964 14.9608 249.788 21.6287 253.797Z"
                        fill="url(#paint2_linear_7_677)"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="paint0_linear_7_677"
                        x1="-48.825"
                        y1="303.912"
                        x2="262.191"
                        y2="101.011"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_7_677"
                        x1="-48.825"
                        y1="303.912"
                        x2="262.191"
                        y2="101.011"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_7_677"
                        x1="-48.825"
                        y1="303.912"
                        x2="262.191"
                        y2="101.011"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        <div class="ui-hero-mobile lg:hidden pt-[40px]">
            <swiper
                :slidesPerView="1"
                :spaceBetween="15"
                :loop="true"
                :centeredSlides="true"
                :modules="modules"
                class="mySwiper"
                :autoplay="{
                    delay: 2500,
                    disableOnInteraction: true,
                }"
            >
                <swiper-slide v-for="avatar in avatars" v-bind:key="avatar.id">
                    <HeroProfileMobile :avatar="avatar" />
                </swiper-slide>
            </swiper>
        </div>

        <!-- bg obj 1 -->
        <svg
            class="absolute -top-[1rem] -left-[80px] hidden md:block"
            width="364"
            height="697"
            viewBox="0 0 364 697"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.8" filter="url(#filter0_f_6_4569)">
                <path
                    d="M-75.0922 120.606C-35.81 23.5662 73.0081 50.3102 122.507 75.8121C171.214 101.975 161.71 159.453 156.958 193.94C152.206 228.427 100.727 480.936 -75.0922 493.224C-250.912 505.513 -254.476 368.357 -166.566 324.357C-78.6561 280.356 -124.195 241.905 -75.0922 120.606Z"
                    fill="#3482C3"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_6_4569"
                    x="-426"
                    y="-151"
                    width="790"
                    height="848"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="101.5"
                        result="effect1_foregroundBlur_6_4569"
                    />
                </filter>
            </defs>
        </svg>
        <!-- bg obj 3 -->
        <svg
            width="941"
            height="1034"
            class="absolute top-0 right-0 hidden md:block"
            viewBox="0 0 941 1034"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_0_1)">
                <path
                    d="M451.054 205.015C516.933 42.3316 699.43 87.1671 782.444 129.92C864.129 173.781 848.19 270.142 840.221 327.958C832.252 385.775 745.918 809.098 451.054 829.7C156.19 850.301 150.213 620.364 297.645 546.598C445.077 472.832 368.704 408.37 451.054 205.015Z"
                    fill="#3482C3"
                />
            </g>
            <g filter="url(#filter1_f_0_1)">
                <path
                    d="M495.808 431.41C541.111 494.127 482.439 547.527 447.441 566.388C412.336 584.511 380.189 555.494 360.534 538.646C340.879 521.797 203.408 388.575 263.621 279.699C323.835 170.823 410.675 224.56 404.157 294.411C397.64 364.262 439.178 353.014 495.808 431.41Z"
                    fill="#5FE8FB"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_0_1"
                    x="0"
                    y="-113"
                    width="1050"
                    height="1147"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="101.5"
                        result="effect1_foregroundBlur_0_1"
                    />
                </filter>
                <filter
                    id="filter1_f_0_1"
                    x="45.4781"
                    y="14.6899"
                    width="669.824"
                    height="760.448"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="101.5"
                        result="effect1_foregroundBlur_0_1"
                    />
                </filter>
            </defs>
        </svg>
    </section>
</template>

<style>
.ui-hero-mobile .swiper-initialized {
    padding: 0 3rem;
    padding-bottom: 4rem;
}
/* .ui-hero-mobile .swiper-initialized {
    padding-top: 188px;
    padding-bottom: 4rem;
} */
.ui-hero-slider .swiper-pagination {
    display: none;
}
.ui-hero-mobile .swiper-pagination {
    left: 50% !important;
    transform: translateX(-50%) !important;
    bottom: 0;
    width: 70% !important;
}
.ui-hero-mobile .swiper-pagination-bullet {
    background: transparent;
    height: 30px;
    width: 30px;
    font-size: 12px;
    color: #4d6bb8;
    text-align: center;
    line-height: 30px;
}
.ui-hero-mobile .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background: transparent;
    height: 30px;
    width: 30px;
    border: 1px solid white;
    font-size: 12px;
    color: white;
    text-align: center;
    line-height: 30px;
}

#swiper-pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}
</style>
