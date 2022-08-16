<template>
    <div class="side-nav">
       <div class="content">
         <router-link to="/">💹 </router-link>
        <router-link :to="{name : 'news'}">📻</router-link>
        <router-link to="/magazine"> 🗞️ </router-link>

        <router-link to="/" class="profile"> 👈</router-link>
       </div>
    </div>
</template>

<style scoped>
.side-nav{
    background-color: #1a1a1a;
    min-width: 20px;
    min-height: 100vh;
}
.content{
    padding: 100px 30px;
}
a{
    text-decoration: none;
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    color: white;
}
.profile{
    position: fixed;
    bottom: 0px;
}

a.router-link-exact-active {
  color: #e17313;
}
</style>
