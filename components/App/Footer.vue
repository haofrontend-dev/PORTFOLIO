<template>
    <div class="relative py-10 border-t border-slate-800">
        <div class="flex items-center justify-center flex-col gap-6">
            <img
                src="~/assets/img/hero.jpg"
                class="w-[100px] h-[100px] rounded-full"
            />
            <h3
                class="text-xlmy-8 italic font-semibold shadow-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
            >
                Nguyen Quoc Hao Developer
            </h3>

            <ULink
                to="https://www.nqhaodeveloper.com"
                target="_blank"
                class="text-sm text-slate-400 hover:text-slate-300"
                >www.nqhaodeveloper.com</ULink
            >

            <UButton
                label="Contact me"
                size="lg"
                :ui="{ rounded: 'rounded-full', base: 'font-semibold' }"
                to="mailto:haoqn.work@gmail.com"
                icon="mdi:email"
            >
            </UButton>
            <p class="text-sm text-slate-400">
                2023 - Copyright
                <span class="font-semibold">Nguyen Quoc Hao</span>
            </p>
        </div>

        <div
            class="absolute top-0 left-0 m-auto w-40 h-40 max-w-lg bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC] blur-[118px]"
        ></div>

        <div
            class="absolute bottom-0 right-0 m-auto w-40 h-40 max-w-lg bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC] blur-[118px]"
        ></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
