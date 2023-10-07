<template>
    <div class="container">
        <form action="">
            <h2>Welcome to <span>X-Talk</span>
            </h2>
            <input type="text" placeholder="Username ...">
            <input type="password" placeholder="password ...">
            <button>login</button>
        </form>
    </div>
</template>

<script setup>
 
</script>

<style scoped>
.container{
    width: 100vw;
    height: 100vh;
    background-color:var(--main-bg-color);
    display: flex;
    align-items: start;
    justify-content: center;
}

form{
margin-top: 150px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 250px;
}

form h2{
color:white;
margin-bottom: 30px;
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
    background-color: var(--secondary-bg-color);
    font-weight: bold;
    font-size: medium;
    text-transform: capitalize;
    cursor:pointer;


}
button:hover{
    background-color: var(--secondary-bg-color-hover);

}
span{
    color: var(--secondary-bg-color);
    
}
</style>