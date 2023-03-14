<script>
import SolutionTabVue from "../SolutionTab.vue";
export default {
    components: {
        SolutionTabVue,
    },
};
</script>

<template>
    <section>
        <div class="container">
            <div class="lg:w-[498px] mx-auto text-center">
                <img
                    class="mx-auto w-[55.49px] md:w-auto"
                    src="~/assets/images/solution/head.png"
                    alt="solution head"
                />
                <h2
                    class="md:text-[46px] text-[#1A191B] font-[600] py-[20px] text-[32px]"
                >
                    Soluções Facepass
                </h2>
                <p class="text-[18px] text-[#4E4B59] font-[300]">
                    Nossa tecnologia foi feita para facilitar o acesso em
                    eventos. Mas não é só isso. Confira outras aplicações:
                </p>
            </div>
            <SolutionTabVue />
        </div>
    </section>
</template>
