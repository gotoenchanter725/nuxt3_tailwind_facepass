<script setup>
const { avatar } = defineProps(["avatar"]);
</script>

<template>
    <div
        class="h-[310px] relative ui-bg-profile rounded-[12px] shadow-xl flex flex-col justify-end overflow-hidden"
    >
        <!-- avart  -->
        <img
            class="ui-avatar h-full object-contain w-full rounded-[12px] opacity-[0.6]"
            :src="avatar.img"
        />
        <!-- avatar frame -->
        <img
            class="ui-frame ui-frame-mobile hidden absolute top-[90px] left-1/2 transform -translate-x-1/2 z-10"
            src="~/assets/images/hero/frame-mobile.png"
        />
        <!-- avatar info -->
        <div
            class="ui-info ui-info-mobile hidden absolute md:w-[344px] left-1/2 transform -translate-x-1/2 z-20 items-center justify-between bottom-[60px]"
        >
            <p class="text-[8px] text-white font-[700] w-[50px]">
                <svg
                    class="mb-1"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.4"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.63998 0.948975V0.948975C8.37092 0.948975 10.5842 3.16221 10.5842 5.89315V5.89315C10.5842 8.6241 8.37092 10.8373 5.63998 10.8373V10.8373C2.90903 10.8373 0.695801 8.6241 0.695801 5.89315V5.89315C0.695801 3.16221 2.90903 0.948975 5.63998 0.948975Z"
                        stroke="#1CF94D"
                        stroke-width="0.988836"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M7.58216 4.65723L5.11007 7.30589L3.87402 5.98156"
                        stroke="#1CF94D"
                        stroke-width="0.988836"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                {{ avatar.name }}
            </p>
            <p class="text-[9px] text-white font-[500] w-[60px] text-right">
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
.ui-frame-mobile {
    top: 33px;
}
.ui-info-mobile {
    width: 100%;
    padding: 0 10px;
}
</style>
