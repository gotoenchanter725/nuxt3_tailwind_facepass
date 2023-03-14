<script>
import { faqSelect, faqStore } from "~~/composables/states";
export default {
    setup() {
        const faqs = faqStore();
        const faqSelected = faqSelect();
        return {
            faqs,
            faqSelected,
        };
    },
    methods: {
        // collapse
        collapseHandler(v) {
            if (this.faqSelected === v) {
                return (this.faqSelected = null);
            }
            this.faqSelected = v;
        },
    },
};
</script>

<template>
    <div class="md:w-[696px] mt-8 mb:mt-0">
        <div
            v-for="faq in faqs"
            v-bind:key="faq.id"
            :class="`border-b border-b-[#F5F5F5] ${
                faqSelected === faq.id
                    ? 'border-b-[#F7691A]'
                    : 'border-b-[#F5F5F5]'
            }`"
        >
            <button
                @click="collapseHandler(faq.id)"
                class="flex items-center justify-between w-full pb-[34px] pt-[34px] gap-[20px] md:gap-[20%]"
            >
                <div class="flex items-center gap-5">
                    <h4
                        :class="`text-[24px] font-[600] ${
                            faqSelected === faq.id
                                ? 'text-[#093093]'
                                : 'text-[#555867]'
                        }`"
                    >
                        0{{ faq.id }}
                    </h4>
                    <p
                        :class="`text-[16px] text-left ${
                            faqSelected === faq.id
                                ? 'text-[#1A191B] font-[600]'
                                : 'text-[#555867]'
                        }`"
                    >
                        {{ faq.title }}
                    </p>
                </div>
                <div class="self-start md:self-center">
                    <svg
                        v-if="faqSelected !== faq.id"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 10.6667V21.3334V10.6667Z"
                            fill="#F7691A"
                        />
                        <path
                            d="M16 10.6667V21.3334"
                            stroke="#F7691A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M21.3333 15.9999H10.6667"
                            stroke="#F7691A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 28V28C9.372 28 4 22.628 4 16V16C4 9.372 9.372 4 16 4V4C22.628 4 28 9.372 28 16V16C28 22.628 22.628 28 16 28Z"
                            stroke="#F7691A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <svg
                        v-if="faqSelected === faq.id"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 28C9.372 28 4 22.628 4 16C4 9.372 9.372 4 16 4C22.628 4 28 9.372 28 16C28 22.628 22.628 28 16 28Z"
                            fill="#F7691A"
                        />
                        <path
                            d="M21.3333 15.9999H10.6667"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </button>
            <div
                :class="`transition-all duration-150 ${
                    faqSelected === faq.id ? 'pb-[30px]' : 'h-0 overflow-hidden'
                }`"
            >
                <p class="text-[14px] text-[#555867]">
                    É muito fácil. O público pode baixar o nosso app Facepass
                    Pessoal e cadastrar uma selfie e os dados pessoais. As
                    empresas podem criar eventos, permitir a entrada do público,
                    monitorar consumo e pagamentos. Tudo com reconhecimento
                    facial.
                </p>
            </div>
        </div>
    </div>
</template>
