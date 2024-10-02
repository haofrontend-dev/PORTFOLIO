<script setup lang="ts">
const animation = useAnimation()
const info = {
    name: 'Nguyen Quoc Hao',
    email: 'haoqn.work@gmail',
    address: 'TP. Nha Trang',
    gender: 'male',
    age: '24',
    birthday: '01-10-2000',
    job: 'Developer, Teacher',
}
onMounted(() => {
    animation.fade('.about-image', { x: -100 })
    animation.fade('.about-info', { x: 100 })
})
</script>

<template>
    <div class="relative">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            <div class="flex items-center justify-center about-image">
                <img src="~/assets/img/hero.jpg" alt="Hero image" />
            </div>
            <div class="p-5 text-center about-info">
                <h1
                    class="text-3xl sm:text-5xl lg:text-7xl italic drop-shadow shadow-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
                >
                    About me
                </h1>
                <p
                    class="text-sm sm:text-base shadow-sm drop-shadow text-slate-400 mt-5 text-left"
                >
                    I am an expert Front-end developer and Back-end developer,
                    with experience in cross-platform application and website
                    development
                </p>
                <table class="mt-12 w-full text-left">
                    <tbody>
                        <tr>
                            <td class="text-slate-400 font-bold">Name:</td>
                            <td class="text-slate-400">{{ info.name }}</td>
                        </tr>
                        <tr>
                            <td class="text-slate-400 font-bold">Birthday:</td>
                            <td class="text-slate-400">
                                {{ info.birthday }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-slate-400 font-bold">Email:</td>
                            <td class="text-slate-400">{{ info.email }}</td>
                        </tr>
                        <tr>
                            <td class="text-slate-400 font-bold">Address:</td>
                            <td class="text-slate-400">{{ info.address }}</td>
                        </tr>
                        <tr>
                            <td class="text-slate-400 font-bold">Gender:</td>
                            <td class="text-slate-400 uppercase">
                                {{ info.gender }}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-slate-400 font-bold">Age:</td>
                            <td class="text-slate-400">{{ info.age }}</td>
                        </tr>
                        <tr>
                            <td class="text-slate-400 font-bold">Job:</td>
                            <td class="text-slate-400">{{ info.job }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <AppBgGradient
            :ui="{
                wrapper:
                    'top-0 -z-10 left-0 h-[300px] sm:h-[500px] lg:h-[700px] w-full',
            }"
        />

        <AppBgGradient
            :ui="{
                wrapper: 'top-0 -z-10 -right-[100px] h-[150px] w-[150px]',
            }"
        />
    </div>
</template>

<style scoped></style>
