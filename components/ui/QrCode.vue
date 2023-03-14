<script>
import QrCodeCard from "~~/components/QrCodeCard.vue";
import { workCards, workCardSelect } from "~~/composables/states";

export default {
    setup() {
        const works = workCards();
        const workSelect = workCardSelect();
        return {
            works,
            workSelect,
        };
    },
    methods: {
        tabHandler(v) {
            this.workSelect = parseInt(v);
        },
    },
    computed: {
        // tab filter
        filterWorkCard() {
            return this.works.filter((item) => item.type == this.workSelect);
        },
    },
    components: {
        QrCodeCard,
    },
};
</script>

<template>
    <div
        class="bg-[url(~/assets/images/qr/qr-bg.png)] bg-no-repeat bg-center bg-cover"
    >
        <section class="pt-[147px]">
            <div class="container">
                <div class="lg:w-[679px] w-[269px] mx-auto text-center">
                    <h2
                        class="lg:text-[46px] text-[32px] text-[#1A191B] font-[600] pb-2"
                    >
                        QR Code é coisa do passado!
                    </h2>
                    <p class="text-[16px] text-[#555867] font-[400]">
                        Nossa tecnologia permite a entrada em eventos, consumo e
                        pagamento com biometria.
                    </p>
                </div>
                <QrCodeCard />
            </div>
        </section>
        <section class="pt-[110px]">
            <div class="container">
                <div class="lg:w-[570px] mx-auto text-center">
                    <img
                        class="mx-auto"
                        src="~/assets/images/qr/work-head.svg"
                        alt="work head"
                    />
                    <h2
                        class="lg:text-[56px] text-[32px] text-[#111014] font-[600] leading-[3rem] lg:leading-[3.6rem] pt-6"
                    >
                        Entenda como funciona o Facepass
                    </h2>
                </div>
                <div class="pt-[60px] pb-[80px]">
                    <div
                        class="grid grid-cols-3 md:w-[756px] mx-auto h-[64px] bg-white rounded-full p-[6px]"
                    >
                        <button
                            @click="tabHandler(1)"
                            :class="`h-full w-full rounded-full md:text-[18px] text-[14px] ${
                                workSelect === 1
                                    ? 'bg-ui-orange text-white'
                                    : 'text-[#555867]'
                            }`"
                        >
                            Tudo no seu controle
                        </button>
                        <button
                            @click="tabHandler(2)"
                            :class="`h-full w-full rounded-full md:text-[18px] text-[14px] ${
                                workSelect === 2
                                    ? 'bg-ui-orange text-white'
                                    : 'text-[#555867]'
                            }`"
                        >
                            Experiência Facepass
                        </button>
                        <button
                            @click="tabHandler(3)"
                            :class="`h-full w-full rounded-full md:text-[18px] text-[14px] ${
                                workSelect === 3
                                    ? 'bg-ui-orange text-white'
                                    : 'text-[#555867]'
                            }`"
                        >
                            Análise de dados
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
                    <div v-for="work in filterWorkCard" v-bind:key="work.id">
                        <div>
                            <img class="w-full" :src="work.img" alt="" />
                        </div>
                        <div
                            class="bg-white text-center p-[40px] h-[238px] rounded-b-[12px]"
                        >
                            <h4
                                class="text-[24px] text-[#1A191B] font-[600] pb-4"
                            >
                                {{ work.title }}
                            </h4>
                            <p class="text-[16px] text-[#555867]">
                                {{ work.brif }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="relative lg:-bottom-[90px] mt-[40px] lg:mt-0">
            <img
                class="hidden lg:block w-full"
                src="~/assets/images/qr/work/work-bottom-img.png"
            />
            <img
                class="lg:hidden w-full"
                src="~/assets/images/qr/work/work-bottom-img-mobile.svg"
            />
        </section>
    </div>
</template>
