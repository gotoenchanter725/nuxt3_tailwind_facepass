<script>
export default {
    methods: {
        scrollTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
    },
};
</script>

<template>
    <footer
        class="bg-[url(~/assets/images/footer/footer.png)] bg-no-repeat bg-cover"
    >
        <div class="container">
            <!-- footer top -->
            <nav class="py-[38px]">
                <div class="grid lg:grid-cols-3 grid-cols-1">
                    <div
                        class="flex items-center justify-center md:justify-start gap-[48px] mb-[20px] md:mb-0"
                    >
                        <NuxtLink
                            class="relative before:content-[''] before:absolute before:h-[13px] before:w-[1px] before:bg-[#3482c380] before:top-1/2 before:transform before:-translate-y-1/2 before:-right-7 before:hidden before:md:block"
                            to="/"
                        >
                            <img
                                src="~/assets/images/logo/logo.png"
                                alt="logo"
                            />
                        </NuxtLink>
                        <NuxtLink
                            class="hidden md:block text-[14px] text-white font-[400]"
                            to="/"
                        >
                            Sua face é seu acesso
                        </NuxtLink>
                    </div>
                    <div
                        class="flex md:flex-row flex-col items-center gap-[20px] md:gap-[36px] mx-auto"
                    >
                        <NuxtLink
                            class="text-[14px] text-white font-[400]"
                            to="/"
                        >
                            Eventos
                        </NuxtLink>
                        <NuxtLink
                            class="text-[14px] text-white font-[400]"
                            to="/"
                        >
                            Quem somos
                        </NuxtLink>
                    </div>
                    <div
                        class="flex md:flex-row flex-col items-center justify-end md:gap-[30px] gap-[20px] mt-[20px] md:mt-0"
                    >
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
            </nav>
            <div
                class="pb-[28px] flex items-center justify-between border-b border-b-[#4D6BB8]"
            >
                <ul class="flex items-center gap-[14px]">
                    <li>
                        <a href="#">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.15146 5.99725C5.15846 5.99725 5.97479 5.18092 5.97479 4.17392C5.97479 3.16692 5.15846 2.35059 4.15146 2.35059C3.14446 2.35059 2.32812 3.16692 2.32812 4.17392C2.32812 5.18092 3.14446 5.99725 4.15146 5.99725Z"
                                    fill="#E0EDFD"
                                />
                                <path
                                    d="M7.69646 7.37891V17.4947H10.8373V12.4922C10.8373 11.1722 11.0856 9.89391 12.7223 9.89391C14.3365 9.89391 14.3565 11.4031 14.3565 12.5756V17.4956H17.499V11.9481C17.499 9.22307 16.9123 7.12891 13.7273 7.12891C12.1981 7.12891 11.1731 7.96807 10.754 8.76224H10.7115V7.37891H7.69646ZM2.57812 7.37891H5.72396V17.4947H2.57812V7.37891Z"
                                    fill="#E0EDFD"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.1635 17.4976V10.6676H13.4677L13.8102 7.99347H11.1635V6.29014C11.1635 5.51847 11.3785 4.99014 12.486 4.99014H13.8894V2.60597C13.2066 2.5328 12.5202 2.49747 11.8335 2.50014C9.79688 2.50014 8.39854 3.74347 8.39854 6.02597V7.98847H6.10938V10.6626H8.40354V17.4976H11.1635Z"
                                    fill="#E0EDFD"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99786 6.14746C8.9759 6.14746 7.99579 6.55344 7.27315 7.27608C6.55051 7.99872 6.14453 8.97883 6.14453 10.0008C6.14453 11.0228 6.55051 12.0029 7.27315 12.7255C7.99579 13.4482 8.9759 13.8541 9.99786 13.8541C11.0198 13.8541 11.9999 13.4482 12.7226 12.7255C13.4452 12.0029 13.8512 11.0228 13.8512 10.0008C13.8512 8.97883 13.4452 7.99872 12.7226 7.27608C11.9999 6.55344 11.0198 6.14746 9.99786 6.14746ZM9.99786 12.5033C9.33394 12.5033 8.69721 12.2396 8.22774 11.7701C7.75827 11.3006 7.49453 10.6639 7.49453 9.99996C7.49453 9.33604 7.75827 8.6993 8.22774 8.22984C8.69721 7.76037 9.33394 7.49663 9.99786 7.49663C10.6618 7.49663 11.2985 7.76037 11.768 8.22984C12.2375 8.6993 12.5012 9.33604 12.5012 9.99996C12.5012 10.6639 12.2375 11.3006 11.768 11.7701C11.2985 12.2396 10.6618 12.5033 9.99786 12.5033Z"
                                    fill="#E0EDFD"
                                />
                                <path
                                    d="M14.0038 6.90409C14.4999 6.90409 14.9021 6.50189 14.9021 6.00575C14.9021 5.50962 14.4999 5.10742 14.0038 5.10742C13.5077 5.10742 13.1055 5.50962 13.1055 6.00575C13.1055 6.50189 13.5077 6.90409 14.0038 6.90409Z"
                                    fill="#E0EDFD"
                                />
                                <path
                                    d="M17.1092 5.09224C16.9163 4.59406 16.6214 4.14164 16.2436 3.76396C15.8658 3.38627 15.4133 3.09163 14.915 2.89891C14.3319 2.68004 13.716 2.56169 13.0933 2.54891C12.2908 2.51391 12.0367 2.50391 10.0017 2.50391C7.96667 2.50391 7.70583 2.50391 6.91 2.54891C6.28782 2.56104 5.6723 2.67941 5.09 2.89891C4.59161 3.09141 4.13897 3.38596 3.76111 3.76368C3.38325 4.14139 3.08852 4.59393 2.89583 5.09224C2.67692 5.67525 2.55885 6.29127 2.54667 6.91391C2.51083 7.71557 2.5 7.96974 2.5 10.0056C2.5 12.0406 2.5 12.2997 2.54667 13.0972C2.55917 13.7206 2.67667 14.3356 2.89583 14.9197C3.08906 15.4179 3.38408 15.8702 3.76203 16.2479C4.13998 16.6255 4.59255 16.9202 5.09083 17.1131C5.67203 17.3407 6.28781 17.4676 6.91167 17.4881C7.71417 17.5231 7.96833 17.5339 10.0033 17.5339C12.0383 17.5339 12.2992 17.5339 13.095 17.4881C13.7176 17.4754 14.3335 17.3574 14.9167 17.1389C15.4148 16.9457 15.8672 16.6508 16.245 16.273C16.6228 15.8953 16.9177 15.4429 17.1108 14.9447C17.33 14.3614 17.4475 13.7464 17.46 13.1231C17.4958 12.3214 17.5067 12.0672 17.5067 10.0314C17.5067 7.99557 17.5067 7.73724 17.46 6.93974C17.4503 6.3083 17.3316 5.68328 17.1092 5.09224ZM16.0942 13.0356C16.0888 13.5158 16.0011 13.9916 15.835 14.4422C15.7099 14.7663 15.5183 15.0606 15.2726 15.3061C15.0269 15.5517 14.7325 15.7431 14.4083 15.8681C13.9627 16.0334 13.492 16.1211 13.0167 16.1272C12.225 16.1639 12.0017 16.1731 9.97167 16.1731C7.94 16.1731 7.7325 16.1731 6.92583 16.1272C6.45077 16.1214 5.98027 16.0338 5.535 15.8681C5.20974 15.7439 4.91417 15.5528 4.66741 15.3072C4.42065 15.0616 4.2282 14.7669 4.1025 14.4422C3.93871 13.9964 3.85109 13.5263 3.84333 13.0514C3.8075 12.2597 3.79917 12.0364 3.79917 10.0064C3.79917 7.97557 3.79917 7.76807 3.84333 6.96057C3.84872 6.48059 3.93638 6.00509 4.1025 5.55474C4.35667 4.89724 4.8775 4.37974 5.535 4.12807C5.98049 3.96319 6.45085 3.87554 6.92583 3.86891C7.71833 3.83307 7.94083 3.82307 9.97167 3.82307C12.0025 3.82307 12.2108 3.82307 13.0167 3.86891C13.492 3.87462 13.9628 3.9623 14.4083 4.12807C14.7324 4.2533 15.0268 4.44491 15.2725 4.6906C15.5182 4.93629 15.7098 5.23063 15.835 5.55474C15.9988 6.00053 16.0864 6.47071 16.0942 6.94557C16.13 7.73807 16.1392 7.96057 16.1392 9.99141C16.1392 12.0214 16.1392 12.2397 16.1033 13.0364H16.0942V13.0356Z"
                                    fill="#E0EDFD"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2.80999 15.6455C2.49618 15.5526 2.20985 15.3874 1.97517 15.1639C1.74048 14.9403 1.56432 14.665 1.46156 14.361C0.874337 12.7899 0.700345 6.22954 1.83129 4.93446C2.20769 4.51316 2.73911 4.25377 3.31022 4.21261C6.34419 3.89414 15.718 3.93661 16.7946 4.31876C17.0974 4.41466 17.374 4.5762 17.6038 4.7913C17.8335 5.00639 18.0104 5.26945 18.1212 5.56077C18.7628 7.18494 18.7846 13.0871 18.0342 14.6476C17.8352 15.0538 17.502 15.3828 17.0882 15.5818C15.9572 16.1338 4.31067 16.1231 2.80999 15.6455ZM7.62738 12.567L13.0646 9.80695L7.62738 7.0257V12.567Z"
                                    fill="#E0EDFD"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
                <div>
                    <button
                        @click="scrollTop"
                        class="flex items-center gap-3 text-[14px] text-[#E0EDFD]"
                    >
                        <div
                            class="h-[24px] w-[24px] bg-ui-orange rounded-full flex items-center justify-center"
                        >
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 4.80005L5 0.800048L1 4.80005"
                                    stroke="white"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                        Voltar ao topo
                    </button>
                </div>
            </div>
            <div class="pt-[48px] pb-[40px]">
                <ul
                    class="flex md:flex-row flex-col items-center justify-between"
                >
                    <li class="text-[14px] text-[#E0EDFD] pb-4 md:pb-0">
                        © 2023 - Todos os direitos reservados
                    </li>
                    <li
                        class="text-[14px] text-[#E0EDFD] flex items-center gap-3"
                    >
                        Design by:
                        <svg
                            width="23"
                            height="15"
                            viewBox="0 0 23 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.6327 9.99232L9.23047 12.3945L11.6327 14.7967L14.035 12.3945L11.6327 9.99232Z"
                                fill="#F7691A"
                            />
                            <path
                                d="M16.6123 15H23L14.9147 0.625H8.52364L11.221 5.4161H5.37785L0 15H6.38767L11.4958 5.90592L16.6123 15Z"
                                fill="white"
                            />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>
