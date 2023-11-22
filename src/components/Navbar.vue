<template>
    <div class="container">
        <ul>
            <li>Home</li>
            <li>
                 <router-link to="/login" active-class="active">Login</router-link>
            </li>
            <li>Logout</li>
            <li>Chat</li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>

.container{
    width: 100vw;
    height: 80px;
    background-color: black;
    color:rgb(255, 157, 173);
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}
ul{
    list-style-type: none;
    text-decoration: none;
    display: flex;
    gap: 16px;
    border:1px solid white;
}
li{
    cursor:pointer;
}
li:hover{
    color:rgb(224, 137, 151);

}

</style>