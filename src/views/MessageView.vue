<template>
    <div class="message-container" :class="{'active': isActive}" >
        <div class="image">
            <img :src="img" alt="">

        </div>
        <div class="message-body">
            <div class="part">
              <p class="heading">{{ name }}</p>
              <p class="message-text">{{message}}</p>
            </div>
            <div class="time">{{ time }}</div>
        
        </div>
    </div>

</template>

<script setup lang="ts">

defineProps({
    isActive:Boolean,
    name:String,
    message:String,
    img:String,
    time:String,

})


</script>

<style scoped>
.message-container{
@apply text-sm cursor-pointer border-dull-white border-l-4 p-4 border-l-transparent border-b-2  bg-bg-secondary-dark  flex justify-start;

}
.message-body{
    @apply flex flex-1  justify-between  ;
    
}
.message-text{
    @apply w-80 text-sm font-normal  whitespace-nowrap overflow-hidden text-ellipsis ;

}
.image{
    @apply w-14 h-14 rounded-full overflow-hidden;
}
img{
    @apply  object-cover;
}
.heading{
    @apply font-bold pb-1;
}
.part{
    @apply  flex flex-col justify-center   ml-4 ;
}
.time{
    @apply text-icon-color font-medium text-xs  min-w-fit ;
}
.active{
@apply border-l-red-highlight bg-active-chat border-y-0;

}
</style>