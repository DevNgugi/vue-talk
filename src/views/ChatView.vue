<template>
  <div class="chat-container">
    <div class="top-container">
      <div class="image">
        <img src="https://picsum.photos/300/300" alt="" />
      </div>
      <div class="top-content">
        <div class="top-left">
          <p class="username">Joan Wangari</p>
          <p class="status">Online</p>
        </div>
        <div class="top-right">
          <p class="call"><i class="pi pi-phone"></i></p>
          <p class="more"><i class="pi pi-ellipsis-h"></i></p>
        </div>
      </div>
    </div>
    <div class="chat-body">
        <SingleMessage v-for="chat,index in chats" key="index" v-bind="index"

        :prev=isPrev(index)
        :index=index
        :message=chat.message
        :received=chat.received
        :time=chat.time
        />
    </div>
    <div class="chat-footer">
        <input class="message-input" type="text" placeholder="Type Message ...">
        <!-- <textarea name="" class="message-input" id="" cols="1" rows="1"></textarea> -->
        <div class="action-buttons">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
            <i class="pi pi-paperclip"></i>
            <div class="send">
                <i class="pi pi-send"></i>
            </div>
            
        </div>

    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue';
import SingleMessage from '../components/SingleMessage.vue'
import {userStore} from '../store/store'

const chats=userStore().chats
const isPrev=(index)=>{
    console.log(index);
    if (index==0){
        return false
    }
    else{
        if(chats[index-1].received==chats[index].received){
            return true
        }
    }
}

// chats.forEach(chat => {
//     console.log(chat.received);
// });

</script>

<style scoped>
.chat-container{
    @apply border h-screen flex  flex-col relative
}
.chat-body{

}
.message-input{
    @apply outline-none  border mr-4 p-1 pl-8 ml-8 w-5/6
}
.send{
    @apply border w-12 h-12 rounded-full flex justify-center items-center bg-red-highlight text-white border-none
}
.action-buttons{
    @apply flex gap-4 items-center justify-center min-w-fit  mr-8 
}
.chat-footer{
    @apply p-4 border-t absolute bottom-0 right-0 left-0 w-auto flex justify-between
}
.top-container {
  @apply text-sm cursor-pointer p-4 flex justify-start border-b sticky;
}
.top-content {
  @apply flex flex-1  justify-between ;
}
.status {
  @apply w-80 text-sm font-normal  whitespace-nowrap overflow-hidden text-online-green text-ellipsis;
}
.image {
  @apply w-14 h-14 rounded-full overflow-hidden;
}
img {
  @apply object-cover;
}
.username {
  @apply font-bold;
}
.top-left {
  @apply flex flex-col justify-center   ml-4;
}
.top-right {
  @apply flex justify-center items-center text-icon-color text-lg  min-w-fit gap-4;
}
.call,
.more {
  @apply flex justify-center items-center w-12 h-12 rounded-full border;
}

.call {
  @apply bg-bg-secondary-dark text-white;
}
</style>
