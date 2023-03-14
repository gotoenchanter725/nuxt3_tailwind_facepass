<script>
import SmartPhoneCard from "./../SmartPhoneCard.vue";

export default {
    components: { SmartPhoneCard },
};
</script>

<template>
    <section class="bg-ui-dark-blue relative z-10 lg:-top-[100px] -top-[32px]">
        <div class="container relative">
            <div
                class="flex md:flex-row flex-col items-center justify-between py-[50px] border-b border-b-[#E0EDFD] border-opacity-[0.2] relative z-[10]"
            >
                <div class="flex md:flex-row flex-col items-center lg:gap-4">
                    <img
                        class="w-[138px]"
                        src="~/assets/images/smartphone/avatars.png"
                        alt="avatars"
                    />
                    <h4
                        class="text-[18px] text-white font-[600] text-center md:text-left py-[20px] md:py-0"
                    >
                        Já somos mais 102 usuários do Facepass
                    </h4>
                </div>

                <button
                    class="h-[56px] w-[229px] bg-ui-orange text-white font-[700] rounded-full"
                >
                    Entrar em contato
                </button>
            </div>
            <div class="py-[100px]">
                <div class="md:w-[684px] mx-auto text-center">
                    <h2
                        class="md:text-[56px] text-[32px] text-white font-[600] leading-[2.6rem] md:leading-[3.5rem] pb-8"
                    >
                        No Facepass, seu smartphone abre portas
                    </h2>
                    <p class="text-[16px] text-[#E0EDFD] font-[300]">
                        Nossa tecnologia é descentralizada porque usamos um
                        aplicativo, o Facepass Pessoal. No app, a pessoa
                        cadastra sua biometria direto no smartphone, sem sair de
                        casa.
                    </p>
                </div>
            </div>
            <img
                class="md:block absolute md:right-[4rem] md:bottom-[13rem] bottom-[49rem] z-10 w-[214.92px] md:w-auto left-1/2 md:left-auto transform -translate-x-1/2 md:-translate-x-0"
                src="~/assets/images/smartphone/phone.png"
            />
            <SmartPhoneCard />
            <!-- overlay -->
            <svg
                class="absolute right-0 bottom-[8rem]"
                width="755"
                height="957"
                viewBox="0 0 755 957"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_6_4924)">
                    <path
                        d="M507.952 291.473C457.213 166.332 316.656 200.821 252.72 233.708C189.807 267.447 202.083 341.571 208.221 386.045C214.359 430.519 280.852 756.153 507.952 772C735.053 787.847 739.656 610.972 626.106 554.229C512.556 497.486 571.377 447.9 507.952 291.473Z"
                        fill="#3482C3"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_6_4924"
                        x="0"
                        y="0"
                        width="902"
                        height="976"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="101.5"
                            result="effect1_foregroundBlur_6_4924"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
        <!-- overlay -->
        <svg
            class="absolute left-0 top-0"
            width="307"
            height="796"
            viewBox="0 0 307 796"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_f_6_4923)">
                <path
                    d="M103.175 171.479C115.673 47.2902 -69.4423 20.351 -123.62 31.7964C-177.436 44.2732 -196.548 112.957 -208.824 153.83C-221.1 194.704 -296.786 499.885 -153.025 576.131C-9.26389 652.377 84.5842 435.42 84.5842 435.42C84.5842 435.42 87.552 326.714 103.175 171.479Z"
                    fill="#3482C3"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_6_4923"
                    x="-442.667"
                    y="-173.595"
                    width="749.446"
                    height="968.968"
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
                        result="effect1_foregroundBlur_6_4923"
                    />
                </filter>
            </defs>
        </svg>
    </section>
</template>
