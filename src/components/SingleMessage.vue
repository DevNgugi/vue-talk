<template>
    <div  :class="{'justify-end':received}" class="single-chat-container" >
        <div v-if="received" class="time">{{ time }}</div>
        <div  v-if="!received" class="image">
            <img v-show="!prev" src="https://picsum.photos/300/300" alt="" /></div>
        <div class="message">{{ message }}</div>
        <div v-if="received" class="image">
            <img v-show="!prev" src="https://picsum.photos/300/300" alt="" /></div>
        <div v-if="!received" class="time">{{ time }}</div>


    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
    received:Boolean,
    message:String,
    time:String,
    prev:Boolean
})

</script>

<style scoped>
.single-chat-container{
@apply flex p-4  items-center gap-3
}
.image{
    @apply w-12 h-12 rounded-full overflow-hidden ;
}
img{
    @apply  object-cover;
}

.message{
    @apply text-sm font-normal rounded-sm bg-single-chat-bg p-3  max-w-xl
}
.time{
    @apply text-icon-color font-medium text-xs  min-w-fit  ;
}
</style>