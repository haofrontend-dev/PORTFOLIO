<script setup lang="ts">
const links = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'About',
        to: '/about',
    },
    {
        label: 'Portfolio',
        to: '/portfolio',
    },
]
</script>

<template>
    <header class="w-full h-[100px] shadow rounded flex items-center">
        <UContainer class="w-full">
            <div class="flex items-center justify-between">
                <UButton
                    class="lg:hidden"
                    icon="iconamoon:menu-burger-horizontal"
                    size="lg"
                    variant="solid"
                />
                <UButton
                    icon="material-symbols:phone-in-talk-watchface-indicator"
                    size="lg"
                    color="white"
                    variant="solid"
                    label="Contact"
                    :trailing="false"
                    :ui="{ rounded: 'rounded-full' }"
                    class="lg:flex hidden"
                    to="tel:+0393855939"
                />

                <UVerticalNavigation
                    :ui="{
                        wrapper: 'flex items-center gap-4 horizontal',
                        base: 'py-2 px-4',
                        active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
                    }"
                    class="hidden lg:flex"
                    :links="links"
                />

                <div class="flex items-center gap-4">
                    <div class="space-x-2 lg:flex hidden">
                        <UButton
                            icon="ic:baseline-facebook"
                            size="sm"
                            color="gray"
                            square
                            :ui="{
                                rounded: 'rounded-full',
                            }"
                        />

                        <UButton
                            icon="line-md:instagram"
                            size="sm"
                            color="gray"
                            square
                            :ui="{
                                rounded: 'rounded-full',
                            }"
                        />

                        <UButton
                            icon="mdi:linkedin"
                            size="sm"
                            color="gray"
                            square
                            :ui="{
                                rounded: 'rounded-full',
                            }"
                        />

                        <UButton
                            icon="ri:twitter-x-line"
                            size="sm"
                            color="gray"
                            square
                            :ui="{
                                rounded: 'rounded-full',
                            }"
                        />
                    </div>

                    <UButton
                        icon="material-symbols:phone-in-talk-watchface-indicator"
                        size="lg"
                        color="primary"
                        variant="solid"
                        label="Contact"
                        :trailing="false"
                        :ui="{ rounded: 'rounded-full' }"
                        >Works</UButton
                    >
                </div>
            </div>
        </UContainer>
    </header>
</template>

<style>
.horizontal ul {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>
