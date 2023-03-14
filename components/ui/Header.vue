<script>
export default {
    data() {
        return {
            isToggled: false,
        };
    },
    methods: {
        hamburgerToggle() {
            this.isToggled = !this.isToggled;
        },
    },
};
</script>

<template>
    <nav class="absolute w-full left-0 top-0 z-10 py-[38px] hidden lg:block">
        <div class="container">
            <div class="grid grid-cols-3">
                <div class="flex items-center gap-[48px]">
                    <NuxtLink
                        class="relative before:content-[''] before:absolute before:h-[13px] before:w-[1px] before:bg-[#3482c380] before:top-1/2 before:transform before:-translate-y-1/2 before:-right-7"
                        to="/"
                    >
                        <img src="~/assets/images/logo/logo.png" alt="logo" />
                    </NuxtLink>
                    <NuxtLink class="text-[14px] text-white font-[400]" to="/">
                        Sua face é seu acesso
                    </NuxtLink>
                </div>
                <div class="flex items-center gap-[36px] mx-auto">
                    <NuxtLink class="text-[14px] text-white font-[400]" to="/">
                        Eventos
                    </NuxtLink>
                    <NuxtLink class="text-[14px] text-white font-[400]" to="/">
                        Quem somos
                    </NuxtLink>
                </div>
                <div class="flex items-center justify-end gap-[30px]">
                    <NuxtLink
                        class="text-[14px] text-white font-[400] flex items-center gap-2"
                        to="/"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.2 17.274H5.28C4.2192 17.274 3.36 16.4148 3.36 15.354V5.75398C3.36 4.69318 4.2192 3.83398 5.28 3.83398H18.72C19.7808 3.83398 20.64 4.69318 20.64 5.75398V15.354C20.64 16.4148 19.7808 17.274 18.72 17.274H12.84L8.7984 20.8692C8.1792 21.4202 7.2 20.9805 7.2 20.1521V17.274Z"
                                stroke="#3482C3"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7.2 8.14992H16.8"
                                stroke="#3482C3"
                                stroke-opacity="0.5"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M7.2 12.4702H13.92"
                                stroke="#3482C3"
                                stroke-opacity="0.5"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        Entre em contato
                    </NuxtLink>
                    <NuxtLink
                        class="text-[14px] text-white font-[400] h-[40px] leading-[40px] w-[176px] bg-ui-orange text-center rounded-full"
                        to="/"
                    >
                        Quem somos
                    </NuxtLink>
                </div>
            </div>
        </div>
    </nav>
    <nav class="absolute w-full left-0 top-0 z-20 py-[38px] lg:hidden">
        <div class="container">
            <div class="flex items-center justify-between">
                <NuxtLink to="">
                    <img
                        class="w-[105px]"
                        src="~/assets/images/logo/logo.png"
                        alt="logo"
                    />
                </NuxtLink>
                <div class="relative">
                    <!-- hamburger menu open -->
                    <button
                        v-if="!isToggled"
                        @click="hamburgerToggle"
                        class="w-[20px] h-[14px] flex items-center flex-col justify-between"
                    >
                        <span class="h-[1.5px] w-full bg-white block"></span>
                        <span class="h-[1.5px] w-full bg-white block"></span>
                        <span class="h-[1.5px] w-full bg-white block"></span>
                    </button>
                    <!-- hamburger menu close -->
                    <div v-if="isToggled" class="absolute right-0 -top-[1rem]">
                        <button
                            v-if="isToggled"
                            @click="hamburgerToggle"
                            class="h-[33px] w-[33px] bg-white rounded-full flex items-center justify-center ml-auto mb-3"
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.00977 6.99072L20.8605 20.8415"
                                    stroke="#093093"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M20.9902 6.99072L7.1395 20.8415"
                                    stroke="#093093"
                                    stroke-width="1.5"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                        <div
                            class="w-[215px] bg-white shadow-lg px-[18px] pb-[18px] rounded-[12px]"
                        >
                            <ul>
                                <li
                                    class="text-center py-[20px] border-b border-b-[#4D6BB8] border-opacity-[0.2]"
                                >
                                    <NuxtLink
                                        class="text-[14px] text-[#093093]"
                                        to="/"
                                        >Sua face é seu acesso</NuxtLink
                                    >
                                </li>
                                <li
                                    class="py-[20px] border-b border-b-[#4D6BB8] border-opacity-[0.2]"
                                >
                                    <NuxtLink
                                        class="text-[14px] text-[#4D6BB8] flex items-center justify-between"
                                        to="/"
                                        >Eventos
                                        <svg
                                            class="mr-3"
                                            width="8"
                                            height="10"
                                            viewBox="0 0 8 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z"
                                                fill="#F7691A"
                                            />
                                        </svg>
                                    </NuxtLink>
                                </li>
                                <li
                                    class="py-[20px] border-b border-b-[#4D6BB8] border-opacity-[0.2]"
                                >
                                    <NuxtLink
                                        class="text-[14px] text-[#4D6BB8] flex items-center justify-between"
                                        to="/"
                                        >Quem somos
                                        <svg
                                            class="mr-3"
                                            width="8"
                                            height="10"
                                            viewBox="0 0 8 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8 5L0.5 9.33013L0.5 0.669872L8 5Z"
                                                fill="#F7691A"
                                            />
                                        </svg>
                                    </NuxtLink>
                                </li>
                            </ul>
                            <NuxtLink
                                class="flex items-center justify-center text-[14px] text-[#093093] gap-2 py-[20px]"
                                to="/"
                                ><svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M6.60002 15.8346H4.84002C3.86762 15.8346 3.08002 15.047 3.08002 14.0746V5.27465C3.08002 4.30225 3.86762 3.51465 4.84002 3.51465H17.16C18.1324 3.51465 18.92 4.30225 18.92 5.27465V14.0746C18.92 15.047 18.1324 15.8346 17.16 15.8346H11.77L8.06522 19.1302C7.49762 19.6354 6.60002 19.2323 6.60002 18.4729V15.8346Z"
                                        stroke="#F7691A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6.60004 7.47125H15.4"
                                        stroke="#F7691A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M6.60004 11.4312H12.76"
                                        stroke="#F7691A"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Entre em contato</NuxtLink
                            >
                            <button
                                class="h-[40px] w-full bg-ui-orange text-white font-[700] rounded-full text-[14px]"
                            >
                                Entrar em contato
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
