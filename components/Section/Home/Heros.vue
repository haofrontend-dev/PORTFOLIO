<template>
    <div class="hero">
        <div class="flex flex-col items-center justify-center relative">
            <div class="px-3 lg:w-1/2 text-center">
                <div class="space-y-8 relative z-10">
                    <img
                        class="w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] lg:w-[213px] lg:h-[213px] object-cover rounded-full mx-auto hero-avatar"
                        src="~/assets/img/hero.jpg"
                        alt="Hero image"
                    />
                    <h1
                        class="text-3xl sm:text-5xl lg:text-7xl italic drop-shadow-md hero-title"
                    >
                        Hello, I am
                        <strong
                            class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text hover:-skew-x-2"
                        >
                            Nguyen Quoc Hao
                        </strong>
                    </h1>
                    <p
                        class="hero-desc text-sm sm:text-lg lg:text-xl shadow-sm drop-shadow text-slate-400"
                    >
                        An expert Front-end developer in Vue.js and Nuxt.js,
                        with experience in cross-platform application and
                        website development
                    </p>
                </div>
            </div>

            <div
                class="absolute inset-x-0 m-auto h-80 max-w-lg bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC] blur-[118px]"
            ></div>

            <div class="flex items-center justify-center gap-10 my-5">
                <UButton
                    label="See more work"
                    size="lg"
                    :ui="{ rounded: 'rounded-full', base: 'font-semibold' }"
                >
                    <template #trailing>
                        <Icon name="material-symbols:arrow-right-alt" />
                    </template>
                </UButton>
                <UButton
                    color="black"
                    variant="solid"
                    size="lg"
                    :ui="{ rounded: 'rounded-full', base: 'font-semibold' }"
                >
                    <ULink>Download CV</ULink>
                    <template #trailing>
                        <Icon name="material-symbols:download" />
                    </template>
                </UButton>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const animation = useAnimation()

onMounted(() => {
    animation.fade('.hero-title', { y: 100 })
    animation.fade('.hero-desc', { y: -100 })
    animation.fade('.hero-avatar', { x: -100 })
})
</script>

<style scoped></style>
