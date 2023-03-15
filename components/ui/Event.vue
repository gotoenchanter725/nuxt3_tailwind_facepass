<script>
import EventCard from "~/components/EventCard.vue";
import { eventsCard } from "~~/composables/states";

export default {
    setup() {
        const events = eventsCard();
        return { events };
    },
    components: { EventCard },
};
</script>

<template>
    <section class="bg-ui-dark-blue">
        <div class="container">
            <div class="lg:w-[652px] mx-auto text-center">
                <img
                    class="mx-auto"
                    src="~/assets/images/event/envent-head.png"
                    alt="event icon"
                />
                <h4
                    class="lg:text-[46px] text-[32px] text-white font-[600] py-[30px] leading-[2.4rem] lg:leading-none"
                >
                    Crie um evento inesquecível
                </h4>
                <p
                    class="lg:text-[18px] text-[16px] text-[#E0EDFD] lg:w-[498px] w-[259px] mx-auto pb-[30px]"
                >
                    Configure o evento, venda ingressos e ofereça a melhor
                    experiência para o seu público.
                </p>
                <button
                    class="h-[56px] w-[229px] bg-ui-orange text-white font-[700] rounded-full"
                >
                    Entrar em contato
                </button>
            </div>
            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[83px] pb-[62px] gap-[32px]"
            >
                <div v-for="event in events" v-bind:key="event.id">
                    <EventCard :item="event" />
                </div>
            </div>
            <div
                class="lg:bg-[url(~/assets/images/event/user-photo.png)] bg-[url(~/assets/images/event/user-avatar-mobile.png)] lg:h-[638px] h-[525px] bg-no-repeat relative rounded-t-[20px] bg-cover lg:bg-center"
            >
                <div
                    class="relative left-1/2 transform -translate-x-1/2 lg:top-[113px] top-[116px] lg:w-[314px] w-[252.31px]"
                >
                    <img src="~/assets/images/event/user-avatar.png" />
                    <img
                        class="absolute left-1/2 transform -translate-x-1/2 top-[3rem] w-[150px] lg:w-auto"
                        src="~/assets/images/event/screen-frame.svg"
                    />
                    <img
                        class="absolute left-1/2 transform -translate-x-1/2 -top-[30px]"
                        src="~/assets/images/event/avatar-logo.png"
                    />
                    <ul
                        class="absolute bottom-[30px] flex items-center justify-between w-[220px] left-1/2 transform -translate-x-1/2"
                    >
                        <li class="text-[15px] text-white font-[700]">
                            Andre Ferreira
                        </li>
                        <li
                            class="text-[11px] text-white font-[600] text-right"
                        >
                            Verificação de cadastro na base de dados
                        </li>
                    </ul>
                </div>
                <img
                    class="absolute left-1/2 transform -translate-x-1/2 bottom-[62px] w-[16px] lg:w-auto"
                    src="~/assets/images/event/event-mark.png"
                />
                <div
                    class="w-[112px] absolute bg-white rounded-[16px] h-[90px] flex items-center justify-center -bottom-[45px] left-1/2 transform -translate-x-1/2 shadow-lg"
                >
                    <div class="text-center">
                        <img
                            class="mx-auto"
                            src="~/assets/images/event/event-hand.png"
                            alt="event hand"
                        />
                        <h4
                            class="text-[12px] text-[#1A191B] font-[600] pt-[8px]"
                        >
                            Acesso liberado
                        </h4>
                        <h4 class="text-[10px] text-[#555867] font-[400]">
                            Aproveite a festa
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div
            class="relative bg-[url(~/assets/images/event/event-bottom.png)] lg:h-[638px] h-[455px] bg-no-repeat bg-[length:250%] lg:bg-contain lg:mx-[4%] bg-center rounded-t-[12px] lg:rounded-none"
        >
            <img
                class="absolute bottom-[60px] left-1/2 transform -translate-x-1/2"
                src="~/assets/images/event/event-mark.png"
                alt="event mark"
            />
            <div
                class="w-[112px] absolute bg-white rounded-[16px] h-[90px] flex items-center justify-center -bottom-[45px] left-1/2 transform -translate-x-1/2 shadow-lg"
            >
                <div class="text-center">
                    <img
                        class="mx-auto"
                        src="~/assets/images/event/event-hand.png"
                        alt="event hand"
                    />
                    <h4 class="text-[12px] text-[#1A191B] font-[600] pt-[8px]">
                        Acesso liberado
                    </h4>
                    <h4 class="text-[10px] text-[#555867] font-[400]">
                        Aproveite a festa
                    </h4>
                </div>
            </div>
        </div> -->
    </section>
</template>
