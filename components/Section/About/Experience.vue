<template>
    <div class="my-14 experience max-w-5xl mx-auto">
        <div
            v-for="experience in experiences"
            :key="experience.title"
            class="relative flex flex-col md:flex-row gap-5 md:gap-20 mb-10"
        >
            <div class="experience-date flex-shrink-0 w-[130px]">
                <UBadge
                    :ui="{
                        base: 'w-full',
                    }"
                >
                    {{ experience.date_start }} - {{ experience.date_end }}
                </UBadge>
            </div>
            <div class="flex flex-1 flex-col gap-2 experience-content">
                <h3
                    class="bg-gradient-to-r from-green-500 via-blue-500 to-indigo-400 text-transparent bg-clip-text text-xl italic font-semibold"
                >
                    {{ experience.company }}
                </h3>

                <h4 class="text-lg font-semibold">
                    {{ experience.title }}
                </h4>

                <p class="text-gray-800">{{ experience.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const animation = useAnimation()
const experiences = [
    {
        title: 'Front-end Developer',
        company: 'FREELANCER',
        desc: 'Develop web module on given projects.',
        date_start: '02/2023',
        date_end: '04/2023',
    },
    {
        title: 'Front-end NuxtJS',
        company: 'Remote for Nga',
        desc: 'Code the interface according to Figma in phase 1 and provide comments to be able to expand the source code in the long term, and optimize the source code to reduce the time to rewrite logic when combining the API.',
        date_start: '06/2023',
        date_end: '12/2023',
    },
    {
        title: 'Front-end and Back-end',
        company: 'Widosoft Technology and Communications Company Limited',
        desc: 'Participate in large projects and complete assigned tasks. Operated on basic server. Understand the working process.',
        date_start: '08/2023',
        date_end: '09/2024',
    },
]

onMounted(() => {
    animation.fade('.experience', { y: 100 })
})
</script>

<style scoped>
.experience-content {
    position: relative;
}
.experience-content::before {

    content: '';
    position: absolute;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: linear-gradient(to bottom, #00b09b, #96c93d);
    border-radius: 50%;
    top: 0;
    left: -35px;
}

.experience-content::after {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #00b09b, #96c93d);
    border-radius: 50%;
    top: 22px;
    left: -35px;
}

@media screen and (max-width: 767px) {
    .experience-content {
        padding-left: 30px;
    }

    .experience-content::before {
        top: 0;
        left: 0;
    }

    .experience-content::after {
        top: 22px;
        left: 0;
    }
}
</style>
