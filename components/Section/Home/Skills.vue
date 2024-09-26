<script setup lang="ts">
const items = [
    'skill-icons:nuxtjs-dark',
    'skill-icons:javascript',
    'skill-icons:html',
    'skill-icons:css',
    'skill-icons:nodejs-dark',
    'skill-icons:react-dark',
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 2000)
})
</script>

<template>
    <div class="skill my-20">
        <h1
            class="text-center text-4xl drop-shadow italic shadow-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
        >
            Skills
        </h1>

        <div class="my-10">
            <Carousel
                :itemsToShow="3.95"
                :autoplay="2000"
                :wrapAround="true"
                :transition="500"
            >
                <Slide v-for="item in items" :key="item">
                    <Icon :name="item" size="7rem" />
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
