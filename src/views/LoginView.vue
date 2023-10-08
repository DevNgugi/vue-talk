<template>
    <div class="container">
        <div class="form" >
            <h1>Welcome to <span>X-Talk</span>
            </h1>
            <input type="text" placeholder="Username ...">
            <input type="password" placeholder="password ...">
            <button @click=login>Login</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

 const login=()=>{
    router.push('/');
 }
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    border: 0;
}
.container{
    width: 100vw;
    height: 100vh;
    max-width: none;
    display: flex;
    align-items: start;
    justify-content: center;
    @apply bg-bg-main-dark;
}

.form{
margin-top: 150px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 250px;
}

.form h1{
color:white;
margin-bottom: 30px;
@apply text-2xl;
}
input{
    /* border-radius: 100px; */
    border: none;
    outline:none;
    padding: 8px;
    width: 100%;
    border-radius: 100px;
    margin-bottom: 10px;
    padding-left: 20px;

}
button{
    border: none;
    outline:none;
    padding: 8px;
    width: 100%;
    border-radius: 100px;
    margin-bottom: 10px;
    /* background-color: var(--secondary-bg-color); */
    font-weight:normal;
    font-size: medium;
    text-transform: capitalize;
    cursor:pointer;
    @apply bg-red-highlight;


}
button:hover{
    background-color: var(--secondary-bg-color-hover);

}
span{
    @apply text-red-highlight;

    
}
</style>