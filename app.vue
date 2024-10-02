<script setup lang="ts">
useSeoMeta({
    title: 'Portfolio - Nguyen Quoc Hao Developer',
    ogTitle: 'Portfolio - Nguyen Quoc Hao Developer',
    description:
        'Nguyen Quoc Hao is an expert Front-end developer in Vue.js and Nuxt.js, with experience in cross-platform application and website development',
    ogDescription:
        'Nguyen Quoc Hao is an expert Front-end developer in Vue.js and Nuxt.js, with experience in cross-platform application and website development',
    ogImage: '~/assets/img/hero.jpg',
})
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
