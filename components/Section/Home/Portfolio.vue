<script setup lang="ts">
import { portfolios as data } from './dataDumy'

const animation = useAnimation()

interface Portfolio {
    id: number
    title: string
    preview: string
    tags: string[]
    github: string
    link_review: string
}
const portfolios = ref<Portfolio[]>()

onMounted(() => {
    portfolios.value = data.reverse()
    animation.fade('.porfolio', { y: 100 })
})
</script>

<template>
    <div class="sm:mt-[100px] lg:mt-[268px] porfolio">
        <div class="flex flex-col items-center">
            <h1
                class="text-center text-4xl drop-shadow italic shadow-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
            >
                My Portfolio
            </h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <template
                v-for="(portfolio, index) in portfolios"
                :key="portfolio.id"
            >
                <div
                    v-if="index < 5"
                    class="group bg-gray-800 relative rounded-3xl overflow-hidden shadow-white drop-shadow-lg hover:-translate-y-2 hover:bg-gray-900 transition-all"
                >
                    <img
                        :src="portfolio.preview"
                        :alt="portfolio.title"
                        class="w-full object-cover h-[210px] lg:h-[270px] max-h-[270px]"
                    />

                    <div class="p-5">
                        <h2 class="text-xl text-slate-300 font-bold">
                            {{ portfolio.title }}
                        </h2>

                        <div class="flex items-center flex-wrap gap-2 mt-3">
                            <UBadge
                                v-for="tag in portfolio.tags"
                                :key="tag"
                                variant="solid"
                                size="lg"
                            >
                                {{ tag }}
                            </UBadge>
                        </div>
                    </div>

                    <div
                        class="absolute hidden group-hover:block inset-0 bg-gray-900/50 transition-all duration-300"
                    >
                        <div
                            class="flex gap-4 justify-center items-center h-full"
                        >
                            <UButton
                                icon="mdi:github"
                                size="xl"
                                variant="solid"
                                color="gray"
                            ></UButton>
                            <UButton
                                icon="icon-park-outline:preview-open"
                                size="xl"
                                variant="solid"
                                color="gray"
                            ></UButton>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div class="mt-4 text-center">
            <UButton
                label="See more work"
                size="lg"
                color="gray"
                :ui="{ rounded: 'rounded-full', base: 'font-semibold' }"
            >
                <template #trailing>
                    <Icon name="material-symbols:arrow-right-alt" />
                </template>
            </UButton>
        </div>
    </div>
</template>

<style scoped></style>
