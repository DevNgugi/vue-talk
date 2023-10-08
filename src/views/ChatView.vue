<template>
    <div class="chat-container">
        <div class="image">
            <img src="https://picsum.photos/300/300" alt="">

        </div>
        <div class="chat-top">
            <div class="message-body">
                <div class="part">
                <p class="heading">Joan Wangari</p>
                <p class="message-text">blue</p>

                </div>
                <div class="time">Hello</div>
        
            </div>
        </div>
        <div class="chat-body">

        </div>

        <div class="chat-footer">

        </div>

    </div>
</template>

<script setup>
    
</script>

<style scoped>
.chat-container{
@apply text-sm cursor-pointer  p-4 flex justify-start;

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
</style>