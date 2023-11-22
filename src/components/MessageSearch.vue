<template>
    <div class="searchContainer">
        <input type="text" placeholder="Search Messages ...">
        <span><i class="fa fa-search text-lg "></i></span>
    </div>
</template>

<script setup>
  
</script>

<style scoped>
span{
    @apply flex mb-3 flex-col justify-center text-icon-color p-2 pr-6  outline-none rounded-r-full bg-bg-main-dark;
}
input{
    @apply p-4 mb-3 text-sm outline-none rounded-l-full w-9/12 pl-8  bg-bg-main-dark;
}
.searchContainer{
    @apply flex justify-center pt-6 pb-6 border-b-2 border-dull-white sticky bg-bg-secondary-dark top-0  ;
}
</style>