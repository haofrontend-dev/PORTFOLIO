<template>
    <div
        :class="
            cn(
                'absolute m-auto h-80 max-w-lg bg-gradient-to-tr from-indigo-400 via-teal-900 to-[#C084FC] blur-[118px]',
                ui?.wrapper
            )
        "
    />
</template>

<script setup lang="ts">
import { cn } from '~/utils'
interface Props {
    ui?: {
        wrapper?: string
    }
}
defineProps<Props>()
</script>

<style scoped></style>
