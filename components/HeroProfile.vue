<script setup>
const { avatar } = defineProps(["avatar"]);
</script>

<template>
    <div
        class="h-[627px] w-[488px] relative ui-bg-profile rounded-[12px] shadow-xl flex flex-col justify-end overflow-hidden"
    >
        <!-- avart  -->
        <img
            class="ui-avatar w-full rounded-[12px] opacity-[0.6]"
            :src="avatar.img"
        />
        <!-- avatar frame -->
        <img
            class="ui-frame hidden absolute top-[90px] left-1/2 transform -translate-x-1/2 z-10"
            src="~/assets/images/hero/frame.png"
        />
        <!-- avatar info -->
        <div
            class="ui-info hidden absolute w-[344px] left-1/2 transform -translate-x-1/2 z-20 items-center justify-between bottom-[80px]"
        >
            <p class="text-[18px] text-white font-[700] w-[80px]">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 1V1C16.5236 1 21 5.47644 21 11V11C21 16.5236 16.5236 21 11 21V21C5.47644 21 1 16.5236 1 11V11C1 5.47644 5.47644 1 11 1Z"
                        stroke="#1CF94D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14.9277 8.5L9.92773 13.8571L7.42773 11.1786"
                        stroke="#1CF94D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                {{ avatar.name }}
            </p>
            <p class="text-[13px] text-white font-[500] w-[105px] text-right">
                Verificação de cadastro na base de dados
            </p>
        </div>
        <div
            class="ui-info h-[47px] w-full bg-ui-green z-20 absolute bottom-0 hidden items-center justify-center"
        >
            <p
                class="flex items-center gap-1 text-[13px] font-[700] text-white"
            >
                <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.25 16.25H5.75002C4.92127 16.25 4.25002 15.5788 4.25002 14.75V8.75C4.25002 7.92125 4.92127 7.25 5.75002 7.25H13.25C14.0788 7.25 14.75 7.92125 14.75 8.75V14.75C14.75 15.5788 14.0788 16.25 13.25 16.25Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6.50002 5C6.50002 3.34325 7.84327 2 9.50002 2C11.1568 2 12.5 3.34325 12.5 5V7.25"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9.50003 13.3175V11.375"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9.89778 10.4148C10.1175 10.6344 10.1175 10.9906 9.89778 11.2102C9.67811 11.4299 9.32196 11.4299 9.10229 11.2102C8.88262 10.9906 8.88262 10.6344 9.10229 10.4148C9.32196 10.1951 9.67811 10.1951 9.89778 10.4148"
                        stroke="white"
                        stroke-opacity="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Acesso vip liberado
            </p>
        </div>
        <!-- avatar overflow -->
        <div
            class="h-[303px] ui-profile-overlay w-full absolute bottom-0 left-0 z-10"
        ></div>
    </div>
</template>

<style>
.ui-bg-profile {
    background: linear-gradient(
        332.12deg,
        rgba(255, 255, 255, 0.6) -12.96%,
        rgba(255, 255, 255, 0) 98.94%
    );
    /* box-shadow: 0px 0px 71px rgba(30, 29, 88, 0.3); */
}
.ui-profile-overlay {
    background: linear-gradient(
        360deg,
        #093093 11.98%,
        rgba(9, 48, 147, 0) 100%
    );
    mix-blend-mode: normal;
    opacity: 0.7;
    border-radius: 12px;
}

.ui-hero .swiper-slide-active .ui-info {
    display: flex !important;
}
.ui-hero .swiper-slide-active .ui-frame {
    display: block !important;
}
.ui-hero .swiper-slide-active .ui-avatar {
    opacity: 1 !important;
}
.ui-hero .swiper-pagination {
    position: absolute !important;
    left: 0 !important;
    width: auto !important;
}
</style>
