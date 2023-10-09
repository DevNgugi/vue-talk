<script setup lang="ts">

import { useRouter, useRoute } from 'vue-router';
import 'font-awesome/css/font-awesome.min.css';
import MessageView from './MessageView.vue';
import MessageSearch from '../components/MessageSearch.vue';
import {userStore} from '../store/store'
import { ref ,watchEffect} from 'vue';
import ChatView from './ChatView.vue';

const users=userStore().users
const activeChat=ref(userStore().activeChat)

watchEffect(() => {
      activeChat.value = userStore().activeChat;
});

const setActive=(id)=>{
    userStore().setActiveChat(id);
}

const router = useRouter();

const logout=()=>{
    router.push('/login');
 }
</script>

<template>
<div class="app-container">
    <div class="sidenav">
        
        <div class="topnav">
            <li><i class="pi pi-bars"></i></li>
            <li class="active"><i class="pi pi-home"></i></li>
            <li><i class="pi pi-users"></i></li>
            <li><i class="pi pi-comments"></i></li>
            <li><i class="pi pi-cog"></i></li>
          
        </div>
        <li @click=logout ><i class="pi pi-power-off"></i></li>

    </div>
    <div class="chatnav">
            
            <MessageSearch/>
            <MessageView @click="setActive(user.id)" v-for="user in users" 
            :key=user.id 
            :img=user.img  
            :name=user.name 
            :message=user.message 
            :time=user.time
            :isActive='activeChat=== user.id'
            />
            
    </div>
    <div class="chatview">
        <ChatView/>
    </div>
</div>
  </template>


<style scoped >
    .app-container{
        @apply flex  w-screen  h-screen;
    }
    .sidenav{
        @apply h-screen w-32 flex flex-col
        justify-between items-center pt-8 pb-8 text-xl bg-bg-main-dark text-icon-color;
        scrollbar-width: none;
    }

    .chatnav{
        @apply min-w-fit bg-bg-secondary-dark text-white overflow-scroll;

    }
  
    .chatnav::-webkit-scrollbar {
    display: none; /* Hide the scrollbar for Webkit (Safari, Chrome) */
    }
    .chatview{
        @apply w-full ;
    }

    .topnav{
        @apply flex flex-col gap-10 justify-start 
    }
    .sidenav li{
        @apply hover:text-white list-none  cursor-pointer;
    }
    .active{
        @apply text-white;
    }

</style>

