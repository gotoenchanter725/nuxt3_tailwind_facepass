<script setup>
const { item } = defineProps(["item"]);
</script>

<template>
    <div
        class="bg-[rgba(255,255,255,0.05)] text-center px-[18px] h-[292px] py-[40px] rounded-[12px] bg-[url('~/assets/images/event/card-border.png')] bg-no-repeat bg-cover"
    >
        <div
            class="bg-[rgba(52,130,195,0.3)] h-[68px] w-[68px] rounded-full flex items-center justify-center mx-auto"
        >
            <div
                class="h-[56px] w-[56px] rounded-full bg-ui-blue flex items-center justify-center"
            >
                <span v-html="item.icon"></span>
            </div>
        </div>

        <h4 class="text-[16px] text-white font-[600] pt-[22px] pb-[10px]">
            {{ item.title }}
        </h4>
        <p class="text-[14px] text-white font-[300] px-[1rem]">
            {{ item.description }}
        </p>
    </div>
</template>
