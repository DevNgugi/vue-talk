<template>
<div class="container">
    <div class="sidenav">
        sidenav
    </div>
    <div class="chatnav">
            chatnav
    </div>
    <div class="chatview">
        chatview
    </div>
</div>
  </template>
  
  
  <style   >
.container{
    @apply flex  w-full h-screen;
}
.sidenav{
    @apply w-1/12 bg-black text-white;

}
.chatnav{
    @apply w-1/3  bg-blue-200 text-white;

}
.chatview{
    @apply w-7/12  bg-blue-300
}

</style>

<script setup></script>